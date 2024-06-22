const express = require('express')
const branchesController = require('../controllers/branches-controller')

const branchesRouter = express.Router()

branchesRouter.get('/',branchesController.getAllBranches)

module.exports = branchesRouter