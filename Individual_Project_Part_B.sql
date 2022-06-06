CREATE DATABASE IF NOT EXISTS private_school;

USE private_school;

CREATE TABLE IF NOT EXISTS students(
id INT NOT NULL auto_increment,
firstName VARCHAR(45),
lastName VARCHAR(45),
dateOfBirth DATE,
CONSTRAINT pk PRIMARY KEY(id)
);

INSERT INTO students (firstName, lastName, dateOfBirth) VALUES ('Nikos', 'Markou', '1985-02-22'),
                                                               ('Marios', 'Antoniou', '1992-02-01'),
															   ('Eleni', 'Pappa', '1990-03-17'),
                                                               ('Dimitra', 'Maragou', '1982-12-28'),
															   ('Dimitris', 'Papadopoulos', '1980-10-20'),
                                                               ('Periklis', 'Tsoukalas', '1983-04-02'),
                                                               ('Aggeliki', 'Panagiotou', '1996-09-04'),
															   ('Niki', 'Georgatou', '1989-10-26'),
                                                               ('Manolis', 'Dimitropoulos', '1994-03-15'),
                                                               ('Eugenia', 'Nikolaou', '1998-08-10'),
															   ('Vasilis', 'Dimopoulos', '1991-11-11'),
                                                               ('Giannis', 'Mosxovos', '1992-05-01'),
                                                               ('Maria', 'Venizelou', '1997-12-12'),
                                                               ('Pantelis', 'Savidis', '1980-10-07'),
                                                               ('Katerina', 'Stournara', '1985-02-07'),
                                                               ('Kostas', 'Andriopoulos', '1987-04-03'),
                                                               ('Eva', 'Papadimitriou', '1991-09-14'),
                                                               ('Nikos', 'Marousopoulos', '1990-01-01'),
                                                               ('Manolis', 'Tsarouxas', '1988-02-02'),
                                                               ('Niki', 'Giannouli', '1986-12-15');


CREATE TABLE IF NOT EXISTS trainers(
id INT NOT NULL auto_increment,
firstName VARCHAR(45) NOT NULL,
lastName VARCHAR(45) NOT NULL,
subject VARCHAR(45),
CONSTRAINT pk PRIMARY KEY(id)
);

INSERT INTO trainers (firstName, lastName, subject) VALUES ('Dimitris', 'Ioannou', 'C++'),
                                                           ('Maria', 'Vasilakopoulou', 'Javascript'),
														   ('Giorgos', 'Dimitrakopoulos', 'Java'),
                                                           ('Zoi', 'Anesti', 'Python'),
                                                           ('Maria', 'Papanikolaou', 'SQL'),
														   ('Nikos', 'Andreatos', 'C++'),
                                                           ('Aggeliki', 'Mandra', 'Javascript'),
                                                           ('Spiros', 'Palamaras', 'Python');


CREATE TABLE IF NOT EXISTS courses(
id INT NOT NULL auto_increment,
title VARCHAR(45),
stream VARCHAR(45),
type VARCHAR(45),
startDate date,
endDate date,
CONSTRAINT pk PRIMARY KEY(id)
);

INSERT INTO courses (title, stream, type, startDate, endDate) VALUES ('Coding Bootcamp 1', 'C++', 'Full-Time', '2021-10-11', '2022-01-11'),
                                                                     ('Coding Bootcamp 2', 'C++', 'Part-Time', '2021-10-18', '2022-04-24'),
                                                                     ('Coding Bootcamp 3', 'Java', 'Full-Time', '2021-10-11', '2022-01-11'),
                                                                     ('Coding Bootcamp 4', 'Java', 'Part-Time', '2021-10-18', '2022-04-24'),
                                                                     ('Coding Bootcamp 5', 'Python', 'Full-Time', '2021-10-11', '2022-01-11'),
                                                                     ('Coding Bootcamp 6', 'Python', 'Part-Time', '2021-10-18', '2022-04-24'),
                                                                     ('Coding Bootcamp 7', 'Javascript', 'Full-Time', '2021-10-11', '2022-01-11'),
                                                                     ('Coding Bootcamp 8', 'Javascript', 'Part-Time', '2021-10-18', '2022-04-24');


CREATE TABLE IF NOT EXISTS assignments(
id INT NOT NULL auto_increment,
title VARCHAR(45),
description VARCHAR(300),
subDateTime TIMESTAMP,
CONSTRAINT pk PRIMARY KEY(id)
);


INSERT INTO assignments (title, description, subDateTime) VALUES ('C++ Console App 1', 'In this assignment you need to create a console app in C++', '2021-11-29 23:59:59'),
                                                                 ('C++ Console App 2', 'In this assignment you need to create another console app in C++', '2021-12-03 23:59:59'),
															     ('Java Console App 1', 'In this assignment you need to create a console app in Java', '2021-11-29 23:59:59'),
                                                                 ('Java Console App 2', 'In this assignment you need to create another console app in Java', '2021-12-03 23:59:59'),
                                                                 ('Website 1', 'In this assignment you need to create a website using HTML, CSS and Javascript', '2021-12-12 23:59:59'),
                                                                 ('Website 2', 'In this assignment you need to create another website using HTML, CSS and Javascript', '2021-12-12 23:59:59'),
                                                                 ('Python Console App 1', 'In this assignment you need to create a console app in Python', '2021-01-05 23:59:59'),
																 ('Python Console App 2', 'In this assignment you need to create another console app in Python', '2021-01-05 23:59:59'),
                                                                 ('SQL Assignment', 'In this assignment you need to create a database and make queries to it', '2021-01-10 23:59:59');


CREATE TABLE IF NOT EXISTS studentsPerCourse(
stID INT NOT NULL,
cID INT NOT NULL,
enrollmentDate date,
tuitionFees int,
CONSTRAINT pk PRIMARY KEY(stID,cID),
CONSTRAINT fk_stID FOREIGN KEY(stID) REFERENCES students(id),
CONSTRAINT fk_cID FOREIGN KEY(cID) REFERENCES courses(id)
);

INSERT INTO studentsPerCourse VALUES (1, 1, '2021-09-30', 2500),
                                     (1, 3, '2021-09-25', 2100),
                                     (2, 2, '2021-10-01', 2500),
                                     (3, 4, '2021-10-05', 2000),
                                     (4, 5, '2021-09-15', 2100),
                                     (5, 6, '2021-10-04', 2000),
                                     (6, 7, '2021-09-22', 2000),
                                     (6, 4, '2021-10-01', 2500),
                                     (7, 8, '2021-09-10', 2100),
                                     (8, 1, '2021-10-02', 2500),
                                     (8, 6, '2021-09-29', 2000),
                                     (9, 2, '2021-10-01', 2500),
                                     (10, 3, '2021-09-05', 2000),
                                     (11, 4, '2021-09-22', 2500),
                                     (12, 5, '2021-10-03', 2100),
                                     (12, 8, '2021-09-10', 2000),
                                     (13, 1, '2021-10-07', 2100),
                                     (14, 2, '2021-09-08', 2500),
                                     (15, 3, '2021-10-08', 2100),
                                     (16, 4, '2021-09-20', 2000),
                                     (17, 8, '2021-10-30', 2500),
                                     (18, 6, '2021-09-22', 2100),
                                     (19, 7, '2021-10-01', 2000),
                                     (20, 5, '2021-09-05', 2500);
									
                                  
CREATE TABLE IF NOT EXISTS trainersPerCourse(
trID INT NOT NULL,
cID INT NOT NULL,
CONSTRAINT pk PRIMARY KEY(trID,cID),
CONSTRAINT fk_trID FOREIGN KEY(trID) REFERENCES trainers(id),
CONSTRAINT fk_courseID FOREIGN KEY(cID) REFERENCES courses(id)
);



INSERT INTO trainersPerCourse VALUES (1, 1),
									 (2, 7),
                                     (3, 3),
                                     (4, 5),
                                     (5, 1),
                                     (5, 2),
                                     (5, 3),
                                     (5, 4),
                                     (5, 5),
                                     (5, 6),
                                     (5, 7),
                                     (5, 8),
                                     (6, 2),
                                     (7, 8),
                                     (8, 6);
                                     
                                     
							


CREATE TABLE IF NOT EXISTS assignmentsPerCourse(
cID INT NOT NULL,
asID INT NOT NULL,
CONSTRAINT pk PRIMARY KEY(cID,asID),
FOREIGN KEY(cID) REFERENCES courses(id),
FOREIGN KEY(asID) REFERENCES assignments(id)
);                

INSERT INTO assignmentsPerCourse VALUES (1, 1),
										(1, 2),
                                        (1, 9),
                                        (2, 1),
                                        (2, 2),
                                        (2, 9),
                                        (3, 3),
                                        (3, 4),
                                        (3, 9),
                                        (4, 3),
                                        (4, 4),
                                        (4, 9),
                                        (5, 7),
                                        (5, 8),
                                        (5, 9),
                                        (6, 7),
                                        (6, 8),
                                        (6, 9),
                                        (7, 5),
                                        (7, 6),
                                        (7, 9),
                                        (8, 5),
                                        (8, 6),
                                        (8, 9);
                                        


CREATE TABLE IF NOT EXISTS assignmentsPerCoursePerStudent(
stID INT NOT NULL,
cID INT NOT NULL,
asID INT NOT NULL,
oralMark INT,
totalMark INT,
CONSTRAINT pk PRIMARY KEY(stID,cID,asID),
FOREIGN KEY(stID) REFERENCES students(id),
FOREIGN KEY(cID) REFERENCES courses(id),
FOREIGN KEY(asID) REFERENCES assignments(id)
);

INSERT INTO assignmentsPerCoursePerStudent VALUES (1, 1, 1, 28, 70),
												  (1, 1, 2, 40, 85),
                                                  (1, 1, 9, 42, 92),
                                                  (1, 3, 3, 30, 65),
                                                  (1, 3, 4, 45, 95),
                                                  (1, 3, 9, 37, 68),
                                                  (2, 2, 1, 48, 96),
                                                  (2, 2, 2, 40, 78),
                                                  (2, 2, 9, 35, 80),
                                                  (3, 4, 3, 25, 58),
                                                  (3, 4, 4, 39, 82),
                                                  (3, 4, 9, 39, 86),
                                                  (4, 5, 7, 40, 74),
                                                  (4, 5, 8, 30, 70),
                                                  (4, 5, 9, 35, 68),
                                                  (5, 6, 7, 40, 88),
                                                  (5, 6, 8, 48, 97),
                                                  (5, 6, 9, 20, 55),
                                                  (6, 7, 5, 41, 81),
                                                  (6, 7, 6, 28, 66),
                                                  (6, 7, 9, 45, 90),
                                                  (6, 4, 3, 35, 80),
                                                  (6, 4, 4, 30, 75),
                                                  (6, 4, 9, 40, 73),
                                                  (7, 8, 5, 31, 72),
                                                  (7, 8, 6, 47, 96),
                                                  (7, 8, 9, 38, 84),
                                                  (8, 1, 1, 35, 71),
                                                  (8, 1, 2, 40, 79),
                                                  (8, 1, 9, 25, 60),
                                                  (8, 6, 7, 37, 66),
                                                  (8, 6, 8, 44, 88),        
                                                  (8, 6, 9, 47, 92),
                                                  (9, 2, 1, 41, 85),
                                                  (9, 2, 2, 38, 76),
                                                  (9, 2, 9, 32, 69),
                                                  (10, 3, 3, 48, 97),
                                                  (10, 3, 4, 37, 80),
                                                  (10, 3, 9, 42, 87),
                                                  (11, 4, 3, 39, 78),
                                                  (11, 4, 4, 40, 72),
                                                  (11, 4, 9, 48, 95),
                                                  (12, 5, 7, 31, 66),
                                                  (12, 5, 8, 38, 78),
                                                  (12, 5, 9, 29, 62),
                                                  (12, 8, 5, 45, 82),
                                                  (12, 8, 6, 40, 90),
                                                  (12, 8, 9, 42, 92),
                                                  (13, 1, 1, 25, 68),
                                                  (13, 1, 2, 43, 85),
                                                  (13, 1, 9, 41, 83),
                                                  (14, 2, 1, 35, 78),
                                                  (14, 2, 2, 38, 81),
                                                  (14, 2, 9, 32, 75),
                                                  (15, 3, 3, 38, 80),
                                                  (15, 3, 4, 42, 86),
                                                  (15, 3, 9, 34, 77),
                                                  (16, 4, 3, 48, 95),
                                                  (16, 4, 4, 36, 86),
                                                  (16, 4, 9, 39, 84),
                                                  (17, 8, 5, 40, 90),
                                                  (17, 8, 6, 42, 83),
                                                  (17, 8, 9, 29, 60),
                                                  (18, 6, 7, 38, 82),
                                                  (18, 6, 8, 30, 77),
                                                  (18, 6, 9, 38, 87),
                                                  (19, 7, 5, 30, 73),
                                                  (19, 7, 6, 49, 98),
                                                  (19, 7, 9, 39, 79),
                                                  (20, 5, 7, 32, 72),
                                                  (20, 5, 8, 38, 88),
                                                  (20, 5, 9, 45, 90);
												

-- SQL query that outputs all the students
SELECT * FROM students;


-- SQL query that outputs all the trainers
SELECT * FROM trainers;

-- SQL query that outputs all the assignments
SELECT * FROM assignments;


-- SQL query that outputs all the courses
SELECT * FROM courses;


-- SQL query that outputs all the students per course
SELECT s.firstName AS Student_firstName, s.lastName Student_lastName, c.title AS Course_title
FROM students AS s
INNER JOIN studentsPerCourse AS spc
ON s.id = spc.stID
INNER JOIN courses AS c
ON c.id = spc.cID;

-- SQL query that outputs all the trainers per course
SELECT t.firstName AS Trainer_firstName, t.lastName AS Trainer_lastName, c.title AS Course_title
FROM trainers AS t
INNER JOIN trainersPerCourse AS tpc
ON t.id = tpc.trID
INNER JOIN courses AS c
ON c.id = tpc.cID;

-- SQL query that outputs all the assignments per course
SELECT c.title AS Course_title,  a.title AS Assignment_title
FROM assignments AS a
INNER JOIN assignmentsPerCourse AS apc
ON a.id = apc.asID
INNER JOIN courses AS c
ON c.id = apc.cID;

-- SQL query that outputs all the assignments per course per student
SELECT s.firstName AS Student_firstName, s.lastName AS Student_lastName, c.title AS Course_title, a.title AS Assignment_title
FROM students AS s
INNER JOIN assignmentsPerCoursePerStudent AS apcps
ON s.id = apcps.stID
INNER JOIN assignments AS a
ON a.id = apcps.asID
INNER JOIN courses AS c
ON c.id = apcps.cID;

-- SQL query that outputs a list of students that belong to more than one courses
SELECT s.firstName, s.lastName
FROM students AS s, studentsPerCourse AS spc, courses AS c
WHERE s.id = spc.stID AND c.id = spc.cID
GROUP BY s.id
HAVING (COUNT(spc.cID) > 1)
ORDER BY s.id;
























