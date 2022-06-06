const Assignments = require('../models/assignments');

const configDetails = {
    host: "localhost",
    user: "root",
    password: "SotGian1988",
    port: 3306,
    database: "private_school"
};

const mysql = require('mysql2/promise');

async function getAllAssignments() {
    try{
        const conn = await mysql.createConnection(configDetails);
        const [rows, fields] = await conn.query("SELECT * FROM assignments");
        rows.forEach(function(row){
            let assignment = `id: ${row.id} Title: ${row.title} Description: ${row.description} Sub Date Time: ${row.subDateTime}`;
            console.log(assignment);
        });
        await conn.end();
    }catch (ex) {
        console.log(`Exception: ${ex.message}`);
        process.exit();
    }
}

async function create(assignment) {
    try {
        const conn = await mysql.createConnection(configDetails);
        let sql = 'INSERT INTO assignments (id,title,description,subDateTime) VALUES (?,?,?,?)';
        const[result] = await conn.execute(sql,[
            assignment.id,
            assignment.title,
            assignment.description,
            assignment.subDateTime
        ]);
        console.log(`${result.affectedRows} assignment(s) created`);
        await conn.end();
    } catch (ex) {
        console.log(ex.message);
        process.exit();
    }
}

module.exports.getAllAssignments = getAllAssignments;
module.exports.create = create;

