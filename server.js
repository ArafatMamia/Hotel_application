const express = require('express')
const bodyParser = require('body-parser')

const personroutes = require('./routes/personsroutes')
const menuitemsroutes = require('./routes/menuitemsroutes')
const databaseConnection = require('./db')
require('dotenv').config()
const app = express()
const PORT = process.env.PORT || 3000

databaseConnection()
app.use(bodyParser.json())
app.use('/person',personroutes)
app.use('/menu',menuitemsroutes)

app.listen(PORT, () =>{
    console.log(`the server is listening on port ${PORT}`)
})