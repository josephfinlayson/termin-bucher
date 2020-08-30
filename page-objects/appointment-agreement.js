const alt =
  'https://service.berlin.de/terminvereinbarung/termin/tag.php?termin=1&anliegen[]=121627&dienstleisterlist=122210,122217,122219,122227,122231,122238,122243,122252,122260,122262,122254,122271,122273,122277,122280,122282,122284,122291,122285,122286,122296,150230,122301,122297,122294,122312,122314,122304,122311,122309,317869,324433,325341,324434,122281,324414,122283,122279,122276,122274,122267,122246,122251,122257,122208,122226,121646&herkunft=http%3A%2F%2Fservice.berlin.de%2Fdienstleistung%2F121627%2F'

export default {
  appointmentTable: '.calendar-table .calendar-month-table table',
  bookableAppt: 'td.buchbar',
  dayOfAppt: block => block.find('a').text().trim(),
  monthOfAppt: block =>
    block
      .parents('tbody')
      .siblings('thead')
      .find('.month')
      .text().trim(),
  apptLink: block =>
    'https://service.berlin.de' +
    block.find('a').prop('href'),
  url: 'https://service.berlin.de/terminvereinbarung/termin/restart/?providerList=326139&requestList=121737&source=dldb'

}
