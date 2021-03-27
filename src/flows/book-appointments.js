import _ from 'lodash'
import delay from 'delay'

const success = "Ihr Termin ist eingetragen worden"

export default async function bookApptAndScreenshot(page, user, firstApptLink) {
    console.log('going to', firstApptLink)
    try {
        await page.goto(firstApptLink, { waitUntil: 'domcontentloaded' })
        await page.click('div.timetable > table > tbody > tr:nth-child(1) > td > a')
        await delay(3000)
        await page.type('#familyName', `${user.first_name} ${user.last_name}`)
        await page.type('#email', user.email)
        try {
            await page.type('#telephone', user.phone_number)
        } catch (e) {

            console.error(e)
        }

        await page.click('#agbgelesen')
        await page.click('#register_submit')
        await delay(3000)
        const content = await page.content()

        if (content.includes(success)) {
            return await page.screenshot({ fullPage: true })
        } else {
            // new edge case
            console.log(content)
            throw new Error("booking not successful")
        }

    } catch (e) {
        console.error('Could not book appointment', e)
    }
}