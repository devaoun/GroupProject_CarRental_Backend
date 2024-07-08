const dayjs = require("dayjs");
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

paymentService.deletePaymentByBookingId = (bookingId) => prisma.payments.delete({
  where: { bookingId }
})

paymentService.getCurrentMonthPaymentCount = () => prisma.payments.count({
  where: {
    createdAt: {
      gte: dayjs().startOf('month').toDate(),
      lte: dayjs().endOf('month').toDate()
    },
    paymentStatus: 'complete'
  }
})

paymentService.getCurrentYearPayment = () => prisma.payments.findMany({
  where: {
    createdAt: {
      gte: dayjs().startOf('year').toDate(),
      lte: dayjs().endOf('year').toDate()
    },
    paymentStatus: 'complete'
  }
})

module.exports = paymentService;
