const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const cartSchema = new mongoose.Schema({
	userId: {
		type: Schema.Types.ObjectId,
		ref: "User",
	},
	productId: {
		type: Schema.Types.ObjectId,
		ref: "Product",
	},
	quantity: {
		type: Number,
		default: 1,
	},
});
const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;
