const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// EJS
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))

// Routes




module.exports = app