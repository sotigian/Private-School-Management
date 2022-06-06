# Private-School-Management
This project implements the management of a Private School.

This private school supports multiple courses.Each course can have multiple trainers, students,and assignments.The  application holds  in  a database
multiple  courses along  with  the  enrolled  students,  the  trainers  that  teach  the  subjects  and  the assignments  /  projects  that  the  students
need  to  submit  during  the  course duration.

* The ERD_private_school.png file depicts the ER Diagram of the Private School.
* The SCHEMA_private_school.png file presents the schema of the database that can keep data for the main entities of the  application.
* The Individual_Project_Part_B.sql file implements the population of tables with enough data.
SQL queries output the following:
   * A list of all the students
   * A list of all the trainers
   * A list of all the assignments
   * A list of all the courses
   * All the students per course
   * All the trainers per course
   * All the assignments per course
   * All the assignments per course per student
   * A list of students that belong to more than one courses

The mini_project makes  a  connection  to  the  database and  executes  the  above  sql queries.
It offers the choice to  insert inputdata from the keyboard to the following tables:
* students
* trainers
* assignments
* courses
* students per course
* trainers per course
* assignments per student per course

To run the application git clone the following repository: https://github.com/sotigian/Private-School-Management.git

Change to directory mini_project

Execute: npm i

Execute: npm run start

