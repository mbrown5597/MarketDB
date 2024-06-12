const express = require('express');
// const sql = require('mssql');
const bodyParser = require('body-parser');
const cors = require("cors");
const registerRoute = require('./src/Routes/register');
const userRoutes = require('./src/Routes/userRoute');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const app = express();


// Configure MySQL
// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'Sky_ScraperDB',
//   port: 1433,
//   connectTimeout: 5000,
//   authPlugins: {
//     mysql_clear_password: () => Buffer.from('')
//   }
// });

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port:1433,
    database: 'Sky_ScraperDB'
  });
db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL');
});


app.use('/api', registerRoute);

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
  }));
// const corsOptions ={
//     origin:'http://localhost:3000', 
//     credentials:true,            //access-control-allow-credentials:true
//     // optionSuccessStatus:200
// }
// app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', userRoutes);

app.post('/register', (req, res) => {
  const { email, password } = req.body;

  // Make sure the password is at least 10 characters long
  if (password.length < 10) {
    return res.json({ message: 'Password must be at least 10 characters long.' });
  }

  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) throw err;

    const query = `INSERT INTO Users (email, password) VALUES ('${email}', '${hashedPassword}')`;

    db.query(query, (err, result) => {
      if (err) throw err;
      console.log(`Inserted user with ID: ${result.insertId}`);
      res.json({ message: 'User registered successfully.' });
    });
  });
});
// app.post('/register', async (req, res) => {
//     const { user, pwd } = req.body;
//     try {
//     const pool = await sql.connect(config);
//     const result = await pool.request()
//         .input('email', sql.VarChar, user)
//         .input('password', sql.VarChar, pwd)
//         .query('INSERT INTO Users (email, password) VALUES (@email, @password)');
//     res.json(result.recordset);
//     } catch (err) {
//       res.status(500).json({ message: err.message });
//     }
//   });
  
const port = process.env.PORT || 5000;
  
// app.post('/register', async (req, res) => {
//     const { user, pwd } = req.body;
//     try {
//     const pool = await sql.connect(config);
//     const hashedPassword = await bcrypt.hash(pwd, 10);
//     const result = await pool.request()
//     db.input('email', sql.VarChar, user);
//     db.input('password', sql.VarChar, hashedPassword);
//     db.query('INSERT INTO Users (email, password) VALUES (@email, @password)');
//     res.json(result.recordset);
//     } catch (err) {
//     res.status(500).json({ message: err.message });
//     }

// });


//Login route
// app.post('/auth', (req, res) => {
//   const { user, pwd } = req.body;
//   // Perform authentication logic (query database, check credentials, etc.)
//   // Example:
//   mySQLPool.query('SELECT * FROM Users WHERE Email = ? AND Password = ?', [user, pwd]).then((results) => {
//     if (results.length === 0) {
//       res.status(401).json({ error: 'Unauthorized' });
//     } else {
//       // Authentication successful, send response with user data
//       res.status(200).json({ user: results[0] });
//     }
//   }).catch((err) => {
//     console.error('Error querying MySQL database:', err);
//     res.status(500).json({ error: 'Internal Server Error' });
//   });
// });
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});