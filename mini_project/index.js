const studentsModule = require('./modules/studentsModule');
const trainersModule = require('./modules/trainersModule');
const assignmentsModule = require('./modules/assignmentsModule');
const coursesModule = require('./modules/coursesModule');
const studentsPerCourseModule = require('./modules/studentsPerCourseModule');
const trainersPerCourseModule = require('./modules/trainersPerCourseModule');
const assignmentsPerCoursePerStudentModule = require('./modules/assignmentsPerCoursePerStudentModule');
const filterModule = require('./modules/filterModule');
const prompt = require('prompt-sync')();
const UI = require('./ui');



// Create the connection to database
console.log("1. Get a list of all the students");
console.log("2. Get a list of all the trainers");
console.log("3. Get a list of all the assignments");
console.log("4. Get a list of all the courses");
console.log("5. Get all the students per course");
console.log("6. Get all the trainers per course");
console.log("7. Get all the assignments per course");
console.log("8. Get all the assignments per course per student");
console.log("9. Get a list of students that belong to more than one courses");
console.log("10. Insert input data to students table");
console.log("11. Insert input data to trainers table");
console.log("12. Insert input data to assignments table");
console.log("13. Insert input data to courses table");
console.log("14. Insert input data to studentsPerCourse table");
console.log("15. Insert input data to trainersPerCourse table");
console.log("16. Insert input data to assignmentsPerStudentPerCourse table");
let choice = parseInt(prompt('What you want to do? Select a number: '));



switch(choice) {
    case 1:
        studentsModule.getAllStudents();
        break;
    case 2:
         trainersModule.getAllTrainers();
         break;
    case 3:
        assignmentsModule.getAllAssignments();
        break;
    case 4:
        coursesModule.getAllCourses();
        break;
    case 5:
        filterModule.printAllStudentsPerCourse();
        break;
    case 6:
        filterModule.printAllTrainersPerCourse();
        break;
    case 7:
        filterModule.printAllAssignmentsPerCourse();
        break;
    case 8:
        filterModule.printAllAssignmentsPerCoursePerStudent();
        break;
    case 9:
        filterModule.printStudentsWithMultipleCourses();
        break;
    case 10:
        const student = UI.getStudentFromUser();
        studentsModule.create(student);
        break;
    case 11:
        const trainer = UI.getTrainerFromUser();
        trainersModule.create(trainer);
        break;
    case 12:
        const assignment = UI.getAssignmentFromUser();
        assignmentsModule.create(assignment);
        break;
    case 13:
        const course = UI.getCourseFromUser();
        coursesModule.create(course);
        break;
    case 14:
        studentPerCourse = UI.getStudentPerCourseFromUser(); 
        studentsPerCourseModule.create(studentPerCourse);
        break;
    case 15:
        const trainerPerCourse = UI.getTrainerPerCourseFromUser();
        trainersPerCourseModule.create(trainerPerCourse);
        break;
    case 16:
        assignmentsPerCoursePerStudent = UI.getAssignmentPerCoursePerStudentFromUser();
        assignmentsPerCoursePerStudentModule.create(assignmentsPerCoursePerStudent);
        break;
    default:
        throw new Error('Wrong Inputs');      
}




