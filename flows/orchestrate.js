import puppeteer from 'puppeteer'
import getUsers from './get-users'
import getAppointments from './get-appointments'
import bookAppts from './book-appointments'
import notify from './notify-users'

async function checkForAppts () {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()
  const appts = getAppointments(page)
  if (appts.length === 0) {
    console.log(' No appointments')
    return
  }

  const users = await getUsers()
  if (users.length === 0) {
    console.log(' No users')
    return
  }
  const usersWithScreenShots = await users.map(async function (user, i) {
    return { screenshot: await bookAppts(page, user, appts[i].link), user }
  }).filter(userWithScreenshot => !!userWithScreenshot.screenshot)

  usersWithScreenShots.forEach(user => notify(user.user, user.screenshot))
}

checkForAppts().then(e => console.log(e));
(function loop () {
  const rand = Math.round(Math.random() * (3000000 - 15000) + 15000)
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
