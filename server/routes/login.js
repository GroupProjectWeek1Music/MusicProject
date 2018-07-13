const express = require('express')
const router = express.Router()
const ControllerLogin = require('../controllers/login')

router.post('/', ControllerLogin.registerFb)
router.post('/app', ControllerLogin.loginApp)

module.exports = router