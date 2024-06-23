const prisma = require("../model/prisma");

const paymentService = {};

paymentService.updatePaymentStatus = (sessionId, paymentStatus) =>
  prisma.payments.updateMany({
    where: { sessionId: sessionId },
    data: { paymentStatus: paymentStatus },
  });

paymentService.saveOrderDataForPayment = (data) =>
  prisma.payments.create({ data });

paymentService.findPaymentBySessionId = (sessionId) =>
  prisma.payments.findFirst({ where: { sessionId: sessionId } });

module.exports = paymentService;
