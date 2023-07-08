const OrderController = require("../controllers/OrderController");
const router = require("express").Router();
const authentication = require("../middleware/authentication");
router.post("/", authentication, OrderController.CreateOrder);
router.get("/", authentication, OrderController.GetOrder);
module.exports = router;
