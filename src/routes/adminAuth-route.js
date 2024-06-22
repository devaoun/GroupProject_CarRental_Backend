const express = require('express')
const validator = require('../middlewares/validator')
const adminController = require('../controllers/admin-controller')

const adminAuthRouter = express.Router()

adminAuthRouter.post('/register',validator.adminRegister,adminController.register)

module.exports = adminAuthRouter