const express = require('express')
const personroutes = require('./routes/personsroutes')
const menuitemsroutes = require('./routes/menuitemsroutes')
const app = express()
const PORT = process.env.PORT || 3000

app.use('/person',personroutes)
app.use('/menu',menuitemsroutes)

app.listen(PORT, () =>{
    console.log(`the server is listening on port ${PORT}`)
})