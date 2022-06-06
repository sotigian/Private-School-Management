const configDetails = {
    host: "localhost",
    user: "root",
    password: "SotGian1988",
    port: 3306,
    database: "private_school"
};

const mysql = require('mysql2/promise');
const _ = require('lodash');

async function printAllStudentsPerCourse() {
    try{		
		const conn = await mysql.createConnection(configDetails);

		let sql = `SELECT s.firstName, s.lastName, c.title
        FROM students AS s
        INNER JOIN studentsPerCourse AS spc
        ON s.id = spc.stID
        INNER JOIN courses AS c
        ON c.id = spc.cID;`;

        const  [rows,fields] = await conn.query(sql);
        let rowsGroupedByCourseTitle = _.groupBy(rows, 'title');
		_.forEach(rowsGroupedByCourseTitle, function(textRow,key){
            console.log(key);
            for (let item of textRow) {
                console.log(`\t ${item.firstName} ${item.lastName}`);
            }
        });

        await conn.end();
	}catch(ex){
		console.log(ex.message);
		process.exit();
	}
}



async function printAllTrainersPerCourse() {
    try{		
		const conn = await mysql.createConnection(configDetails);

		let sql = `SELECT t.firstName, t.lastName, c.title
        FROM trainers AS t
        INNER JOIN trainersPerCourse AS tpc
        ON t.id = tpc.trID
        INNER JOIN courses AS c
        ON c.id = tpc.cID;`;

        const [rows,fields] = await conn.query(sql);
        let rowsGroupedByCourseTitle = _.groupBy(rows, 'title');
        _.forEach(rowsGroupedByCourseTitle, function(textRow, key){
            console.log(key);
            for (let item of textRow) {
                console.log(`\t ${item.firstName} ${item.lastName}`);
            }
        });

		await conn.end();
	}catch(ex){
		console.log(ex.message);
		process.exit();
	}
}



async function printAllAssignmentsPerCourse() {
    try{		
		const conn = await mysql.createConnection(configDetails);
		
        let sql = `SELECT a.title, c.title AS course_title
        FROM assignments AS a
        INNER JOIN assignmentsPerCourse AS apc
        ON a.id = apc.asID
        INNER JOIN courses AS c
        ON c.id = apc.cID;`;

        const [rows,fields] = await conn.query(sql);
        let rowsGroupedByCourseTitle = _.groupBy(rows, 'course_title');
        _.forEach(rowsGroupedByCourseTitle, function(textRow, key){
            console.log(key);
            for (let item of textRow) {
                console.log(`\t ${item.title}`);
            }
        });

		await conn.end();
	}catch(ex){
		console.log(ex.message);
		process.exit();
	}
}



async function printAllAssignmentsPerCoursePerStudent() {
    try{		
		const conn = await mysql.createConnection(configDetails);
		let sql = `SELECT CONCAT(firstName, " ", lastName) AS fullname, c.title AS course_title, a.title AS assignment_title
        FROM students AS s
        INNER JOIN assignmentsPerCoursePerStudent AS apcps
        ON s.id = apcps.stID
        INNER JOIN assignments AS a
        ON a.id = apcps.asID
        INNER JOIN courses AS c
        ON c.id = apcps.cID;`;

        const [rows,fields] = await conn.query(sql);
        let rowsGroupedByStudent = _.groupBy(rows, 'fullname');
        _.forEach(rowsGroupedByStudent, function(textRow, key){
            console.log(key);
            let rowsGroupedByCourse = _.groupBy(textRow, 'course_title');
            _.forEach(rowsGroupedByCourse, function(textrow1, key1){
                console.log(`\t${key1}`);
                    for (let item of textrow1) {
                        console.log(`\t\t\t${item.assignment_title}`);
                    }
            })
        });

		await conn.end();
	}catch(ex){
		console.log(ex.message);
		process.exit();
	}
}



async function printStudentsWithMultipleCourses() {
    try{		
		const conn = await mysql.createConnection(configDetails);
		
        let sql = `SELECT s.id, s.firstName, s.lastName
        FROM students AS s, studentsPerCourse AS spc, courses AS c
        WHERE s.id = spc.stID AND c.id = spc.cID
        GROUP BY s.id
        HAVING (COUNT(spc.cID) > 1)
        ORDER BY s.id;`;

        const [rows, fields] = await conn.query(sql);
        rows.forEach(function(row){
            console.log(`${row.firstName} ${row.lastName}`);
        });

		await conn.end();
	}catch(ex){
		console.log(ex.message);
		process.exit();
	}
}



module.exports.printAllStudentsPerCourse = printAllStudentsPerCourse;
module.exports.printAllTrainersPerCourse = printAllTrainersPerCourse;
module.exports.printAllAssignmentsPerCourse = printAllAssignmentsPerCourse;
module.exports.printAllAssignmentsPerCoursePerStudent = printAllAssignmentsPerCoursePerStudent;
module.exports.printStudentsWithMultipleCourses = printStudentsWithMultipleCourses;