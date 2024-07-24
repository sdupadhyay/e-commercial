const express = require("express");
const {
	addToWitlist,
	deleteWitlist,
	getWitlist,
	checkWitlist,
	getWitlistProductDetails,
} = require("../controllers/witlist");
const router = express.Router();
router.get("/", getWitlist);
router.get("/find", checkWitlist);
router.get("/add", addToWitlist);
router.delete("/delete", deleteWitlist);
router.get("/items", getWitlistProductDetails);
module.exports = router;
