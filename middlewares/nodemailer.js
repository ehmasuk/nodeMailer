const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
    },
});

const sendMailByNodemailer = async (data) => {
    try {
        const info = await transporter.sendMail({
            from: "ehmasuk@gmail.com",
            to: data.reciever,
            subject: data.subject,
            html: data.html,
        });
        return info;
    } catch (error) {
        console.log(error);
        return error;
    }
};

module.exports = sendMailByNodemailer;
