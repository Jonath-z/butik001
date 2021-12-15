const express = require('express');
const route = express.Router();
const db = require('../../modules/mongodb');
const bodyparser = require('body-parser');
const nodemailer = require('nodemailer');

route.use(bodyparser.urlencoded({ extended: false }));


route.post("/", async (req, res) => {

    // mail sending system
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: `${process.env.EMAIL_USER}`,
            pass: `${process.env.EMAIL_PASS}`
        },
        tls: {
            rejectUnauthorized: false
        }
    });
    //______________ send mail with defined transport object_________________//
    transporter.sendMail({
        from: `"Butik004" <${process.env.EMAIL_USER}>`, // sender address
        to: [`"${req.body.email}"`, `${process.env.ADMIN_MAIL}`], // list of receivers
        subject: "Command's confirmation", // Subject line
        html: `<p>Dear ${req.body.name} ${req.body.lastName};<br>
                from ${req.body.flexRadioDisabled};<br>
                your command is received.
                Please send <b>${req.body.price}$</b> to +243977473567 if your are in DRC,<br>
                to +250781980810 if your are in Rwanda <b>to confirm your command</b>,specifying the name and last-name entered to the command's form.<br>
                 <b>Thanks for trusting us, BUTIK 004</b></p>`,// html body
        attachments: [{
            filename: `Your command`,
            path: `${req.body.url}`
        }]
    });
    
    // __________ SAVE THE COMMAND IN MONGODB ATLAS____________//
    let today = new Date();
    const user = {
        Name: req.body.name,
        PostName: req.body.lastName,
        Phone: req.body.number,
        Contry: req.body.flexRadioDisabled,
        Email: req.body.email,
        Command: req.body.url,
        price: req.body.price,
        size: req.body.size,
        // model: data[0].model,
        Date: today
    }
    await db.collection('commandUser').insertOne(user);

    // _______REDIRECTION TO THE COMMAND TYPE____________//
    res.redirect(`/product/${req.body.type.trim()}`);
});

module.exports = route;