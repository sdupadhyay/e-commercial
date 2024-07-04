const Product = require("../Models/products");
const asyncWrapper = require("../middleware/async");
const uploadCloudinaryImage = require("../utils/cloudinary");

const getProduct = async (req, res) => {
	try {
		return res.status(200).json({ mes: "Sucess" });
	} catch (error) {
		return res.status(404).json({ error });
	}
};
const addProduct = asyncWrapper(async (req, res) => {
	const imageUrl = await uploadCloudinaryImage(req.files.image.tempFilePath);
	await Product.create({ ...req.body, image: imageUrl });
	return res.status(200).json({ mess: "Sucess fully created" });
});
module.exports = { getProduct, addProduct };
