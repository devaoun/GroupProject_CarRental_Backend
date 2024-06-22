const prisma = require("../model/prisma")

const adminService = {}

adminService.findAdminByUsername = (username) => prisma.admins.findUnique({where : {username}})
adminService.createAdmin = (data) => prisma.admins.create({data})

module.exports = adminService