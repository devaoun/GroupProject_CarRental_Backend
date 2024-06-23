const prisma = require("../model/prisma");

const bookingService = {};

bookingService.findBookingByCustomerId = (id) =>
  prisma.bookings.findMany({
    where: { customerId: id },
  });

bookingService.findBookingByBookingId = (id) =>
  prisma.bookings.findFirst({
    where: { bookingId: id },
  });

module.exports = bookingService;
