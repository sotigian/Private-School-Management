const Students = require('../models/students');

const configDetails = {
    host: "localhost",
    user: "root",
    password: "SotGian1988",
    port: 3306,
    database: "private_school"
};

const mysql = require('mysql2/promise');

async function getAllStudents() {
    try {
        const conn = await mysql.createConnection(configDetails);
        const [rows, fields] = await conn.query("SELECT * FROM students");
        rows.forEach(function(row) {
            let student = `id: ${row.id} First Name: ${row.firstName} Last Name: ${row.lastName} Date of Birth: ${row.dateOfBirth.toLocaleDateString()}`;
            console.log(student);
        });
        await conn.end();
    } catch (ex) {
        console.log(`Exception: ${ex.message}`);
        process.exit();
    }
}

async function create(student) {
    try {
        const conn = await mysql.createConnection(configDetails);
        let sql = 'INSERT INTO students (id,firstName,lastName,dateOfBirth) VALUES (?,?,?,?)';
        const[result] = await conn.execute(sql,[
            student.id,
            student.firstName,
            student.lastName,
            student.dateOfBirth
        ]);
        console.log(`${result.affectedRows} student(s) created`);
        await conn.end();
    } catch (ex) {
        console.log(ex.message);
        process.exit();
    }
}


module.exports.getAllStudents = getAllStudents;
module.exports.create = create;