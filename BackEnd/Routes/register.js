const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const registerRoute = router.post('/api/register', async (req, res) => {
  // Destructure the request object
  const { username, email, password, accountType, jobFunction, state } = req.body;

  // Validate user input
  if (!username || !email || !password || !accountType || !jobFunction || !state) {
    return res.status(400).send('All fields are required');
  }

  // Hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create a new user and save it to the database
  const newUser = new User(username, email, hashedPassword, accountType, jobFunction, state);
  newUser.create();

  // Generate a JWT token and send it as a response
  const token = jwt.sign({ _id: newUser.id }, process.env.JWT_SECRET);
  res.header('auth-token', token).send(token);
});

module.exports = { registerRoute };