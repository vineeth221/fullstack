// server/routes/router.js

const express = require("express");
const router = new express.Router();
const nodemailer = require("nodemailer");

// send mail
router.post("/register", (req, res) => {
    const { email, name, mobile, subject } = req.body;

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: subject || "Sending Email With React And Nodejs",
            html: `<h1>Congratulations ${name}!</h1>
                   <p>You successfully sent an email. Your mobile number is ${mobile}.</p>`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log("Error" + error);
                res.status(500).json({ status: 500, error });
            } else {
                console.log("Email sent:" + info.response);
                // Respond with a 204 status code for success without a response body
                res.status(204).send();
            }
        });
    } catch (error) {
        console.log("Error" + error);
        res.status(401).json({ status: 401, error });
    }
});

module.exports = router;
