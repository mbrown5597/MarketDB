// const { Sequelize, Model, DataTypes } = require('sequelize');
// const sequelize = new Sequelize('database', 'username', 'password', {
//   host: 'localhost',
//   dialect: 'mssql'
// });

// class User extends Model {}

// User.init({
//   username: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true
//   },
//   password: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   accountType: {
//     type: DataTypes.ENUM('Agent account', 'Company account'),
//     allowNull: false
//   },
//   jobFunction: {
//     type: DataTypes.ENUM('Underwriter', 'Broker', 'Claims Adjuster', 'Risk Manager'),
//     allowNull: false
//   },
//   state: {
//     type: DataTypes.STRING,
//     allowNull: false
//   }
// }, {
//   sequelize,
//   modelName: 'User'
// });

// User.create({
//   username: 'John Doe',
//   email: 'john.doe@example.com',
//   password: 'password123',
//   accountType: 'Agent account',
//   jobFunction: 'Underwriter',
//   state: 'New York'
// });

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
//   user: 'NT Service\MSSQLSERVER',
//   password: '',
  database: 'Sky_ScraperDB',
  port:1433,
  user: 'mike', // add your windows username here
  authentication: {
    windowsAuth: true, // enable windows authentication
  },
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

class User {
  constructor(username, email, password, accountType, jobFunction, state) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.accountType = accountType;
    this.jobFunction = jobFunction;
    this.state = state;
  }

  static create(user) {
    const { username, email, password, accountType, jobFunction, state } = user;
    const query = `INSERT INTO User (username, email, password, accountType, jobFunction, state) VALUES ('${username}', '${email}', '${password}', '${accountType}', '${jobFunction}', '${state}')`;
    connection.query(query, (err, result) => {
      if (err) throw err;
      console.log(`User created with ID: ${result.insertId}`);
    });
  }
}

module.exports = User;