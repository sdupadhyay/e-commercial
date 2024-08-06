const express = require("express");
const { addOrderDetails, getOrderDetails } = require("../controllers/order");
const router = express.Router();
router.post("/", addOrderDetails);
router.get("/", getOrderDetails);
module.exports = router;
