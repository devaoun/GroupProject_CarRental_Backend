const carModelsService = require("../services/carModels-service");

const carModelsController = {};

carModelsController.getAllCarModels = async (req, res, next) => {
  try {
    const allCarModels = await carModelsService.getAllCarModels();

    res.status(200).json(allCarModels);
  } catch (error) {
    next(error);
  }
};

carModelsController.getCarModelByCarTypeId = async (req, res, next) => {
  const { carTypeId } = req.params;

  try {
    const carModels = await carModelsService.getCarModelByCarTypeId(carTypeId);

    res.status(200).json(carModels);
  } catch (error) {
    next(error);
  }
};

module.exports = carModelsController;
