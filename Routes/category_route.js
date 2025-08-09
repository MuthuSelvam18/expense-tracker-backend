const express = require("express");
const categoryroute = express.Router();
const createCategory = require('../Api/create_category')
const getCategory = require('../Api/get_category')

categoryroute.post('/', createCategory)
categoryroute.get('/', getCategory)

module.exports = categoryroute;