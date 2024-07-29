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
const userLogin = asyncWrapper(async (req, res, next) => {
	const { email, password } = req.body;
	if (!(email || password))
		return next(createCustomError("All field are required", 400));
	const user = await User.findOne({ email });
	if (!user) {
		return next(createCustomError("User not Found", 400));
	}
	const isPasswordCorrect = await user.isPasswordCorrect(password);
	if (!isPasswordCorrect)
		return next(createCustomError("Incorrect Password", 400));
	return res.status(200).json({
		message: "Login Sucessfully",
		status: 200,
		userId: user?._id?.toString(),
	});
});
const addUserAddress = asyncWrapper(async (req, res, next) => {
	const { userId } = req?.query;
	if (!userId) return next(createCustomError("User Id not Found", 400));
	const userdData = await User.findById(userId);
	userdData.address.push(req.body);
	await userdData.save();
	return res
		.status(200)
		.json({ message: "Address Sucessfully Added", status: 201 });
});
const getUserAddress = asyncWrapper(async (req, res, next) => {
	const { userId } = req?.query;
	if (!userId) return next(createCustomError("User Id not Found", 400));
	const userData = await User.findById(userId);
	return res.status(200).json({ data: userData?.address, status: 200 });
});
module.exports = { userSignUp, userLogin, addUserAddress, getUserAddress };
