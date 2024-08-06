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
const getOrderDetails = asyncWrapper(async (req, res, next) => {
	const { userId } = req?.query;
	let orders = await Order.find({ userId }).populate(
		"productList.productId",
		"title image mrp discount company"
	);
	// .lean();
	orders = orders?.map((ele) => {
		return {
			orderId: ele?.orderId,
			paymentId: ele?.paymentId,
			transactionAmount: ele?.transactionAmount,
			productDetails: ele?.productList?.map((pro) => {
				return {
					title: pro?.productId?.title,
					image: pro?.productId?.image,
					mrp: pro?.productId?.mrp,
					discount: pro?.productId?.discount,
					company: pro?.productId?.company,
				};
			}),
		};
	});
	return res
		.status(200)
		.json({ message: "Order Sucessfull", status: 201, data: orders });
});
module.exports = { addOrderDetails, getOrderDetails };
