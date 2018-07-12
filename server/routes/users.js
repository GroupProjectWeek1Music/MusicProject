var express = require('express');
var router = express.Router();
var user = require('../controller/user')

router
  .get('/', user.findUser)
  .post('/', user.createUser)
  .post('/', user.login)

module.exports = router;
