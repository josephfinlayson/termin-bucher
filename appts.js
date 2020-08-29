import email from "./email/src/Email";
import apptAgreement from "./page-objects/appointment-agreement";
import { getApptDetails } from "./formatter/get-appt-info";
import _ from "lodash";
import cheerio from "cheerio";
import fetch from "node-fetch";
import { renderEmail } from "react-html-email";
import mom from "moment";
import { extendMoment } from "moment-range";
import knex from "./data/index";
import mailgun from "./mailgun";
import puppeteer from 'puppeteer'

const moment = extendMoment(mom);

/**
 * checks if a given appoinment date is within 7 days of a user registration date
 * @param data
 * @param userRegisterDate
 * @returns {*}
 */
export function isApptAvailableInTheNext7Days(data, userRegisterDate) {
    const appointmentAvaliableDateString = data.text;
    const userCreationDate = moment(userRegisterDate);
    const sevenDaysFromNow = moment(userRegisterDate).add(7, "days");
    const range = moment.range(userCreationDate, sevenDaysFromNow);
    const appointmentDate = moment(
        appointmentAvaliableDateString,
        "DD MMMM YYYY",
        "de"
    );
    if (!appointmentDate.isValid()) {
        console.error(appointmentAvaliableDateString);
        throw new Error(`INVALID_DATE: ${appointmentAvaliableDateString}`);
    }
    return range.contains(appointmentDate);
}

export function getBookableAppointments($) {
    return $(apptAgreement.appointmentTable).find(apptAgreement.bookableAppt);
}

function getEmailsRegisteredInLast7Days() {
    return knex("users")
        .whereBetween("created_at", [
            moment()
                .subtract(7, "days")
                .format("YYYY-MM-DD"),
            moment().format("YYYY-MM-DD")
        ])
        .select("*");
}

async function checkForAppts() {
    let $
    try {
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();
        await page.goto(apptAgreement.url, { waitUntil: 'networkidle2' });
        await page.goto("https://service.berlin.de/terminvereinbarung/termin/restart/?providerList=122210%2C122217%2C327316%2C122219%2C327312%2C122227%2C122231%2C327346%2C122243%2C327348%2C122252%2C329742%2C122260%2C329745%2C122262%2C329748%2C122254%2C329751%2C122271%2C327278%2C122273%2C122277%2C327276%2C122280%2C327294%2C122282%2C327290%2C122284%2C327292%2C122291%2C327270%2C122285%2C327266%2C122286%2C327264%2C122296%2C327268%2C150230%2C329760%2C122301%2C327282%2C122297%2C327286%2C122294%2C327284%2C122312%2C329763%2C122304%2C327330%2C122311%2C327334%2C122309%2C327332%2C122281%2C327352%2C122279%2C122276%2C327324%2C122274%2C327326%2C122267%2C329766%2C122246%2C327318%2C122251%2C327320%2C122257%2C122208%2C122226&requestList=120686&source=dldb")
        let html = await page.evaluate(() => document.body.innerHTML);
        
        $ = cheerio.load(html)

    } catch (e) {
        console.error(JSON.stringify(e))
        return

    }
    const appts = getBookableAppointments($)
    console.log(appts)
    
    const apptLinks = appts
        .map(_.partialRight(getApptDetails, $))
        .toArray()
        .filter(data => isApptAvailableInTheNext7Days(data));
    
    console.log(apptLinks)

    const users = await getEmailsRegisteredInLast7Days()
    if (!users) {
        throw new Error("No users");
    }

    const processedUsers = users.map(user => {
        return {
            ...user,
              appointments: apptLinks.filter(apptLink => isApptAvailableInTheNext7Days(apptLink, user.created_at))
        }
    }).filter(user => user.appointments.length)

    if (!processedUsers.length) {
        console.debug("No appointments found for user");
    }

    processedUsers.forEach(sendEmail);

}



function sendEmail(user) {
    console.log("sending email to " + user.email);

    const data = {
        from: "Terminator Berlin <no-reply@not-a-valid-domain.com>",
        to: user.email,
        subject: "An appointment to Anmeld has been found!",
        html: renderEmail(email({ emailLinks: user.appointments })),
        "o:tag": "terminator-alpha"
    };

    mailgun.messages().send(data, function (error, body) {
        if (error) {
            console.error(error);
        } else {
            console.debug(
                `Mail successfully send to user ${
                user.email
                } for appointments ${JSON.stringify(user.appointments)}`
            );
        }
    });
}

checkForAppts().then(e => console.log(e));
(function loop() {
    const rand = Math.round(Math.random() * (3000000 - 15000) + 15000);
    console.log(
        "next check scheduled for",
        Math.round(rand / 1000 / 60),
        "minutes"
    );
    setTimeout(function () {
        checkForAppts();
        loop();
    }, rand);
})();
