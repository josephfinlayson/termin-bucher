import renderEmail from "./email";
import apptAgreement from "./page-objects/appointment-agreement";
import { getApptDetails } from "./formatter/get-appt-info";
import _ from "lodash";
import { api_key, domain, emails } from "./api-key";
import cheerio from "cheerio";
import fetch from "node-fetch";

const mailgun = require("mailgun-js")({
  apiKey: api_key,
  domain: domain
});

function checkForAppts() {
  return fetch(apptAgreement.url)
    .then(response => {
      return response.text();
    })
    .then(html => {
      const $ = cheerio.load(html);
      const appts = $(apptAgreement.appointmentTable).find(
        apptAgreement.bookableAppt
      );

      if (!appts.length) {
        console.log("nothing found");
      } else {
        const apptLinks = appts.map(_.partialRight(getApptDetails, $));

        const data = {
          from: "Excited User <me@samples.mailgun.org>",
          to: emails,
          subject: "APPT FOUND",
          html: renderEmail(apptLinks.toArray())
        };

        mailgun.messages().send(data, function(error, body) {
          console.log(error, body);
        });
        console.log("sent");
      }
    })
    .catch(console.error);
}

checkForAppts();
setInterval(
  checkForAppts,
  60 * 1000 * Math.floor((Math.random() + 1) * (10 - 1)) + 1
);
