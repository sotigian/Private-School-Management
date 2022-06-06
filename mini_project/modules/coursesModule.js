const Courses = require("../models/courses");

const configDetails = {
    host: "localhost",
    user: "root",
    password: "SotGian1988",
    port: 3306,
    database: "private_school"
};

const mysql = require('mysql2/promise');

async function getAllCourses() {
    try {
        const conn = await mysql.createConnection(configDetails);
        const [rows, fields] = await conn.query("SELECT * FROM courses");
        rows.forEach(function(row) {
            let course = `id: ${row.id} Title: ${row.title} Stream: ${row.stream} Type: ${row.type} Start Date: ${row.startDate} End Date: ${row.endDate}`;
            console.log(course);
        });
        await conn.end();
    } catch (ex) {
        console.log(`Exception: ${ex.message}`);
        process.exit();
    }
}

async function create(course) {
    try {
        const conn = await mysql.createConnection(configDetails);
        let sql = 'INSERT INTO courses (id,title,stream,type,startDate,endDate) VALUES (?,?,?,?,?,?)';
        const[result] = await conn.execute(sql,[
            course.id,
            course.title,
            course.stream,
            course.type,
            course.startDate,
            course.endDate
        ]);
        console.log(`${result.affectedRows} course(s) created`);
        await conn.end();
    } catch (ex) {
        console.log(ex.message);
        process.exit();
    }
}

module.exports.getAllCourses = getAllCourses;
module.exports.create = create;