import email from '../email/src/Email'
import _ from 'lodash'
import { renderEmail } from 'react-html-email'
import mailgun from '../mailgun'

export default function sendEmail (user, attachment) {
  console.log('sending email to ' + user.email)
  const attch = new mailgun.Attachment({ data: attachment, filename: 'appointment_confirmation.png' })
  const data = {
    from: 'Terminator Berlin <no-reply@not-a-valid-domain.com>',
    to: user.email,
    subject: 'We\'ve booked your Anmeldung appointment',
    html: renderEmail(email({ emailLinks: user.appointments })),
    'o:tag': 'terminator-alpha',
    attachment: attch
  }

  mailgun.messages().send(data, function (error, body) {
    if (error) {
      console.error(error)
    } else {
      console.debug(
                `Mail successfully send to user ${user.email
                } for appointments ${JSON.stringify(user.appointments)}`
      )
    }
  })
}
