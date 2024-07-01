const prisma = require("../model/prisma");

const carModelsService = {};

carModelsService.getAllCarModels = () => prisma.carModels.findMany(
  {include : 
    {CarImages : true}
  }
);

carModelsService.getCarModelByCarTypeId = (carTypeId) =>
  prisma.carModels.findMany({
    where: {
      carTypeId: +carTypeId,
    },
  });

carModelsService.createCarModels = (data) => prisma.carModels.create({data})

module.exports = carModelsService;
