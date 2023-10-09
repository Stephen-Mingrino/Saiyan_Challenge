const express = require('express');
const mysql = require('mysql');

const app = express();


const db = mysql.createConnection({
  host: 'localhost:3306',
  user: 'root',
  password: 'Jtheking1',
  database: 'saiyan_schema', 
});


db.connect((err) => {
  if (err) {
    console.error('MySQL connection error:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

require("../models/SaiyanModel")