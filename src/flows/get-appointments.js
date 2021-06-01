import apptAgreement from '../page-objects/appointment-agreement'
import { getApptDetails } from '../formatter/get-appt-info'
import * as _ from 'lodash'
import * as cheerio from 'cheerio'
import * as mom from 'moment'
import { extendMoment } from 'moment-range'
import { loggerInstance } from '../app/services/logger.service'

const moment = extendMoment(mom)

/**
 * checks if a given appoinment date is within 7 days of a user registration date
 * @param apptData
 * @param userRegisterDate
 * @returns {*}
 */
export function isApptAvailableInTheNext7Days (apptData, userRegisterDate) {
  const appointmentAvaliableDateString = `${apptData.dayOfAppt} ${apptData.monthOfAppt}`
  const userCreationDate = moment(userRegisterDate)
  const sevenDaysFromNow = moment(userRegisterDate).add(7, 'days')
  const range = moment.range(userCreationDate, sevenDaysFromNow)
  const appointmentDate = moment(
    appointmentAvaliableDateString,
    'DD MMMM YYYY',
    'de'
  )
  if (!appointmentDate.isValid()) {
    loggerInstance.warn(`invalid date string ${appointmentAvaliableDateString}`)
    throw new Error(`INVALID_DATE: ${appointmentAvaliableDateString}`)
  }
  return range.contains(appointmentDate)
}

export function getBookableAppointments ($) {
  return $(apptAgreement.appointmentTable).find(apptAgreement.bookableAppt)
}

export function getAppointmentLinks (appts, $) {
  return appts.map(_.partialRight(getApptDetails, $))
    .toArray()
    .filter(data => isApptAvailableInTheNext7Days(data))
}
export default async function availableAppts (page, url) {
  let $
  try {
    loggerInstance.info(`navigating to: ' ${url}`)
    await page.goto(url, { waitUntil: 'networkidle2' })
    const html = await page.evaluate(() => document.body.innerHTML)

    $ = cheerio.load(html)
  } catch (e) {
    throw new Error(e)
  }
  const appts = getBookableAppointments($)

  const apptLinks = getAppointmentLinks(appts, $)

  return apptLinks
}
