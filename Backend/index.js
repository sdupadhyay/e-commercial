require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./db/index");
const errorHandlerMiddleware = require("./middleware/error-handler");
const fileUpload = require("express-fileupload");
const productRoutes = require("./routes/productRoutes");
const userAuthenticationRoute = require("./routes/userRoutes");
const cartRoutes = require("./routes/cartRoutes");
const witlistRoute = require("./routes/witlistRoutes")
app.use(express.json());
app.use(fileUpload({ useTempFiles: true }));
const corsOptions = {
	origin: true, //included origin as true
	credentials: true, //included credentials as true
	// origin: ["http://localhost:5173"],
	optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));
const PORT = process.env.PORT || 3000;
app.use("/api/v1/product", productRoutes);
app.use("/api/v1/user", userAuthenticationRoute);
app.use("/api/v1/cart", cartRoutes);
app.use("/api/v1/witlist", witlistRoute);
app.use(errorHandlerMiddleware);
db();
app.listen(PORT, () => {
	console.log(`Server Started runnung at Port ${PORT}`);
});
