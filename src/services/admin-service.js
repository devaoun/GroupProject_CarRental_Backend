const prisma = require("../model/prisma")

const adminService = {}

//---FIND
adminService.findAdminByUsername = (username) => prisma.admins.findUnique({where : {username}})
adminService.findAdminById = (id) => prisma.admins.findUnique({where : {id}})


//---CREATE
adminService.createAdmin = (data) => prisma.admins.create({data})



module.exports = adminService