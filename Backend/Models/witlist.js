const mongoose = require("mongoose");
const witlistSchema = new mongoose.Schema({
	userId: {
		type: Schema.Types.objectId,
		ref: "User",
	},
	ProductId: {
		type: Schema.Types.objectId,
		ref: "Products",
	},
});
const Witlist = mongoose.model("Cart", witlistSchema);
module.exports = Witlist;
