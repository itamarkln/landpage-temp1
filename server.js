// Install express server
const express = require('express');
const path = require('path');

const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');

const transporter = nodemailer.createTransport(sendgridTransport({
    auth: {
        api_key: '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'
    }
}));

app.use(bodyParser.json());
app.use(cors());

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/lp-temp1'));

app.post('/contact', (req, res, next) => {
    const { fullname, email, subject, message } = req.body;
    return transporter.sendMail({
        to: 'itamarkln4@gmail.com',
        from: email,
        subject: `${subject} (Landing page template 1)`,
        html: `
            <h3>Hi, I'm <b>${fullname}.</b></h3>
            <h4>Issued with:</h4>
            <p>${message}</p>
        `
    }, (err, result) => {
        let message = '', success = true;
        if (err) {
            message = err.message;
            success = false;
        } else {
            message = 'An email has been sent to your mailbox';
        }
        return res.send({ message, success });
    });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname +'/dist/lp-temp1/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);