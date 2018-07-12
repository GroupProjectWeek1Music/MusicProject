const mongoose = require('mongoose')

var Schema = mongoose.Schema

var user = new Schema({
    name : String,
    email:String,
    password:String,
})

var user = mongoose.model('user', user)

module.exports = user