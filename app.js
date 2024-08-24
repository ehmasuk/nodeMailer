const express = require("express");
const routes = require("./routes");
const { errorHandler } = require("./middlewares/responseHandler");

const app = express();

// call routes
routes(app);

// router does not exist erro
app.use((req, res, next) => {
    return errorHandler(res, { statusCode: 404, message: "Route not found" });
});

module.exports = app;
