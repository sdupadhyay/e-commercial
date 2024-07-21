const express = require("express");
const {
	getProduct,
	addProduct,
	getProductDetails,
} = require("../controllers/product");
const router = express.Router();
router.get("/", getProduct);
router.post("/:category", addProduct);
router.get("/:productId", getProductDetails);
module.exports = router;
