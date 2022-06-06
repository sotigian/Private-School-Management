const Assignments = require('./models/assignments');
const Courses = require('./models/courses');
const Student = require('./models/students');
const StudentsPerCourse = require('./models/studentsPerCourse');
const Trainers = require('./models/trainers');
const TrainersPerCourse = require('./models/trainersPerCourse');
const AssignmentsPerCoursePerStudent = require("./models/assignmentsPerCoursePerStudent");
const prompt = require('prompt-sync')();



module.exports.getStudentFromUser = function() {
    const id = prompt("Give student's id: ");
    const firstName = prompt("Give student's First Name: ");
    const lastName = prompt("Give student's Last Name: ");
    const dateOfBirth = prompt("Give student's Date of Birth: ");
    return new Student(id, firstName, lastName, dateOfBirth);
}



module.exports.getTrainerFromUser = function() {
    const id = prompt("Give trainer's id: ");
    const firstName = prompt("Give trainer's First Name: ");
    const lastName = prompt("Give trainer's Last Name: ");
    const subject = prompt("Give trainer's subject: ");
    return new Trainers(id, firstName, lastName, subject);
}



module.exports.getAssignmentFromUser = function() {
    const id = prompt("Give assignment's id: ");
    const title = prompt("Give assignment's title: ");
    const description = prompt("Give assignment's description: ");
    const subDateTime = prompt("Give Sub Date Time: ");
    return new Assignments(id, title, description, subDateTime);
}



module.exports.getCourseFromUser = function() {
    const id = prompt("Give course's id: ");
    const title = prompt("Give course's title: ");
    const stream = prompt("Give course's stream: ");
    const type = prompt("Give course's type: ");
    const startDate = prompt("Give courses start date: ");
    const endDate = prompt("Give course's end date: ");
    return new Courses(id, title, stream, type, startDate, endDate);
}



module.exports.getStudentPerCourseFromUser = function() {
    const stID = prompt("Give student's id: ");
    const cID = prompt("Give course's id: ");
    const enrollmentDate = prompt("Give course's enrollment date: ");
    const tuitionFees = prompt("Give the amount of tuition fees: ")
    return new StudentsPerCourse(stID, cID, enrollmentDate, tuitionFees);
}

module.exports.getTrainerPerCourseFromUser = function() {
    const trID = prompt("Give trainer's id: ");
    const cID = prompt("Give course's id: ");
    return new TrainersPerCourse(trID, cID);
}

module.exports.getAssignmentPerCoursePerStudentFromUser = function() {
    const stID = prompt("Give student's id: ");
    const cID = prompt("Give course's id: ");
    const asID = prompt("Give assignment's id: ");
    const oralMark = prompt("Give assignment's oral mark: ");
    const totalMark = prompt("Give assignment's total mark: ");
    return new AssignmentsPerCoursePerStudent(stID, cID, asID, oralMark, totalMark);
}






