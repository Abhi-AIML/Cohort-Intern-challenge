const admin = require('firebase-admin');
const otpService = require('../services/otpService');
const twilioService = require('../services/twilioService');
const jwtUtils = require('../utils/jwtUtils');


const serviceAccount = require('D:/Internship-webdev/otpnew3/src/internship-546fb-firebase-adminsdk-3vzaj-132dfcaf54.json'); // Update the path

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),

});

const db = admin.firestore();

module.exports = {
  register: async (req, res) => {
    try {
      const { phoneNumber, name } = req.body;

      // Check if user already exists
      const userRef = db.collection('users').doc(phoneNumber);
      const userDoc = await userRef.get();

      if (userDoc.exists) {
        return res.status(400).json({ error: 'User already exists.' });
      }

      // Generate OTP
      const otp = otpService.generateOTP();

      // Store OTP
      await userRef.set({ otp, expiresAt: Date.now() + 600000 }); // 10 minutes

      // Send OTP via Twilio
      twilioService.sendOTP(phoneNumber, otp);

      res.json({ message: 'Registration successful. Please verify OTP.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Registration failed.' });
    }
  },

  login: async (req, res) => {
    try {
      const { phoneNumber, otp } = req.body;

      const userRef = db.collection('users').doc(phoneNumber);
      const userDoc = await userRef.get();

      if (!userDoc.exists) {
        return res.status(404).json({ error: 'User not found.' });
      }

      const userData = userDoc.data();

      // Validate OTP
      if (!otpService.validateOTP(phoneNumber, otp, userData)) {
        return res.status(401).json({ error: 'Invalid OTP.' });
      }

      // Generate JWT
      const token = jwtUtils.generateJWT(phoneNumber);
      


      res.json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Login failed.' });
    }
  },
  // Logout user
  logout: async (req, res) => {
  try {
    // Assuming you're using cookies or headers for JWT storage

    // Clear the JWT cookie if using cookies
    res.clearCookie('jwt', {
      // Add additional options as needed
      httpOnly: true, // Prevent JavaScript access to the cookie
      secure: true,   // Send the cookie only over HTTPS
      sameSite: 'none' // Allow cross-site access
    });

    // Send response
    res.json({ message: 'Logged out successfully' });
  } catch (error) {
    // Handle any errors that might occur during logout
    res.status(500).json({ error: 'An error occurred during logout' });
  }
}
};
