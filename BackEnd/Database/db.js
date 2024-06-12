const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'Sky_ScraperDB',
  port: 1433,
  authPlugins: {
    mysql_clear_password: () => Buffer.from('')
  }
});

const registerUser = async (email, password) => {
  const userType = 'RetailAgent'; // or any other default user type

  const connection = await pool.getConnection();
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const query = 'INSERT INTO Users (Email, Password, UserType) VALUES (?, ?, ?)';
    const result = await connection.query(query, [email, hashedPassword, userType]);
    return result.insertId;
  } catch (err) {
    console.error(err);
    throw new Error('Failed to register user');
  } finally {
    connection.release();
  }
}

module.exports = {
  registerUser,
};