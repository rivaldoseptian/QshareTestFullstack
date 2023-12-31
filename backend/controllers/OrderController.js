const { Order } = require("../models");

class OrderController {
  static async CreateOrder(req, res, next) {
    try {
      const { title, quantity, price } = req.body;
      const order = await Order.create({ title, quantity, price });
      res.status(201).json(order);
    } catch (error) {
      next(error);
    }
  }
  static async GetOrder(req, res, next) {
    try {
      const order = await Order.findAll();
      res.status(200).json(order);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = OrderController;
