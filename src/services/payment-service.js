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

paymentService.getAllPayment = () =>
  prisma.payments.findMany({
    include: {
      Booking: {
        include: {
          Customer: true,
        },
      },
    },
  });

paymentService.deletePaymentBySessionId = (sessionId) =>
  prisma.payments.deleteMany({ where: { sessionId: sessionId } });

module.exports = paymentService;
