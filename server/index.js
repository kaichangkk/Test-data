const express = require('express');
const mysql = require('mysql');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
require('dotenv').config();
const port = 3001;

app.use(bodyParser.json());

// MySQL database connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Connect to MySQL
db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

app.use(cors());
app.use(express.json());

// Insert data
app.post('/insert', async (req, res) => {
  try {
    const jsonData = fs.readFileSync('files/TEST.json', 'utf8');
    const transactions = JSON.parse(jsonData).transactions;

    // Insert transactions into MySQL
    const query = 'INSERT INTO transactions (id,reference, time, amount, ccy, purpose, fromMember,fromUser,fromAccount,toType,toAccount,toMember) VALUES ?';
    const values = transactions.map(transaction =>
      [transaction.id,transaction.reference, transaction.time, transaction.amount, transaction.ccy, transaction.purpose,transaction.fromMember,transaction.fromUser,transaction.fromAccount,transaction.toType,transaction.toAccount,transaction.toMember]
    );

    db.query(query, [values], (err, result) => {
      if (err) {
        console.error('Error inserting data:', err);
        res.status(500).json({ error: 'Error inserting data' });
      } else {
        res.status(200).json({ message: 'Data inserted successfully' });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error inserting data' });
  }
});

// Get data
app.get('/getData', (req, res) => {
    const query = 'SELECT * FROM transactions';
    db.query(query, (err, result) => {
      if (err) {
        console.error('Error fetching data:', err);
        res.status(500).json({ error: 'Error fetching data' });
      } else {
        res.status(200).json(result);
      }
    });
  });
  
  // Create data
  app.post('/createData', (req, res) => {
    const newTransaction = req.body;
    const query = 'INSERT INTO transactions SET ?';
    
    db.query(query, newTransaction, (err, result) => {
      if (err) {
        console.error('Error creating data:', err);
        res.status(500).json({ error: 'Error creating data' });
      } else {
        res.status(200).json({ message: 'Data created successfully', id: result.insertId });
      }
    });
  });
  
  // Get summaries and transactions
  app.get('/getDatas', (req, res) => {
    const getDataQuery = 'SELECT * FROM transactions';
  
    db.query(getDataQuery, (getDataErr, getDataResult) => {
      if (getDataErr) {
        console.error('Error fetching data:', getDataErr);
        res.status(500).json({ error: 'Error fetching data' });
      } else {
        // Calculate summaries...
  
        const result = {
          result: 'OK',
          date: '2023-08-09',
          summaries: summariesArray, // Remember to define and calculate this array
          transactions: getDataResult,
        };
  
        res.status(200).json(result);
      }
    });
  });
  

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
