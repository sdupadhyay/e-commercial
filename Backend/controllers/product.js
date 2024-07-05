const Product = require("../Models/products");
const { createCustomError } = require("../errors/customErrors");
const asyncWrapper = require("../middleware/async");
const uploadCloudinaryImage = require("../utils/cloudinary");

const getProduct = async (req, res) => {
	try {
		return res.status(200).json({ mes: "Sucess" });
	} catch (error) {
		return res.status(404).json({ error });
	}
};
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
		// let a = createCustomError("Please upload image", 401);
		return next(createCustomError("Please upload image", 401));
	}
});
module.exports = { getProduct, addProduct };
