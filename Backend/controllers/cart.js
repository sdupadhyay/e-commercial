const { createCustomError } = require("../errors/customErrors");
const asyncWrapper = require("../middleware/async");
const Cart = require("../Models/cart");
const addToCart = asyncWrapper(
	asyncWrapper(async (req, res, next) => {
		//console.log(req?.query);
		const { userId, productId } = req?.query;
		if (!(userId || productId))
			return next(createCustomError("Something Went reong", 401));
		await Cart.create({ userId, productId });
		return res
			.status(200)
			.json({ mess: "Item Sucessfully Added to Cart", status: 201 });
	})
);
const deleteCart = asyncWrapper(async (req, res, next) => {
	const { userId, productId } = req?.query;
	if (!(userId || productId))
		return next(createCustomError("Something Went reong", 401));
	await Cart.deleteOne({ userId, productId });
	return res
		.status(200)
		.json({ mess: "Item Sucessfully Deleted", status: 201 });
});
module.exports = { addToCart, deleteCart };
