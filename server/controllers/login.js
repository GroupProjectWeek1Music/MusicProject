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

const loginApp = function(req,res){
    let email = req.body.username
    let password = req.body.password
    
    //cari email di dalam data base
    //cek paswordnya
    //kirim token baru

    User
    .findOne({
        email : email
    })
    .then(function(user){
        if(user){
            let hash = user.password
            if (bcrypt.compareSync(password, hash)){
                console.log("succesfully login", user)
                var token = jwt.sign({ id:user.id, name:user.name, email:user.email }, 'hacktiv8');

                console.log("dari server token :", token )
                res
                    .status(200)
                    .json(token)
            }else{
                res
                    .status(401)
                    .json({
                        msg : "wrong password"
                    })
                console.log("wrong password")
            }
        }else{
            res
                .status(400)
                .json("unregister")
        }
    })
    .catch(function(err){
        console.log("controller loginReg : =====>",err)
    })
    console.log(email, password)
}


module.exports = {
    registerFb,
    loginApp,  
}