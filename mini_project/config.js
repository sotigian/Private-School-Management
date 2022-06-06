const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "SotGian1988",
    port: 3306,
    database: "private_school"
});

module.exports = connection;