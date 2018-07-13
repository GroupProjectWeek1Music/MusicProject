const FB = require('fb');
const User = require('../models/users')
const bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken');

const registerFb = function(req, res){
    let token = req.body.accessToken
    FB.api('me', { fields: ['id', 'name', 'email'], access_token: token }, function (resFb) {
         let email = resFb.email
         console.log(resFb.name)

         console.log(email)
         User
         .findOne({email : email})
         .then(function(user){
             if(user){
                console.log("ada user nya", user)
                var token = jwt.sign({ id:user.id, name:user.name, email:user.email }, 'hacktiv8');

                console.log("dari server token :", token )
                res
                    .status(200)
                    .json(token)
             }else{
                 console.log(resFb.name)
                 let name = resFb.name.split(' ')
                 let password = name[0]+'hacktiv8'
                 let saltRounds = 10;
                 let salt = bcrypt.genSaltSync(saltRounds);
                 let hash = bcrypt.hashSync(password, salt);
                 console.log("dari server password",hash)
                 User
                 .create({
                     name:resFb.name,
                     email:resFb.email,
                     password: hash,
                 })
                 .then(function(user){
                    var token = jwt.sign({ id:user.id, name:user.name, email:user.email }, 'hacktiv8');
                    console.log("dari server token :", token )
                    res
                    .status(200)
                    .json(token)
                 })
                 .catch(function(err){
                     res
                        .status(400)
                        .json(err)
                 })
             }
         }) 
         .catch(function(err){
             res.status(400).json(err.message)
         })
    });
}



module.exports = {
    registerFb  
}