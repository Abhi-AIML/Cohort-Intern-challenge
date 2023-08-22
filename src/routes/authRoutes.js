const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
router.get('/', (req, res) => {
  res.send("Welcome to the OTP-based authentication API!");
});
router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;