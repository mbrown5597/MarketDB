// // const express = require('express');
// // const router = express.Router();
// // const { User } = require('../models/index');
// // const axios = require('axios');

// // router.post('/insertUser', async (req, res) => {
// //   const { email, password, userType } = req.body;
// //   const SERVER_URL = 'sqlserver://DESKTOP-Q4RBR9P.database.windows.net:1433;database=Sky_ScraperDB';
// //   try {
// //     const newUser = await User.create({ email, password, userType });
// //     const response = await axios.post(SERVER_URL, newUser);
// //     res.json(response.data);
// //   } catch (err) {
// //     res.status(500).json({ message: err.message });
// //   }
// // });

// // module.exports = router;

// const express = require('express');
// const router = express.Router();
// const sql = require('mssql');

// const config = {
//   server: 'DESKTOP-Q4RBR9P.database.windows.net',
//   database: 'Sky_ScraperDB',
// //   user: 'your_username',
// //   password: 'your_password',
// //   options: {
// //     encrypt: true // Use this if you're on Azure
// //   }
// }

// router.post('/insertUser', async (req, res) => {
//   const { email, password, userType } = req.body;
//   try {
//     const pool = await sql.connect(config);
//     const result = await pool.request()
//       .input('email', sql.VarChar, email)
//       .input('password', sql.VarChar, password)
//       .input('userType', sql.VarChar, userType)
//       .query('INSERT INTO Users (email, password, userType) VALUES (@email, @password, @userType)');
//     res.json(result.recordset);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const verifyToken = require('../middlewares/verifyToken');

const userRoutes = router.get('/', verifyToken, (req, res) => {
  // Get the user ID from the JWT token
  const userId = req.user._id;

  // Find the user by ID and send it as a response
  User.findById(userId, (err, user) => {
    if (err) throw err;
    res.send(user);
  });
});

module.exports = { userRoutes };