var mysql = require('mysql');

var bdd = mysql.createConnection({
    database: 'exploitation',
    host: '127.0.0.1',
    user: 'root',
    password: 'motdepasse'
});