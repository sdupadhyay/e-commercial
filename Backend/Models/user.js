const mongoose = require("mongoose");
const addressSchema = new mongoose.Schema({
	addresline1: { type: String, required: true },
	addresline2: { type: String, required: true },
	city: { type: String, required: true },
	state: { type: String, required: true },
	pincode: { type: Number, required: true },
});
const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	mobile: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	address: [addressSchema],
});
const User = mongoose.model("User", userSchema);
module.exports = User;
