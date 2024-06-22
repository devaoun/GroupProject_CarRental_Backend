const prisma = require("../model/prisma");

const carsService = {};

/* search for getCarsAvailable
data = {

pickupLocationId, startDate, endDate, carTypeId, carModelId
}
*/

carsService.getCarsAvailable = (data) => {
  return prisma.cars.findMany({
    where: {
      branchId: +data.pickupLocationId,
      status: "available",
      carModelId: +data.carModelId,
      CarModel: {
        carTypeId: +data.carTypeId,
      },
      OR: [
        {
          Bookings: {
            none: {
              startDate: {
                lte: new Date(data.endDate),
              },
              endDate: {
                gte: new Date(data.startDate),
              },
            },
          },
        },
      ],
    },
    include: {
      CarModel: {
        include: {
          CarType: true,
        },
      },
      Branch: true,
    },
  });
};

/*

  data = {
 carModelId   
  licensePlate
  branchId       
  use_date     
  }

  */
carsService.createCar = (data) => prisma.cars.create({ data });

module.exports = carsService;
