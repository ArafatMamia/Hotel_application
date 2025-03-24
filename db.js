const mongoose = require('mongoose')
require('dotenv').config()
const MongoURL = process.env.MongoURL
async function databaseConnection(){
    try{
     await mongoose.connect(MongoURL)
     console.log("mongo database is connected")
    }
    catch(err){
        console.log("connection failed", err)
    }
}
module.exports = databaseConnection