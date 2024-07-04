const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema({
	userId: {
		type: Schema.Types.objectId,
		ref: "User",
	},
	ProductId: {
		type: Schema.Types.objectId,
		ref: "Products",
	},
});
const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;
