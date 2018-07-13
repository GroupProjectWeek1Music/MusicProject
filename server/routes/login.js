const express = require('express')
const router = express.Router()
const ControllerLogin = require('../controllers/login')

router.post('/', ControllerLogin.register)

module.exports = router