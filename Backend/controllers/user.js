const User = require("../Models/user");
const { createCustomError } = require("../errors/customErrors");
const asyncWrapper = require("../middleware/async");

const userSignUp = asyncWrapper(async (req, res, next) => {
	const { name, email, mobile, password } = req.body;
	if (!(name || email || mobile || password))
		return next(createCustomError("All field are required", 400));
	await User.create({ ...req.body });
	return res
		.status(200)
		.json({ message: "User Created Sucessfully", status: 201 });
});
module.exports = { userSignUp };
