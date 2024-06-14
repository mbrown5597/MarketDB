const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors")
const bcrypt = require('bcrypt');
const session = require('express-session');
const cookieParser = require('cookie-parser')


const app = express();
app.use(cors({
  origin:"http://localhost:3000",
  methods:["GET","POST"],
  credentials:true
}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
  secret:'sec123',
  resave:false,
  saveUninitialized:false,
  cookie:{
    secure:false,
    maxAge: 1000 * 60 * 60 * 24 //this is for 24 hours
  }
}))


app.get('/use', (req,res)=>{
  return res.json('hello from use')
})
// Configure MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'Sky_ScraperDB',
  connectTimeout: 5000
});

app.post('/register',(req,res)=>{
  const { username, email, password, state, account_type, job_function } = req.body;
  bcrypt.hash(password,10,(err,hashedPassword)=>{
  const sqlQ = `INSERT INTO users (username,email, password,state,account_type,job_function) VALUES ('${username}','${email}','${hashedPassword}','${state}','${account_type}','${job_function}')`;
  console.log(sqlQ)
  db.query(sqlQ, [username, email, hashedPassword, state, account_type, job_function], (err, data)=>{
    if(err) return res.json(err)
    return res.json(data)
  })
})
})

app.get('/', (req,res)=>{
  if(req.session.username){
    return res.json({valid:true, username:req.session.username})
  }else{
    return res.json({valid:false})
  }
})



app.get('/listingData', (req, res) => {
  const tagname = req.query.tagname;
  let sql = `SELECT service, name, GROUP_CONCAT(tags) as tags, description, GROUP_CONCAT(availability) as states FROM listings_in`;

  if (tagname) {
    sql += ` WHERE FIND_IN_SET('${tagname}', tags)`;
  }

  sql += ` GROUP BY service`;

  console.log(sql);

  db.query(sql, (err, data) => {
    if (err) return res.json(err);

    if (data && data.length > 0) {
      const results = data.map(row => {
        const tagsArray = row.tags.split(',');
        const filteredTags = tagsArray.filter(tag => tag !== '' && !tag.startsWith('+'));
        const statesArray = row.states.split(',');
        const filteredStates = statesArray.filter(state => state !== '');

        return {
          service: row.service,
          name: row.name,
          tags: filteredTags,
          description: row.description,
          states: filteredStates
        };
      });

      res.json(results);
    } else {
      res.json([]); // Return an empty array if no data is found
    }
  });
});
app.get('/api/companies', (req, res) => {
  const sql = 'SELECT * FROM companies_list';
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error fetching companies:', err);
      res.status(500).json({ error: 'Error fetching companies' });
    } else {
      res.json(result);
    }
  });
});

// API endpoint to fetch a specific company by name
app.get('/api/company/:companyName', (req, res) => {
  const companyName = req.params.companyName;
  const sql = 'SELECT * FROM companies_list WHERE Company_Name = ?';
  db.query(sql, [companyName], (err, result) => {
    if (err) {
      console.error('Error fetching company details:', err);
      res.status(500).json({ error: 'Error fetching company details' });
    } else {
      if (result.length > 0) {
        res.json(result[0]);
      } else {
        res.status(404).json({ message: 'Company not found' });
      }
    }
  });
});
app.get('/check-username/:username', (req, res) => {
  const { username } = req.params;
  const sqlQ = 'SELECT * FROM users WHERE username = ?';
  db.query(sqlQ, [username], (err, data) => {
    if (err) return res.json(err);
    if (data.length > 0) return res.json({ exists: true });
    return res.json({ exists: false });
  });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const sqlQ = 'SELECT * FROM users WHERE username = ?';
  db.query(sqlQ, [username], (err, data) => {
    if (err) return res.json(err);
    if (data.length > 0){
      req.session.username = data[0].username;
      console.log(req.session.username);
    }
    if (data.length === 0){
       return res.json({ message: 'User not found' })};

    bcrypt.compare(password, data[0].password, (err, result) => {
      if (err) return res.json(err);
      if (result) {
        return res.json({ message: 'Login successful', user: data[0] });
      } else {
        return res.json({ message: 'Incorrect password' });
      }
    });
  });
});

app.get('/listingCounts', (req,res)=>{
  const query = `SELECT COUNT(*) FROM listings_in`
  db.query(query,(err,data)=>{
    if(err) return res.json(err);
    if(data.length > 0) return res.json(data[0])
  })
})


app.get('/UserLevelPrivilege', (req, res) => {
  const query = "SELECT * FROM users WHERE user_type = 'user'";
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching users:', err);
      res.status(500).send({ message: 'Error fetching users' });
    } else {
      res.send(results);
    }
  });
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL');
});


const port = process.env.PORT || 5000;
app.get('/users',(req,res)=>{
  const sqlQ = "SELECT * FROM users"
  db.query(sqlQ,(err,data)=>{
    if(err) return res.json(err)
    return res.json(data)
  })
})



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});