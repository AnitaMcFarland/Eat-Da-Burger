// Set up MySQL connection.
var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password:'hacktheplanet',
        database: 'todoagain_db'

    });
}

connection.connect();
module.exports = connection;
