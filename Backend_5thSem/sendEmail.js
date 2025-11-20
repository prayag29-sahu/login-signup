const nodemailer = require('nodemailer');

const sendEmail = async (to, subject, text) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'sahuprayag148@gmail.com',
      pass: 'hhxx dbcp uhvm tiox',
    },
  });

  const mailOptions = {
    from: 'sahuprayag148@gmail.com',
    to,
    subject,
    text,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = { sendEmail };