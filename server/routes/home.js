const express = require('express')
const router = express.Router()
// const ControllerLogin = require('../controllers/login')

router.get('/home',function(req,res){
   console.log("WELCOMEE")
})

module.exports = router