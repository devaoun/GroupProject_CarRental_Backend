const prisma = require("../model/prisma");

const customerService = {};

customerService.findCustomerByEmail = (email) =>
  prisma.customers.findUnique({ where: { email } });

customerService.findCustomerById = (id) =>
  prisma.user.findUnique({
    where: {
      id,
    },
  });

customerService.createCustomer = (data) => prisma.customers.create({ data });

module.exports = customerService;
