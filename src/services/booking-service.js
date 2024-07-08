const dayjs = require("dayjs");
const prisma = require("../model/prisma");

const bookingService = {};

bookingService.findBookingByCustomerId = (id) =>
  prisma.bookings.findMany({
    where: { customerId: id },
    include: {
      Car: { include: { CarModel: true } },
      PickupLocation: true,
      DropoffLocation: true,
    },
  });

bookingService.getAllBooking = () =>
  prisma.bookings.findMany({
    include: {
      Customer: true,
      Payment: true,
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

bookingService.getCurrentMonthBookingCount = () => prisma.bookings.count({
  where: {
    createdAt: {
      gte: dayjs().startOf('month').toDate(),
      lte: dayjs().endOf('month').toDate()
    },
    status: 'confirmed'
  }
})

bookingService.getYearlyBookingStatusConfirmed = () => prisma.bookings.findMany({
  where: {
    createdAt: {
      gte: dayjs().startOf('year').toDate(),
      lte: dayjs().endOf('year').toDate()
    }
  },
  select: {
    Car: {
      select: {
        CarModel: {
          select: {
            carModelId: true,
            brand: true,
            model: true,
            color: true
          }
        }
      }
    }
  }
});

bookingService.getBookingByPage = (page, pageSize) => {
  console.log(page)
  const skip = (page - 1) * pageSize;
  const take = pageSize;

  return prisma.bookings.findMany({
    include: {
      Customer: true,
      Payment: true,
      Car: {
        include: {
          CarModel: true,
        },
      },
      PickupLocation: true,
      DropoffLocation: true,
    },
    skip: skip,
    take: take,
    orderBy: {
      // คุณสามารถใส่คอลัมน์ที่ต้องการจัดเรียงได้ที่นี่ เช่น createdAt หรือ id
      createdAt: 'desc',
    },
  });
}

bookingService.getAllBookingCount = () => prisma.bookings.count()

module.exports = bookingService;
