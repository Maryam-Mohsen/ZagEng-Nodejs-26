CREATE DATABASE IF NOT EXISTS school;
USE school;

CREATE TABLE students (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    major VARCHAR(50),
    enrollment_year INT,
    gpa DECIMAL(3, 2)
);
INSERT INTO students (id, name, major, enrollment_year, gpa) VALUES
(1, 'Alice', 'Computer Science', 2023, 3.8),
(2, 'Bob', 'Mathematics', 2023, 3.5),
(3, 'Charlie', 'Physics', 2023, 3.9),
(4, 'David', 'Computer Science', 2022, 3.6),
(5, 'Eve', 'Mathematics', 2022, 3.7);

SELECT DISTINCT major FROM students;

SELECT major, COUNT(*) AS total_students 
FROM students 
GROUP BY major;

SELECT major, AVG(gpa) AS average_gpa 
FROM students
GROUP BY major;

SELECT major, COUNT(*), AVG(gpa)
FROM students
WHERE enrollment_year = 2023
GROUP BY major;

SELECT major, AVG(gpa)
FROM students 
GROUP BY major
HAVING AVG(gpa) > 3.0;

SELECT major, AVG(gpa)
FROM students
GROUP BY major
ORDER BY AVG(gpa) DESC;

SELECT major, AVG(gpa)
FROM students 
GROUP BY major
ORDER BY AVG(gpa) DESC
LIMIT 2;

DROP DATABASE school;
SHOW DATABASES;