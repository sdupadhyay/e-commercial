const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const witlistSchema = new mongoose.Schema({
	userId: {
		type: Schema.Types.ObjectId,
		ref: "User",
	},
	productId: {
		type: Schema.Types.ObjectId,
		ref: "Products",
	},
});
const Witlist = mongoose.model("witlist", witlistSchema);
module.exports = Witlist;
