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
    case "Invalid Email/Password":
      status = 400;
      message = "Invalid Email/Password";
      break;
    case "Email/Password Required":
      status = 400;
      message = "Email/Password Required";
      break;
    case "Unauthenticated":
    case "JsonWebTokenError":
      status = 401;
      message = "Unauthenticated";
      break;
    default:
      message = "Internal Server Error";
      status = 500;
      break;
  }
  res.status(status).json({ message: message });
};
