const twilio = require('twilio');

// Your Twilio account SID and authentication token
const accountSid = 'ACbc4944262a6ccca161f8c3c90ddea0c7';
const authToken = '648a897a82b1987c0fbe7ef3cfcdee12';

// Initialize Twilio client
const client = twilio(accountSid, authToken);

module.exports = {
  sendOTP: (phoneNumber, otp) => {
    const messageBody = `Your OTP is: ${otp}`;
    
    // Replace with your Twilio phone number
    const fromNumber = '+12058581711';

    // Send SMS
    client.messages
      .create({
        body: messageBody,
        from: fromNumber,
        to: phoneNumber,
      })
      .then(message => console.log(`OTP sent to ${phoneNumber}. Message SID: ${message.sid}`))
      .catch(error => console.error(`Failed to send OTP to ${phoneNumber}:`, error));
  }
};
