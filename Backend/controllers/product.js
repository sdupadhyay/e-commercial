const Product = require("../Models/products");
const { createCustomError } = require("../errors/customErrors");
const asyncWrapper = require("../middleware/async");
const uploadCloudinaryImage = require("../utils/cloudinary");

const getProduct = asyncWrapper(async (req, res, next) => {
	let productList = await Product.find({}).select(
		"-description -category -compnay"
	);
	//console.log(productList);
	return res.status(200).json({ status: 200, data: productList });
});
const addProduct = asyncWrapper(async (req, res, next) => {
	if (req?.files?.image?.tempFilePath) {
		const imageUrl = await uploadCloudinaryImage(
			req?.files?.image?.tempFilePath
		);
		await Product.create({ ...req.body, image: imageUrl });
		return res
			.status(200)
			.json({ message: "Sucess fully created", status: 200 });
	} else {
		return next(createCustomError("Please upload image", 401));
	}
});
const getProductDetails = asyncWrapper(async (req, res) => {
	const { productId } = req?.params;
	const productDetails = await Product.find({ _id: productId });
	//console.log(productDetails)
	if (productDetails)
		return res.status(200).json({ data: productDetails, status: 200 });
	return res.status(404).josn({ message: "Product does not Exist" });
});
module.exports = { getProduct, addProduct, getProductDetails };
