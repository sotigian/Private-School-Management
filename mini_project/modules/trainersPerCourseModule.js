const TrainersPerCourse = require('../models/trainersPerCourse');

const configDetails = {
    host: "localhost",
    user: "root",
    password: "SotGian1988",
    port: 3306,
    database: "private_school"
};

const mysql = require('mysql2/promise');

async function create(trainerPerCourse) {
    try {
        const conn = await mysql.createConnection(configDetails);
        let sql = 'INSERT INTO trainersPerCourse (trID,cID) VALUES (?,?)';
        const[result] = await conn.execute(sql,[
            trainerPerCourse.trID,
            trainerPerCourse.cID
        ]);
        console.log(`${result.affectedRows} trainerPerCourse(s) created`);
        await conn.end();
    } catch (ex) {
        console.log(ex.message);
        process.exit();
    }
}

module.exports.create = create;