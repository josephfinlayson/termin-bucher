import { appointmentPage } from '../fixture';
import cheerio from 'cheerio';
import { getBookableAppointments, isApptAvailableInTheNext7Days } from '../appts';
import page from '../page-objects/appointment-agreement';

const $ = cheerio.load(appointmentPage)


test('check if it correctly finds the appointment', () => {
  const appts = getBookableAppointments($)
  const first_appt = $(appts[0])

  const monthOfAppt = page.monthOfAppt(first_appt)
  const dayOfAppt = page.dayOfAppt(first_appt)
  expect(dayOfAppt).toBe('26')
  expect(monthOfAppt).toBe('April 2018')
})


test('check if it correctly finds the appointment that are in the next 7 days', () => {
  const April262018 = '26 April 2018';
  const April152018 = '15 April 2018';
  const April312018 = '30 April 2018';
  const Mail312018 = '31 Mai 2018';

  expect(isApptAvailableInTheNext7Days(
    { text: April312018 }, '2018-04-14 11:22:45'
  )).toBe(false)


  expect(isApptAvailableInTheNext7Days(
    { text: Mail312018 }, '2018-05-01 11:22:45'
  )).toBe(false)


  expect(isApptAvailableInTheNext7Days(
    { text: April262018 }, '2018-04-01 11:22:45'
  )).toBe(false)

  expect(isApptAvailableInTheNext7Days(
    { text: April152018 }, '2018-04-14 11:22:45'
  )).toBe(true)
})
