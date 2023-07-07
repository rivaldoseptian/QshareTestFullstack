const router = require("express").Router();
const user = require("./user");
const order = require("./order");

router.use("/user", user);
router.use("/order", order);

module.exports = router;
