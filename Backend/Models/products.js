const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		trim: true,
	},
	description: {
		type: String,
		required: true,
		trim: true,
	},
	image: {
		type: String,
		required: true,
		trim: true,
	},
	mrp: {
		type: Number,
		required: true,
	},
	inStock: {
		type: Boolean,
		default: true,
	},
	discount: {
		type: Number,
	},
	category: {
		type: String,
		required: true,
		trim: true,
	},
	company: {
		type: String,
		required: true,
		trim: true,
	},
	rating: {
		type: Number,
		default: 4.2,
	},
	review: {
		type: Number,
		default: 117,
	},
	imageGallery: [{ type: String }],
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
