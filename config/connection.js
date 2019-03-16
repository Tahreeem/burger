var mysql = require("mysql");
require('dotenv').config();

//_______________________________________________________________________
var connection;

<<<<<<< HEAD
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
    console.log((connection));
}
else {
    connection = mysql.createConnection({
        host: process.env.SQL_HOST,
        port: process.env.SQL_PORT,
        user: process.env.SQL_USER,
        password: process.env.SQL_PASS,
        database: "burgers_db"
    });
}
=======
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
>>>>>>> 8b766133407f43a1cc1794d150796047813c6b21


connection.connect();

module.exports = connection;