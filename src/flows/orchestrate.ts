/* eslint-disable @typescript-eslint/ban-ts-ignore */
import * as puppeteer from 'puppeteer'
import getUsers from './get-users'
import getAppointments from './get-appointments'
import bookAppts from './book-appointments'
import notify from './notify-users'
import markUserAsFound from './mark-user-as-found'
import getLocationUrl from './get-locations-for-authority-id'
import { loggerInstance, RethrownError } from '../app/services/logger.service'

enum FinalStatus {
    SUCCESS='SUCESS',
    FAILURE='SUCESSS'
}

async function checkForAppts (): Promise<FinalStatus> {
  let users

  try {
    users = await getUsers()
  } catch (e) {
    throw new RethrownError('cannot get users', e)
  }

  if (users.length === 0) {
    loggerInstance.info('No users')
    return FinalStatus.FAILURE
  }

  let locationsUrl
  try {
    locationsUrl = await getLocationUrl(users[0].id)
  } catch (e) {
    throw new RethrownError('cannot get location url', e)
  }
  const browser = await puppeteer.launch({ headless: process.env.NODE_ENV === 'production', args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1920,1080'] })
  const page = await browser.newPage()

  let appts
  try {
    appts = await getAppointments(page, locationsUrl)
  } catch (e) {
    browser.close()
    throw new RethrownError('error fetching appointments', e)
  }

  if (appts.length === 0) {
    loggerInstance.info('No appointments')
    browser.close()
    return FinalStatus.FAILURE
  }

  const usersWithScreenShots = []

  for (const [index, user] of users.entries()) {
    const screenshot = await bookAppts(page, user, appts[index].link)
    if (screenshot) {
      // @ts-ignore
      usersWithScreenShots.push({ user, screenshot })
    } else {
      loggerInstance.info(`no screenshot found for user: ${user}`)
    }
  }

  // @ts-ignore
  usersWithScreenShots.forEach(user => { markUserAsFound(user.user) })
  // @ts-ignore
  usersWithScreenShots.forEach(user => notify(user.user, user.screenshot))

  browser.close()
  return FinalStatus.SUCCESS
}

(function loop () {
  const rand = Math.round(Math.random() * (300000 - 15000) + 4500)
  loggerInstance.info(
    'next check scheduled for' +
    Math.round(rand / 1000 / 60) +
    'minutes'
  )
  setTimeout(function () {
    checkForAppts().then(r => loggerInstance.info(r)).catch(e => loggerInstance.error(e))
    loop()
  }, rand)
})()

checkForAppts().then(r => loggerInstance.info(r)).catch(e => loggerInstance.error(e))
