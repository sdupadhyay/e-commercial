const asyncWrapper = require("../middleware/async");
const Cart = require("../Models/cart");
const Order = require("../Models/orders");

const addOrderDetails = asyncWrapper(async (req, res, next) => {
	//console.log(req?.body?.productList)
	let productIdList = req?.body?.productList?.map((ele) => ele?.productId);
	await Order.create({ ...req.body });
	await Cart.deleteMany({
		userId: req?.body?.userId,
		productId: { $in: productIdList },
	});
	return res.status(200).json({ message: "Order Sucessfull", status: 201 });
});
module.exports = { addOrderDetails };
