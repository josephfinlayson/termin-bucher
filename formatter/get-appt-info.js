import apptAgreement from "../page-objects/appointment-agreement";

export const getApptDetails = (a, appt, $) => {
  return {
    link: apptAgreement.apptLink($(appt), $),
    text:
      apptAgreement.dayOfAppt($(appt), $) +
      " " +
      apptAgreement.monthOfAppt($(appt), $)
  };
};
