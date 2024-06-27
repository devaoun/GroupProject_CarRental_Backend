const prisma = require("../model/prisma");

const bookingService = {};

bookingService.findBookingByCustomerId = (id) =>
  prisma.bookings.findMany({
    where: { customerId: id },
  });

bookingService.getAllBooking = () =>
  prisma.bookings.findMany({
    include: {
      Customer: true,
      Car: {
        include: {
          CarModel: true,
        },
      },
      PickupLocation: true,
      DropoffLocation: true,
    },
  });

bookingService.updateBookingStatus = (bookingId, status) =>
  prisma.bookings.update({
    where: { bookingId },
    data: { status },
  });

bookingService.findBookingByBookingId = (id) =>
  prisma.bookings.findFirst({
    where: { bookingId: id },
  });

bookingService.createBooking = (data) => prisma.bookings.create({ data });

bookingService.deleteBookingByBookingId = (bookingId) =>
  prisma.bookings.deleteMany({
    where: { bookingId: bookingId },
  });

module.exports = bookingService;
