CREATE DATABASE IF NOT EXISTS school_db;
USE school_db;

CREATE TABLE students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    age INT,
    class VARCHAR(50) NOT NULL,
    city VARCHAR(100) NOT NULL,
    grade INT CHECK (grade BETWEEN 0 AND 100), 
    gender CHAR(1) DEFAULT 'M',
    register_date DATE
);

INSERT INTO students (name, age, class, city, grade, gender, register_date) VALUES
('Ahmed Ali', 20, '1A', 'Cairo', 88, 'M', '2023-09-01'),
('Sara Hassan', 21, '2B', 'Giza', 92, 'F', '2023-09-03'),
('Omar Samir', 19, '1A', 'Cairo', 75, 'M', '2023-09-05'),
('Mona Adel', 22, '3C', 'Alex', 81, 'F', '2023-09-07'),
('Youssef Khaled', 23, '2B', 'Giza', 90, 'M', '2023-09-10');

SELECT * FROM students;
SELECT name, grade FROM students;
SELECT * FROM students WHERE age > 20; 
SELECT * FROM students WHERE class = '1A'; 
SELECT * FROM students WHERE grade > 85; 
UPDATE students SET grade = 95 WHERE name = 'Omar Samir'; 
SELECT * FROM students WHERE city = 'Cairo'; 

