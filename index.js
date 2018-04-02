/**
 * Created by joe on 04/07/16.
 */
"use strict";

const express = require('express')
const app = express()
// const register = require("babel-register")
//
// register()

require("./appts");



app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))