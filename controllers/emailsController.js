const sendMailByNodemailer = require("../middlewares/nodemailer");

const sendEmail = async (req, res, next) => {
    const emailInfo = {
        reciever: "ehmasuk@gmail.com",
        subject: "this is a mail from you backend",
        html: `<h1>Hello reciever<h1>`,
    }
    const info = await sendMailByNodemailer(emailInfo);
    res.send(info);
};

module.exports = { sendEmail };
