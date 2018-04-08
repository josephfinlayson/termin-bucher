/**
 * Created by joe on 04/07/16.
 */
"use strict";

const express = require('express')
const app = express()
import knex from './data/index'

require('dotenv').load();
require("./appts");


app.get('/', (req, res) => res.send('Hello Joe!'))
app.get('/db', (req, res) => {
    knex.raw('select 1+1 as result').catch(err => {
      console.log(err);
      process.exit(1);
    });
  }
)

const port = 3000
app.listen(port, () => console.log(`Example app listening on  ${port}!`))

