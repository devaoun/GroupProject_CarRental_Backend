const prisma = require("../model/prisma");

const carModelsService = {};

carModelsService.getAllCarModels = () => prisma.carModels.findMany();

carModelsService.getCarModelByCarTypeId = (carTypeId) =>
  prisma.carModels.findMany({
    where: {
      carTypeId: +carTypeId,
    },
  });

module.exports = carModelsService;
