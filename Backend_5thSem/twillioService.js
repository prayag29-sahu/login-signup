// twilioService.js
const twilio = require('twilio');

const accountSid = 'ACfeac8cb3e7dae0fcd683e278'; // Your Account SID from Twilio Console
const authToken = '3fa8f2fccfa7f27f4a267e910505';   // Your Auth Token from Twilio Console

const client = new twilio(accountSid, authToken);

const sendOtp = (phoneNumber, otp) => {
  return client.messages.create({
    body: `Your OTP is ${otp}`,  // The message content
    from: '+123146657632', // Your Twilio Phone Number
    to: phoneNumber                // Recipient's Phone Number
  });
};

module.exports = sendOtp;