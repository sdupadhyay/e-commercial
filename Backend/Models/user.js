const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const addressSchema = new mongoose.Schema({
	name: { type: String, require: true },
	number: { type: Number, require: true },
	address: { type: String, require: true },
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
userSchema.pre("save", async function (next) {
	try {
		if (this.isModified("password")) {
			this.password = await bcrypt.hash(this.password, 10); // 10 is Salt Value
		}
		next();
	} catch (err) {
		return next(err);
	}
});
userSchema.methods.isPasswordCorrect = async function (userPassword) {
	try {
		const match = await bcrypt.compare(userPassword, this.password);
		return match;
	} catch (err) {
		throw err;
	}
};
const User = mongoose.model("User", userSchema);
module.exports = User;
