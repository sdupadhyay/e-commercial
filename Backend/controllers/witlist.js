const { createCustomError } = require("../errors/customErrors");
const asyncWrapper = require("../middleware/async");
const Witlist = require("../Models/witlist");
const addToWitlist = asyncWrapper(
	asyncWrapper(async (req, res, next) => {
		//console.log(req?.query);
		const { userId, productId } = req?.query;
		if (!(userId || productId))
			return next(createCustomError("Something Went reong", 401));
		await Witlist.create({ userId, productId });
		return res
			.status(200)
			.json({ message: "Item Sucessfully Added", status: 201 });
	})
);
const deleteWitlist = asyncWrapper(async (req, res, next) => {
	const { userId, productId } = req?.query;
	if (!(userId || productId))
		return next(createCustomError("Something Went reong", 401));
	await Witlist.deleteOne({ userId, productId });
	return res
		.status(200)
		.json({ message: "Item Sucessfully Deleted", status: 201 });
});
const getWitlist = asyncWrapper(async (req, res, next) => {
	const { userId } = req?.query;
	const witlistData = await Witlist.find({ userId }).select("-userId -_id");
	return res.status(200).json({ data: witlistData, status: 200 });
});
const checkWitlist = asyncWrapper(async (req, res, next) => {
	const { productId } = req?.query;
	let isItemPresent = await Witlist.findOne({ productId });
	if (isItemPresent)
		return res.status(200).json({ isItemPresent: true, status: 200 });
	else return res.status(200).json({ isItemPresent: false, status: 200 });
});
module.exports = { addToWitlist, deleteWitlist, getWitlist, checkWitlist };
