const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
	productId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Product",
	},
	quantity: {
		type: Number,
		default: 1,
	},
});
const orderSchema = new mongoose.Schema({
	orderId: {
		type: String,
		require: true,
	},
	paymentId: {
		type: String,
		require: true,
	},
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
	},
	productList: [productSchema],
});
const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
