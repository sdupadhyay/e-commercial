require("dotenv").config();
const express = require("express");
const app = express();
const db = require("./db/index");
const errorHandlerMiddleware = require("./middleware/error-handler");
const fileUpload = require("express-fileupload");
const productRoutes = require("./routes/productRoutes");
const userAuthenticationRoute = require("./routes/userRoutes");
app.use(express.json());
app.use(fileUpload({ useTempFiles: true }));
const PORT = process.env.PORT || 3000;
app.use("/api/v1/product", productRoutes);
app.use("/api/v1/user", userAuthenticationRoute);
app.use(errorHandlerMiddleware);
db();
app.listen(PORT, () => {
	console.log(`Server Started runnung at Port ${PORT}`);
});
