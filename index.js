/**
 * Created by joe on 04/07/16.
 */
'use strict'

import express from 'express'
import knex from './data/index'
import * as validator from 'email-validator'
import cors from 'cors'
import mailgun from './mailgun'
import register from '@babel/register'
import './flows/orchestrate'
register()

const app = express()

app.use(cors())
app.use(express.json())

app.post('/api/user', async (req, res) => {
  if (validator.validate(req.body.email)) {
    console.log('valid email', req.body.email)
    const { first_name, last_name, email, phone_number, authority_id } = req.body
    try {
        const [id] =  await knex
        .table('users')
        .insert({ first_name, last_name, email, phone_number })
        .returning('id')
        .catch(err => {
          console.error("error inserting user", err)
          res.status(500).send(err)
        })
    if (authority_id) {
        await knex.table('location_user_mapping').insert({
            user_id: id,
            authority_id
        }).returning('user_id')
    }
      
      res.send({id})
  
    } catch (e) {
        res.status( 500)
        res.send({error: "error"})
    }
  } else {
    res.status(400).send({ err: 'INVALID_EMAIL' })
  }
})

app.get('/api/locations', async (req, res) => {
  const locations = await knex
    .table('locations')
    .select('authority_name', 'authority_id')
    .distinct('authority_id')
    
    res.send(locations.map((row) => {
        return {
            authority_name: row.authority_name.replace('Bezirksamt ', ''),
            authority_id: row.authority_id
        }
    }))

})

const health = (req, res) => {
  knex
    .raw('select 1+1 as result')
    .then(r => res.send(r))
    .catch(() => {
      res.status(500).send('Something broke!')
    })
}

function sendEmail (email, firstName) {
  const data = {
    from: 'Terminator Berlin <hello@terminator.berlin>',
    to: email,
    replyTo: "joseph.finlayson@gmail.com",
    subject: 'Thanks for signing up to terminator.berlin',
    text: `
    Dear ${firstName || 'User'},
    
    Thanks for signing up to terminator.berlin. We are now trying to find you an appointment in the next seven days. We'll email you if we find one
    
    Best,
    Joseph from terminator.berlin
    `,
    'o:tag': 'terminator-alpha'
  }

  mailgun.messages().send(data, function (error, body) {
    if (error) {
      console.error(error)
    } else {
      console.debug(
        `Mail successfully send to user ${
          email
          } for signing up`
      )
    }
  })
}
app.get('/api/health', health)
app.get('/health', health)

const port = 3000

app.listen(port, () => console.log(`Example app listening on  ${port}!`))
