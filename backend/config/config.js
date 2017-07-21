const mysql = require('mysql');

module.exports.connection = mysql.createConnection({
    host: 'us-cdbr-iron-east-03.cleardb.net',
    user: 'b4a57aa79e4dde',
    password: '846d2dbf',
    database: 'heroku_62b1e78119a5dbd'
});