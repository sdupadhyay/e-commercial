const { CustomError } = require("../errors/customErrors");

const errorHandlerMiddleware = (err, req, res, next) => {
	if (err instanceof CustomError) {
		return res.status(err.statusCode).json({ messge: err?.message });
	}
	return res.status(500).json({ message: err?.message });
};
module.exports = errorHandlerMiddleware;
