import apptAgreement from '../page-objects/appointment-agreement'

export const getApptDetails = (a, appt, $) => {
  return {
    link: apptAgreement.apptLink($(appt), $),
    dayOfAppt: apptAgreement.dayOfAppt($(appt), $),
    monthOfAppt: apptAgreement.monthOfAppt($(appt), $)
  }
}
