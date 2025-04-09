const errorhandlers = (error, req, res, next) => {
  if (error) {
    console.log(error);
    if (error.message) {
      res.status(400).json({
        status: "Failed",
        message: error.message,
      });
    } else {
      res.status(400).json({
        status: "Failed",
        message: error,
      });
    }
  } else {
    next();
  }
};

module.exports = errorhandlers;
