import _ from 'lodash'
import delay from 'delay'
import { loggerInstance, RethrownError } from '../app/services/logger.service'

const success = 'Ihr Termin ist eingetragen worden'

export default async function bookApptAndScreenshot (page, user, firstApptLink) {
  loggerInstance.info(`going to ${firstApptLink}`)
  let content
  try {
    content = await page.content()
    await page.goto(firstApptLink, { waitUntil: 'domcontentloaded' })
    content = await page.content()
    await page.click('div.timetable > table > tbody > tr:nth-child(1) > td > a')
    await delay(3000)
    content = page.content()
    await page.type('#familyName', `${user.first_name} ${user.last_name}`)
    await page.type('#email', user.email)
    try {
      await page.type('#telephone', user.phone_number)
    } catch (e) {
      loggerInstance.warn('could not add telephone')
    }

    await page.click('#agbgelesen')
    await page.click('#register_submit')
    await delay(3000)
    content = await page.content()

    if (content.includes(success)) {
      return await page.screenshot({ fullPage: true })
    } else {
      // new edge case
      loggerInstance.info(content)
      throw new Error('booking not successful')
    }
  } catch (e) {
    loggerInstance.info('failing_content', { content })
    loggerInstance.error(new RethrownError('Could not book appointment', e))
  }
}
