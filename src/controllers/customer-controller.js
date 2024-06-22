const customerController = {};

customerController.getInfo = (req, res, next) => {
  try {
    const data = req.user;
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};
module.exports = customerController;
