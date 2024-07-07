const mongoose = require("mongoose");
const {Schema} = require("mongoose")
const cartSchema = new mongoose.Schema({
	userId: {
		type: Schema.Types.ObjectId,
		ref: "User",
	},
	productId: {
		type: Schema.Types.ObjectId,
		ref: "Product",
	},
});
const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;
