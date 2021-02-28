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


// Implement a simple Web Server
// It should take any POST request to any URL
// It should look for the HTML form parameter ‘text’
// It should reverse the value of that parameter
// If the user submits “Hello”, it should return “olleH”


app.post('/*', async (req, res) => {
    const message = req.body.text
    const reversedMessage = message.split('').reverse().join('')
    
    return new HttpResponseOK({message: reversedMessage});

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
