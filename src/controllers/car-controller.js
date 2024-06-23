
const carsService = require("../services/cars-service");
const createError = require("../utils/createError");

const carController = {};

carController.getAllCarsAvailable = async (req, res, next) => {
  const { pickupLocationId, startDate, endDate, carTypeId, carModelId } =
    req.query;

  const data = {
    pickupLocationId: +pickupLocationId,
    startDate,
    endDate,
    carTypeId: +carTypeId,
    carModelId: +carModelId,
  };

  console.log(data);
  try {
    const carsAvailable = await carsService.getCarsAvailable(data);

    res.status(200).json(carsAvailable);
  } catch (error) {
    next(error);
  }
};

carController.createCar = async (req, res, next) => {
  const data = {
    carModelId: +req.body.carModelId,
    licensePlate: req.body.licensePlate,
    branchId: +req.body.branchId,
    useDate: req.body.useDate,
  };

  try {
    const existingCar = await carsService.findExistingCar(data.licensePlate);

    if (existingCar) {
      createError({
        message: "License plate already exists",
        statusCode: 400,
        field: "licensePlate",
      });
    }

    const newCar = await carsService.createCar(data);
    res.status(201).json(newCar);
  } catch (error) {
    next(error);
  }
};

module.exports = carController

