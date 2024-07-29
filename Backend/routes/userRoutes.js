const express = require("express");
const {
	userSignUp,
	userLogin,
	addUserAddress,
	getUserAddress,
} = require("../controllers/user");
const router = express.Router();
router.post("/signup", userSignUp);
router.post("/login", userLogin);
router.post("/address", addUserAddress);
router.get("/address", getUserAddress);
module.exports = router;
