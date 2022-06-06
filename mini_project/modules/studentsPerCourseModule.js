const StudentsPerCourse = require('../models/studentsPerCourse');

const configDetails = {
    host: "localhost",
    user: "root",
    password: "SotGian1988",
    port: 3306,
    database: "private_school"
};

const mysql = require('mysql2/promise');

async function create(studentPerCourse) {
    try {
        const conn = await mysql.createConnection(configDetails);
        let sql = 'INSERT INTO studentsPerCourse (stID,cID,enrollmentDate,tuitionFees) VALUES (?,?,?,?)';
        const[result] = await conn.execute(sql,[
            studentPerCourse.stID,
            studentPerCourse.cID,
            studentPerCourse.enrollmentDate,
            studentPerCourse.tuitionFees
        ]);
        console.log(`${result.affectedRows} studentPerCourse(s) created`);
        await conn.end();
    } catch (ex) {
        console.log(ex.message);
        process.exit();
    }
}

module.exports.create = create;