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

carsService.findExistingCar = (licensePlate) =>
  prisma.cars.findUnique({
    where: {
      licensePlate: licensePlate,
    },
  });

carsService.createCar = (data) => prisma.cars.create({ data });


carsService.findCarByStatus = (status) => prisma.cars.findMany({where : {status}})

carsService.updateCar = (carId,data) => prisma.cars.update({
  where : {carId},
  data
})

carsService.findCarByCarId = (id) =>
  prisma.cars.findFirst({
    where: {
      carId: id,
    },
    include: {
      CarModel: true,
    },
  });


module.exports = carsService;
