const mysql = require('mysql');
//these are obviously not my real db credentials :)
module.exports.connection = mysql.createConnection({
    host: 'cleardbheroku', 
    user: 'newuser',
    password: 'notmypassword',
    database: 'scramble-dash-db'
});