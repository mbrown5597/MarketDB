const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const User = require('../models/user');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/api/register', async (req, res) => {
  const formData = req.body;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  if (emailRegex.test(formData.email) && passwordRegex.test(formData.password)) {
    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(formData.password, salt);

    // Create a new user and save it to the database
    const newUser = new User(formData.username, formData.email, hashedPassword, formData.accountType, formData.jobFunction, formData.state);
    newUser.create();

    // Generate a JWT token and send it as a response
    const token = jwt.sign({ _id: newUser.id }, process.env.JWT_SECRET);
    res.header('auth-token', token).send(token);
  } else {
    res.status(400).send('Invalid email or password');
  }
});

app.listen(5000, () => {
  console.log('Server started on port 5000');
});