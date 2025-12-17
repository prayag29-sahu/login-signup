// twilioService.js
const twilio = require('twilio');

const accountSid = 'ACfeac8cb3sgcjhs8fcd683e278'; // dummy id 
const authToken = '3fa8fccfa746427f4a267e910505';   // dummy Auth Token 

const client = new twilio(accountSid, authToken);

const sendOtp = (phoneNumber, otp) => {
  return client.messages.create({
    body: `Your OTP is ${otp}`,  // The message content
    from: '+123966657632', // Your Twilio Phone Number
    to: phoneNumber                // Recipient's Phone Number
  });
};


module.exports = sendOtp;
