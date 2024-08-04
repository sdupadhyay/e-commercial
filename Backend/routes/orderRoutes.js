const express = require("express");
const { addOrderDetails } = require("../controllers/order");
const router = express.Router();
router.post("/", addOrderDetails);
module.exports = router;
