import express from 'express';
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');
const API_KEY = 'xxxxxxxxxxxxxxx';

const express = require('express');
const app = express();
const router = express.Router();
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use('/', router);
router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
  //__dirname : It will resolve to your project folder.
});
router.post('/submit-form', (req, res) => {
  const senderEmail = req.body.senderEmail;
  const recEmail = req.body.recEmail;
  const subject = req.body.subject;
  const emailBody = req.body.emailBody;
  const transporter = nodemailer.createTransport(
    sendgridTransport({
      auth: {
        api_key: API_KEY,
      },
    })
  );
  try {
    transporter,
      sendMail({
        to: recEmail,
        from: senderEmail,
        subject: subject,
        emailbody: emailBody,
      });
  } catch (error) {
    console.log(error);
  }
  app.listen(3000);
  //...
  res.end();
});
