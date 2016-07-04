/**
 * Created by joe on 04/07/16.
 */
'use strict';

const cheerio = require('cheerio');
const fetch = require('node-fetch');
var mailgun = require('mailgun-js')({
    apiKey: require('./api-key'),
    domain: 'sandboxc2d5326d107143429e01b8b33e36f94e.mailgun.org'
});

const url = 'https://service.berlin.de/terminvereinbarung/termin/tag.php?id=&buergerID&buergername=&absagecode=&Datum=1467324000&anliegen%5B%5D=121627&dienstleister%5B%5D=122210&dienstleister%5B%5D=122217&dienstleister%5B%5D=122219&dienstleister%5B%5D=122227&dienstleister%5B%5D=122231&dienstleister%5B%5D=122238&dienstleister%5B%5D=122243&dienstleister%5B%5D=122252&dienstleister%5B%5D=122260&dienstleister%5B%5D=122262&dienstleister%5B%5D=122254&dienstleister%5B%5D=122271&dienstleister%5B%5D=122273&dienstleister%5B%5D=122277&dienstleister%5B%5D=122280&dienstleister%5B%5D=122282&dienstleister%5B%5D=122284&dienstleister%5B%5D=122291&dienstleister%5B%5D=122285&dienstleister%5B%5D=122286&dienstleister%5B%5D=122296&dienstleister%5B%5D=150230&dienstleister%5B%5D=122301&dienstleister%5B%5D=122297&dienstleister%5B%5D=122294&dienstleister%5B%5D=122312&dienstleister%5B%5D=122314&dienstleister%5B%5D=122304&dienstleister%5B%5D=122311&dienstleister%5B%5D=122309&dienstleister%5B%5D=317869&dienstleister%5B%5D=324433&dienstleister%5B%5D=325341&dienstleister%5B%5D=324434&dienstleister%5B%5D=122281&dienstleister%5B%5D=324414&dienstleister%5B%5D=122283&dienstleister%5B%5D=122279&dienstleister%5B%5D=122276&dienstleister%5B%5D=122274&dienstleister%5B%5D=122267&dienstleister%5B%5D=122246&dienstleister%5B%5D=122251&dienstleister%5B%5D=122257&dienstleister%5B%5D=122208&dienstleister%5B%5D=122226&dienstleister%5B%5D=121646&herkunft=http://service.berlin.de/dienstleistung/121627/'
let i = 0
function checkForAppts () {
    fetch(url)
        .then((response) => {
            return response.text()
        })
        .then((html) => {
            const $ = cheerio.load(html)
            const appts = $('div.calendar-table > div.row-fluid > div:nth-child(1)').find('td.buchbar');

            if (appts.length) {
                console.log('nothing found', ++i);
            } else {

                var data = {
                    from: 'Excited User <me@samples.mailgun.org>',
                    to: 'joseph.finlayson@gmail.com',
                    subject: 'APPT FOUND! ',
                    text: url
                };

                mailgun.messages().send(data, function (error, body) {
                    console.log(error, body);
                });
            }
        }).catch(console.error.bind(console))

}

setInterval(checkForAppts, 60 * 1000 * Math.floor(Math.random() * (10 - 1)) + 1)