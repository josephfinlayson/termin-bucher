/**
 * Created by joe on 04/07/16.
 */
'use strict'

import express from 'express'
import knex from './data/index'
import cors from 'cors'
import mailgun from './mailgun'
import register from '@babel/register'
import './flows/orchestrate'
import userController from './domains/user/user_controller'
import timeController from './domains/times/times_controller'

register()

const app = express()

app.use(cors())
app.use(express.json())

app.post(userController.route, userController.hander)
app.get(timeController.route, timeController.handler)

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
app.get('/api/health', health)
app.get('/health', health)

const port = 3000

app.listen(port, () => console.log(`Example app listening on  ${port}!`))
