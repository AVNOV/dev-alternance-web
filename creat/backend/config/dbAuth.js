const mysql = require('mysql')

const dbAuth = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "motdepasse",
    database:"auth_user" 
})

module.exports = dbAuth;