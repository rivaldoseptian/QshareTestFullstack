const { User } = require("../models");

class UserController {
  static async Register(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await User.create({ email, password });
      res.status(201).json({ message: "Succes Register" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;
