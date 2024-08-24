const emailsRoute = require("./routes/emailsRoute");

const routes = (app) => {
    // home route
    app.get("/", (req, res, next) => {
        res.send("Welcome");
    });

    app.use("/send-email", emailsRoute);
};

module.exports = routes;
