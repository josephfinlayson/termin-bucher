import puppeteer from 'puppeteer'
import getUsers from './get-users'
import getAppointments from './get-appointments'
import bookAppts from './book-appointments'
import notify from './notify-users'
import markUserAsFound from './mark-user-as-found'

async function checkForAppts () {
  const users = await getUsers()
  if (users.length === 0) {
    console.log(' No users')
    return
  }

  const browser = await puppeteer.launch({ headless: process.env.NODE_ENV === 'production', args: ['--no-sandbox', '--disable-setuid-sandbox'] })
  const page = await browser.newPage()
  const appts = await getAppointments(page)

  if (appts.length === 0) {
    console.log(' No appointments')
    return
  }

  console.log(appts)
  const usersWithScreenShots = await users.map(async function (user, i) {
    return { screenshot: await bookAppts(page, user, appts[i].link), user }
  }).filter(userWithScreenshot => !!userWithScreenshot.screenshot)

  usersWithScreenShots.forEach(user => markUserAsFound(user.user))
  usersWithScreenShots.forEach(user => notify(user.user, user.screenshot))

  browser.close()
}

checkForAppts();

(function loop () {
  const rand = Math.round(Math.random() * (300000 - 15000) + 1500)
  console.log(
    'next check scheduled for',
    Math.round(rand / 1000 / 60),
    'minutes'
  )
  setTimeout(function () {
    checkForAppts()
    loop()
  }, rand)
})()
