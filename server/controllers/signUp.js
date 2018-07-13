
const mongoose = require('mongoose');
const express = require('express')
mongoose.connect('mongodb://localhost:27017/musicalyrics-development');
const bcrypt = require('bcrypt')

const User = require('../models/User')


class signUp {
    static addUser (req,res) {
        const { name, email, password } = req.body
       
        // console.log(req.body)
         User.create({ 
            name: name, 
            email: email,
            password: password
          })
          .then (function(result){
            res.status(200).json(result)
          })
          .catch(function(err){
              res.status(400).json(err.message);
          })
        // res.send('test')        
    }
}

module.exports = {
    signUp
}
