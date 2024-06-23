const branchesService = require("../services/branches-service");

const branchesController = {};

branchesController.getAllBranches = async (req, res, next) => {
  try {
    const branches = await branchesService.getAllBranches();
    res.status(200).json(branches);
  } catch (error) {
    next(error);
  }
};

module.exports = branchesController;
