var mysql = require("mysql");
require('dotenv').config();

//_______________________________________________________________________

var connection = mysql.createConnection({
    host: process.env.SQL_HOST,
    port: process.env.SQL_PORT,
    user: process.env.SQL_USER,
    password: process.env.SQL_PASS,
    database: "burgers_db"
});


module.exports = connection;