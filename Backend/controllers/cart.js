const { createCustomError } = require("../errors/customErrors");
const asyncWrapper = require("../middleware/async");
const Cart = require("../Models/cart");
const Product = require("../Models/products");
const addToCart = asyncWrapper(
	asyncWrapper(async (req, res, next) => {
		//console.log(req?.query);
		const { userId, productId } = req?.query;
		if (!(userId || productId))
			return next(createCustomError("Something Went Wrong", 401));
		await Cart.create({ userId, productId });
		return res
			.status(200)
			.json({ message: "Item Sucessfully Added to Cart", status: 201 });
	})
);
const deleteCart = asyncWrapper(async (req, res, next) => {
	const { userId, productId } = req?.query;
	if (!(userId || productId))
		return next(createCustomError("Something Went Wrong", 401));
	await Cart.deleteOne({ userId, productId });
	return res
		.status(200)
		.json({ mess: "Item Sucessfully Deleted", status: 201 });
});
const getCartList = asyncWrapper(async (req, res, next) => {
	const { userId } = req?.query;
	if (!userId) return next(createCustomError("Something Went Wrong", 401));
	const cartList = await Cart.find({ userId });
	return res.status(200).json({ data: cartList, status: 200 });
});
const getCartProductDetails = asyncWrapper(async (req, res, next) => {
	const { userId } = req?.query;
	const cartList = await Cart.find({ userId });
	const productId = cartList?.map((ele) => ele?.productId);
	const productDetails = await Product.find({
		_id: { $in: productId },
	}).select("-description -rating -review -inStock");
	return res.status(200).json({ data: productDetails, status: 200 });
});
module.exports = { addToCart, deleteCart, getCartList, getCartProductDetails };
