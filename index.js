/**
 * Created by joe on 04/07/16.
 */
"use strict";

const express = require('express')
const app = express()

require("./appts");


app.get('/', (req, res) => res.send('Hello Joe!'))

const port = 80
app.listen(port, () => console.log(`Example app listening on  ${port}!`))