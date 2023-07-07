const OrderController = require("../controllers/OrderController");
const router = require("express").Router();
router.post("/", OrderController.CreateOrder);
router.get("/", OrderController.GetOrder);
module.exports = router;
