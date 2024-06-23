const express = require("express");
const carTypesController = require("../controllers/carType-controller");
const carModelsController = require("../controllers/carModels-controller");
const carController = require("../controllers/car-controller");

const carsRouter = express.Router();

carsRouter.get("/carTypes", carTypesController.getAllCarType);

carsRouter.get("/carModels", carModelsController.getAllCarModels);

carsRouter.get(
  "/carModels/:carTypeId",
  carModelsController.getCarModelByCarTypeId
);

carsRouter.get("/available", carController.getAllCarsAvailable);

carsRouter.post("/", carController.createCar);

module.exports = carsRouter;
