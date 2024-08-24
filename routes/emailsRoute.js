const { sendEmail } = require("../controllers/emailsController");

const router = require("express").Router();

router.get("/", sendEmail);

module.exports = router;
