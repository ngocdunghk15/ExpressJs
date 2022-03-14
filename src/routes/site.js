const express = require('express')
const route = express.Router()

const siteController = require('../app/controllers/SiteController')

// Cấu hình route

route.use('/search',siteController.search)
route.use('/', siteController.home)

//Cấu Hình Route  | \ Cấu Hình Controller

module.exports = route