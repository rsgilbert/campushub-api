const express =  require('express')
const compression = require('compression')
const bodyParser = require('body-parser')
const router = require('./router')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(morgan('short'))
app.use(compression())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(router)

module.exports = app