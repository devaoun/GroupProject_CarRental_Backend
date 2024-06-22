const prisma = require("../model/prisma")


const branchesService = {}

branchesService.getAllBranches = () => prisma.branches.findMany()

module.exports = branchesService