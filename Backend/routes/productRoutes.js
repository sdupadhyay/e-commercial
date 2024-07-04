const express = require("express");
const { getProduct, addProduct } = require("../controllers/product");
const router = express.Router();
router.get("/:category", getProduct);
router.post("/:category", addProduct);
module.exports = router;
