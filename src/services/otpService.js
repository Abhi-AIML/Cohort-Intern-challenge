module.exports = {
    generateOTP: () => {
      const otpLength = 6;
      const otp = Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit OTP
      return otp.toString();
    },
  
    validateOTP: (phoneNumber, enteredOTP, userData) => {
      if (!userData || userData.expiresAt < Date.now()) {
        return false; // OTP expired or user data missing
      }
  
      return userData.otp === enteredOTP;
    },
  };
  