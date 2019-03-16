var mysql = require("mysql");
require('dotenv').config();

//_______________________________________________________________________
var connection;

// if (process.env.JAWSDB_URL) {
connection = mysql.createConnection(process.env.JAWSDB_URL);
// }
// else {
//     connection = mysql.createConnection({
//         host: process.env.SQL_HOST,
//         port: process.env.SQL_PORT,
//         user: process.env.SQL_USER,
//         password: process.env.SQL_PASS,
//         database: "burgers_db"
//     });
// }


connection.connect();

module.exports = connection;