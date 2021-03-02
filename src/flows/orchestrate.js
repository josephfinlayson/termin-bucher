import puppeteer from 'puppeteer'
import getUsers from './get-users'
import getAppointments from './get-appointments'
import bookAppts from './book-appointments'
import notify from './notify-users'
import markUserAsFound from './mark-user-as-found'
import getLocationUrl from './get-locations-for-authority-id'

async function checkForAppts () {
  const users = await getUsers()
  if (users.length === 0) {
    console.log('No users')
    return
  }

  const locationsUrl = await getLocationUrl(users[0].id)

  if (!locationsUrl) {
    console.error('No location?')
    return
  }

  const browser = await puppeteer.launch({ headless: process.env.NODE_ENV === 'production', args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1920,1080'] })
  const page = await browser.newPage()
  const appts = await getAppointments(page, locationsUrl)

  if (appts.length === 0) {
    console.log('No appointments')
    browser.close()
    return
  }

  const usersWithScreenShots = []
  for (let index = 0; index < users.length; index++) {
    const user = users[index]
    const screenshot = await bookAppts(page, user, appts[index].link)
    if (screenshot) {
      usersWithScreenShots.push({ user, screenshot })
    }
  }

  usersWithScreenShots.forEach(user => markUserAsFound(user.user))
  usersWithScreenShots.forEach(user => notify(user.user, user.screenshot))

  browser.close()
}

if (process.env['ENV'] === 'production')
    checkForAppts().then().catch(console.error);

(function loop () {
    
  const rand = Math.round(Math.random() * (300000 - 15000) + 4500)
  console.log(
    'next check scheduled for',
    Math.round(rand / 1000 / 60),
    'minutes'
  )
  setTimeout(async function () {
    checkForAppts().then(console.log).catch(console.error)
    loop()
  }, rand)
})()
