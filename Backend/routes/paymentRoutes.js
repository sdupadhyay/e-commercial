const express = require("express");
const {
	razorPayPayment,
	validateRazorPayPayment,
} = require("../controllers/payment");

const router = express.Router();
router.post("/", razorPayPayment);
router.post("/validate", validateRazorPayPayment);
module.exports = router;
