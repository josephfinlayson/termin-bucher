import { readdirSync, readFileSync } from 'fs'
import { getAppointmentLinks, getBookableAppointments } from '../get-appointments'
import * as cheerio from 'cheerio'
import { ok, strictEqual, } from 'assert'
// getBookableAppointments

describe.only('booking appointments', () => {
  it('should identify bookable appointments', async () => {
    const html = readFileSync('./src/app/services/test/fixtures/appointment-day-booking.html')

    const $ = cheerio.load(html.toString())
    const result = getBookableAppointments($)
    strictEqual(result.length, 1)

    // const b = getAppointmentLinks(result, $)
  })
})
