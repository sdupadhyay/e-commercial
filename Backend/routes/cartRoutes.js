const express = require("express");
const {
	addToCart,
	deleteCart,
	getCartList,
	getCartProductDetails,
} = require("../controllers/cart");
const router = express.Router();
router.get("/add", addToCart);
router.delete("/delete", deleteCart);
router.get("/", getCartList);
router.get("/items", getCartProductDetails);
module.exports = router;
