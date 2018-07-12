var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/twotter')
var db = mongoose.connection
var bcrypt = require('bcryptjs')

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log(`we're connected!`)
})

var User = require('../models/user')

class UserController {

    static findUser (req, res) {

        User.findOne({facebookId : req.body.facebookId}, (err, user) => {
            if(err) {res.json(err)}
            res.json(user)
        })

    }

    static createUser (req, res) {

        var salt = bcrypt.genSaltSync(7);
        var hash = bcrypt.hashSync(req.body.name+'000', salt);

        User.create({
            facebookId : req.body.facebookId,
            name : req.body.name,
            email : req.body.email,
            password : hash
        }, (err, user) => {
            if(err) {res.json(err)}
            res.json(user)
        })

    }

    static login (req, res) {

    }

}

module.exports = UserController