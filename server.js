const express = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser");

const PORT = 8000

app.use(cors())

// view engine
app.set('view engine', 'ejs')

app.use(express.static('public'));

// serve JSON files
const fs = require('fs')

// handle JSON data
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

// handle varioues route from routes folder
const routes = require("./routes/routes.js")(app, fs)


// listen on port 8000
app.listen(PORT)