const Razorpay = require("razorpay");
const crypto = require("crypto");
const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/customErrors");

const razorPayPayment = asyncWrapper(async (req, res, next) => {
	const razorpay = new Razorpay({
		key_id: process.env.RAZOR_PAY_KEY_ID,
		key_secret: process.env.RAZOR_PAY_KEY_SECRET,
	});
	const options = req.body;
	const order = await razorpay.orders.create(options);
	if (!order) return next(createCustomError("Something Went Wrong", 500));
	return res.status(200).json(order);
});
const validateRazorPayPayment = asyncWrapper(async (req, res, next) => {
	const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
		req.body;
	const sha = crypto.createHmac("sha256", process.env.RAZOR_PAY_KEY_SECRET);
	sha.update(`${razorpay_order_id}|${razorpay_payment_id}`);
	const digest = sha.digest("hex");
	if (digest !== razorpay_signature)
		return next(createCustomError("Payment not Validate", 400));
	return res.status(200).json({
		status: 200,
		orderId: razorpay_order_id,
		paymentId: razorpay_payment_id,
	});
});
module.exports = { razorPayPayment, validateRazorPayPayment };
