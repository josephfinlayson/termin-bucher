import email from "./email/src/Email";
import apptAgreement from "./page-objects/appointment-agreement";
import { getApptDetails } from "./formatter/get-appt-info";
import _ from "lodash";
import { mailgun_api_key, domain, emails } from "./api-key";
import cheerio from "cheerio";
import fetch from "node-fetch";
import { renderEmail } from "react-html-email";
import mom from "moment";
import { extendMoment } from "moment-range";
import knex from "knex";

const moment = extendMoment(mom);

const mailgun = require("mailgun-js")({
  apiKey: mailgun_api_key,
  domain: domain
});

export function isApptAvailableInTheNext7Days(data) {
  const dateString = data.text;
  const now = moment();
  const sevenDaysFromNow = moment().add(7, "days");
  const range = moment.range(now, sevenDaysFromNow);
  const appointmentDate = moment(dateString, "DD MMMM YYYY", "de");
  if (!appointmentDate.isValid()) {
    console.error(dateString);
    throw new Error(`INVALID_DATE: ${dateString}`);
  }
  return range.contains(appointmentDate);
}

export function getBookableAppointments($) {
  return $(apptAgreement.appointmentTable).find(apptAgreement.bookableAppt);
}

function getEmailsRegisteredInLast7Days() {
  knex("users")
    .whereBetween("created_date", [
      moment()
        .subtract(7, "days")
        .format("YYYY-MM-DD"),
      moment().format("YYYY-MM-DD")
    ])
    .select();
}

function checkForAppts() {
  return fetch(apptAgreement.url)
    .then(response => {
      return response.text();
    })
    .then(html => {
      const $ = cheerio.load(html);

      console.log(getEmailsRegisteredInLast7Days());

      // for every email
      // pull emails from DB
      // check if appt in the next 7 days
      // send email

      const appts = getBookableAppointments($);
      const apptLinks = appts
        .map(_.partialRight(getApptDetails, $))
        .toArray()
        .filter(data => isApptAvailableInTheNext7Days(data));

      if (!apptLinks.length) {
        console.log("nothing found");
      } else {
        const data = {
          from: "Terminator Berlin <no-reply@not-a-valid-domain.com>",
          to: emails,
          subject: "An appointment to Anmeld has been found!",
          html: renderEmail(email({ emailLinks: apptLinks.toArray() }))
        };

        mailgun.messages().send(data, function(error, body) {
          if (error) {
            console.error(error);
          }
        });
      }
    })
    .catch(console.error);
}

checkForAppts();
setInterval(
  checkForAppts,
  60 * 1000 * Math.floor((Math.random() + 1) * (10 - 1)) + 1
);
