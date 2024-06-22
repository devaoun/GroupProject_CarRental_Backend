const prisma = require("../model/prisma")


const customerService = {}

customerService.findCustomerByEmail = (email) => prisma.customers.findUnique({where : {email}})

module.exports = customerService