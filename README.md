# Cohort-Intern-challenge
# OTP-based User Authentication API

## Features
- User registration and login using OTP-based authentication.
- Twilio integration for sending real-time OTPs via SMS.
- JSON Web Token (JWT) for secure authentication and session management.
- Rate limiting implemented to prevent brute-force attacks.
- Secure communication using HTTPS.

## Dependencies Used 💪
- [x] Express: Fast and minimal web framework for Node.js
- [x] Firebase: Real-time database for storing user data and OTPs
- [x] Twilio: API for sending SMS messages
- [x] jsonwebtoken: Library for creating and verifying JWT tokens
- [x] cors: Middleware for handling Cross-Origin Resource Sharing (CORS)
- [x] body-parser: Middleware for parsing incoming request bodies
- [x] express-rate-limit: Middleware for rate limiting requests

## Folder Structure
- /controllers: Contains route handlers and logic
- /routes: Contains route definitions
- /utils: Contains utility functions
- /services: Contains services for sending OTPs and working with Twilio
- /config: Contains configuration files

## Setup and Installation 🚀
1. Clone the repository:
2. Install dependencies:
3. Set up your Firebase credentials in `config/firebaseConfig.js`.
4. Replace Twilio credentials and phone number in `services/twilioService.js`.
5. Generate a JWT secret key and update it in `config/jwtConfig.js`.

## Features of The API
- User registration: POST /register
- User login: POST /login
- Logout: POST /logout

## API Endpoints
- `POST /register`: Register a new user with phone number and name.
- `POST /login`: Log in a user using OTP authentication.
- `POST /logout`: Log out a user and clear the JWT token.

## Technologies Used
- Node.js: Server-side JavaScript runtime
- Express: Web framework for building APIs
- Firebase: Real-time database
- Twilio: SMS service for sending OTPs
- JSON Web Tokens (JWT): Secure authentication
- Express Rate Limit: Prevents brute-force attacks

## Usage
1. Register a user using the `/register` endpoint.
2. Log in a user using the `/login` endpoint and OTP.
3. Secure communication using HTTPS to protect sensitive data.
4. Provide Rate-Limiting features to prevent attacks.
5. Log out a user using the `/logout` endpoint.

## Working Video




