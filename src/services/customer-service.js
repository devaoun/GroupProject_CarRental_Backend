const prisma = require("../model/prisma");

const customerService = {};

customerService.findCustomerByEmail = (email) =>
  prisma.customers.findUnique({ where: { email } });

customerService.findCustomerById = (id) =>
  prisma.customers.findFirst({
    where: {
      customerId: id,
    },
  });

customerService.createCustomer = (data) => prisma.customers.create({ data });

customerService.updateCustomerInfo = (id, data) =>
  prisma.customers.updateMany({
    data: data,
    where: { customerId: id },
  });

customerService.addRewardPoints = (customerId, point) =>
  prisma.customers.updateMany({
    where: {
      customerId: customerId,
    },
    data: {
      totalPoints: point,
    },
  });

  customerService.getAllCustomer = () => prisma.customers.findMany()

module.exports = customerService;
