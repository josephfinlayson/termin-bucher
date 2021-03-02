import { domain, mailgun_api_key } from "./api-key";

const mailgun = require("mailgun-js")({
  apiKey: mailgun_api_key,
  domain: domain
});

export default mailgun