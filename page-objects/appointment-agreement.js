
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
  url: 'https://service.berlin.de/terminvereinbarung/termin/restart/?providerList=327286&requestList=120686&source=dldb'

}
