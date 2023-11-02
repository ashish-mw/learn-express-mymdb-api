const dotenv = require('dotenv')
dotenv.config();

const config = require('./config')

const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(morgan('dev'))

app.get('/movies', (req, res) => {
  res.send([])
})

app.listen(config.appPort, () => {
  console.log(`Server running on ${config.appPort}`)
});
