module.exports = (error, req, res, next) => {
  let message = "Internal Server Error";
  let status = 500;

  switch (error.name) {
    case "SequelizeValidationError":
    case "SequelizeUniqueValidationError":
    case "SequelizeUniqueConstraintError":
      status = 400;
      message = error.errors[0].message;
      break;
    default:
      message = "Internal Server Error";
      status = 500;
      break;
  }
  res.status(status).json({ message: message });
};
