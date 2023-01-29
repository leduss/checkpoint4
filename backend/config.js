const mysql = require("mysql2");
require("dotenv").config();

const connection = mysql.createConnection({
  connectionLimit: 1000,
  connectTimeout: 60 * 60 * 1000,
  host: process.env.YOUR_DB_HOST,
  port: process.env.YOUR_DB_PORT,
  user: process.env.YOUR_DB_USER,
  password: process.env.YOUR_DB_PASSWORD,
  database: process.env.YOUR_DB_NAME,
});

module.exports = connection;
