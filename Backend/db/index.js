const mongoose = require("mongoose");
const DB = async () => {
	try {
		await mongoose.connect(`${process.env.MONGODB_URL}/e-commercial`);
		console.log("Mongo db connected");
	} catch (err) {
		console.log("Mongo DB ERROR:", err);
	}
};
module.exports = DB;
