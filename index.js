/**
 * Created by joe on 04/07/16.
 */
"use strict";

import express from "express";
import knex from "./data/index";
import * as validator from "email-validator";
import cors from "cors";
import "./appts";
import { renderEmail } from "react-html-email";
import mailgun from './mailgun'
import register from '@babel/register'
register()
const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/email", (req, res) => {
  if (validator.validate(req.body.email)) {
    console.log("valid email", req.body.email)
    knex
      .table("users")
      .insert({ email: req.body.email })
      .then(r => res.send(r))
      .then(() => sendEmail(req.body.email))
      .catch(err => {
        console.error(err)
        res.status(500).send(err);
      });
  } else {
    res.status(400).send({ err: "INVALID_EMAIL" });
  }
});

// app.get("/api/email", (req, res) => {
//   if (validator.validate(req.body.email)) {
//     knex
//       .table("users")
//       .delete({ email: req.body.email })
//       .then(res.send)
//       .then(() => sendEmail(req.body.email))
//       .catch(err => {
//         console.error(err);
//         res.status(500).send({ err: "SOMETHING_BROKE" });
//       });
//   } else {
//     res.status(400).send({ err: "INVALID_EMAIL" });
//   }
// });


app.get("/api/test", (req, res) => {
    knex
      .table("users")
      .select("*")
      .then((r) =>res.send(r))
      .catch(err => {
        console.error("test", err);
        res.status(500).send({ err: "SOMETHING_BROKE", stack: err });
      });
});

const health = (req, res) => {
  knex
    .raw("select 1+1 as result")
    .then(r => res.send(r))
    .catch(() => {
      res.status(500).send("Something broke!");
    });
};

function sendEmail(email) {
  const data = {
    from: "Terminator Berlin <no-reply@not-a-valid-domain.com>",
    to: email,
    subject: "Thanks for signing up to terminator.berlin",
    text: `
    Dear User,
    
    Thanks for signing up to terminator.berlin. We are now trying to find you an appointment in the next seven days. We'll email you if we find one
    
    Best,
    Joseph from terminator.berlin
    `,
    "o:tag": "terminator-alpha"
  };

  mailgun.messages().send(data, function(error, body) {
    if (error) {
      console.error(error);
    } else {
      console.debug(
        `Mail successfully send to user ${
          email
          } for signing up`
      );
    }
  });
}
app.get("/api/health", health);
app.get("/health", health);

const port = 3000;

app.listen(port, () => console.log(`Example app listening on  ${port}!`));
