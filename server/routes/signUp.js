const express = require('express')
const router = express.Router()
const ControllerSignUp = require('../controllers/signUp')

router.post('/', ControllerSignUp.signUp.addUser)

module.exports = router