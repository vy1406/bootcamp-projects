const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')
const api = require('./server/routes/api')

mongoose.connect("mongodb://localhost/weatherDB", {useNewUrlParser: true})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.use('/', api)

const port = 4200
app.listen(port, function () {
    console.log(`Server running on ${port}`)
})

