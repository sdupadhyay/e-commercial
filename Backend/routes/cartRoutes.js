const express = require("express");
const { addToCart, deleteCart } = require("../controllers/cart");
const router = express.Router();
router.get("/add", addToCart);
router.delete("/delete", deleteCart);
module.exports = router;
