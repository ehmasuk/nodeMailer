const errorHandler = (res, { statusCode = 500, message = "Server error" }) => {
    return res.status(statusCode).json({ status: false, message });
};

module.exports = { errorHandler };
