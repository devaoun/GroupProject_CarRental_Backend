const branchesService = require("../services/branches-service")


const branchesController = {}

branchesController.getAllBranches = async(req, res ,next) => {
    try {
        const data = await branchesService.getAllBranches()
        res.status(200).json(data)
    } catch (error) {
        next(error)
    }
}

module.exports = branchesController