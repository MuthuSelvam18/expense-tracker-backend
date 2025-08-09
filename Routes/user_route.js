const express = require("express");
const userroute = express.Router();
const userRegsitration = require('../Api/user_register')

userroute.post('/register',userRegsitration)

module.exports = userroute;