var mysql = require('mysql');

console.log('Get connection ...');

var db = mysql.createConnection({
  database: 'exploitation',
  host: '127.0.0.1',
  user: 'root',
  password: 'motdepasse'
});

var db = mysql.createConnection('mysql://root:motdepasse@localhost:3306/exploitation?debug=true');


db.connect(function(err) {
  if (err) {
    console.log('error connecting: ' + err.stack);
    return;
  }
  console.log("Connected!");
});