const asyncWrapper = (cb) => {
	return async (req, res, next) => {
		try {
			await cb(req, res, next);
		} catch (error) {
            //console.log("ERR",error)
			next(error);
		}
	};
};

module.exports = asyncWrapper;
