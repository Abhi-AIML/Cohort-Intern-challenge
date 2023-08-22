const jwt = require('jsonwebtoken');
const config = require('../config');
const JWT_SECRET = config.JWT_SECRET;


module.exports = {
  generateJWT: (phoneNumber) => {
    const payload = { phoneNumber };
    const options = {
      expiresIn: '1h', // JWT expiration time (e.g., 1 hour)
    };

    // Generate JWT
    const token = jwt.sign(payload, JWT_SECRET, options);
    return token;
  }
};
