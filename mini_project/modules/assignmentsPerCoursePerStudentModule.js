const AssignmentsPerCoursePerStudent = require('../models/assignmentsPerCoursePerStudent');

const configDetails = {
    host: "localhost",
    user: "root",
    password: "SotGian1988",
    port: 3306,
    database: "private_school"
};

const mysql = require('mysql2/promise');

async function create(assignmentPerCoursePerStudent) {
    try {
        const conn = await mysql.createConnection(configDetails);
        let sql = 'INSERT INTO assignmentsPerCoursePerStudent (stID,cID,asID,oralMark,totalMark) VALUES (?,?,?,?,?)';
        const[result] = await conn.execute(sql,[
            assignmentPerCoursePerStudent.stID,
            assignmentPerCoursePerStudent.cID,
            assignmentPerCoursePerStudent.asID,
            assignmentPerCoursePerStudent.oralMark,
            assignmentPerCoursePerStudent.totalMark
        ]);
        console.log(`${result.affectedRows} assignmentPerCoursePerStudent(s) created`);
        await conn.end();
    } catch (ex) {
        console.log(ex.message);
        process.exit();
    }
}

module.exports.create = create;