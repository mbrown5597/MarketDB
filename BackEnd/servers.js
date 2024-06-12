const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const mysql = require('mysql');
const bcrypt = require('bcrypt');

const app = express();

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  port: 1433,
  database: 'Sky_ScraperDB'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL');
});

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

app.use(bodyParser.urlencoded({ extended: true }));

const registerRoute = require('./src/Routes/register');
const userRoutes = require('./src/Routes/userRoute');

app.use('/api', registerRoute);
app.use('/', userRoutes);

app.post('/register', (req, res) => {
  if (!req.body) {
    return res.status(400).json({ message: 'No request body provided' });
  }

  const { email, password } = req.body;

  if (!email ||!password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  if (password.length < 10) {
    return res.json({ message: 'Password must be at least 10 characters long.' });
  }

  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) throw err;

    const query = `INSERT INTO Users (email, password) VALUES ('${email}', '${hashedPassword}')`;

    db.query(query, [email, hashedPassword], (err, result) => {
      if (err) throw err;
      console.log(`Inserted user with ID: ${result.insertId}`);
      res.json({ message: 'User registered successfully.' });
    });
  });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});