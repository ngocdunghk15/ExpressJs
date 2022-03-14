const express = require('express')
const route = express.Router()

const newsController = require('../app/controllers/NewsController')

// Cấu hình route
route.use('/worldwar',newsController.show)
route.use('/', newsController.index)

//Cấu Hình Route  | \ Cấu Hình Controller

module.exports = route