const Trainers = require('../models/trainers');

const configDetails = {
    host: "localhost",
    user: "root",
    password: "SotGian1988",
    port: 3306,
    database: "private_school"
};

const mysql = require('mysql2/promise');

async function getAllTrainers() {
    try{
        const conn = await mysql.createConnection(configDetails);
        const [rows, fields] = await conn.query("SELECT * FROM trainers");
        rows.forEach(function(row){
            let trainer = `id: ${row.id} First Name: ${row.firstName} Last Name: ${row.lastName} Subject: ${row.subject}`;
            console.log(trainer);
        });
        await conn.end();
    }catch (ex) {
        console.log(`Exception: ${ex.message}`);
        process.exit();
    }
}


async function create(trainer) {
    try{
        const conn = await mysql.createConnection(configDetails);
        let sql = 'INSERT INTO trainers (id,firstName,lastName,subject) VALUES (?,?,?,?)';
        const[result] = await conn.execute(sql, [
            trainer.id,
            trainer.firstName,
            trainer.lastName,
            trainer.subject
        ]);
        console.log(`${result.affectedRows} trainers(s) created`);
        await conn.end();
    }catch (ex) {
        console.log(`Exception: ${ex.message}`);
        process.exit();
    }
}

module.exports.getAllTrainers = getAllTrainers;
module.exports.create = create;
