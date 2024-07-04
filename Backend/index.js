require("dotenv").config();
const express = require("express");
const app = express();
const db = require("./db/index");
const errorHandlerMiddleware = require("./middleware/error-handler");
const fileUpload = require("express-fileupload");
const productRoutes = require("./routes/productRoutes");
app.use(express.json());
app.use(fileUpload({ useTempFiles: true }));
app.use(errorHandlerMiddleware);
const PORT = process.env.PORT || 3000;
app.use("/api/v1/product", productRoutes);
db();
app.listen(PORT, () => {
	console.log(`Server Started runnung at Port ${PORT}`);
});
