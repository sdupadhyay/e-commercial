const cloudinary = require("cloudinary").v2;
cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});
const fs = require("fs");
const uploadCloudinaryImage = async (filePath) => {
	try {
		if (!filePath) return null;
		let result = await cloudinary.uploader.upload(filePath, {
			use_filename: true,
			folder: "e-commercial",
		});
		fs.unlinkSync(filePath);
		return result?.url;
	} catch (error) {
		console.log("Cloudinary Error", error);
		fs.unlinkSync(filePath);
		return null;
	}
};
module.exports = uploadCloudinaryImage;
