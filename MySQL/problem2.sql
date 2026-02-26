USE school_db;

CREATE TABLE courses (
    id INT PRIMARY KEY AUTO_INCREMENT,
    course_name VARCHAR(255) NOT NULL, 
    instructor VARCHAR(255) NOT NULL, 
    hours INT CHECK (hours >= 10), 
    price DECIMAL(10,2) CHECK (price > 0), 
    level VARCHAR(50) DEFAULT 'Beginner', 
    start_date DATE
);

INSERT INTO courses (course_name, instructor, hours, price, level, start_date) VALUES
('Database Basics', 'Ahmed Tarek', 30, 1200, 'Beginner', '2024-02-01'),
('Web Development', 'Sara Ali', 45, 2000, 'Intermediate', '2024-03-10'),
('Algorithms', 'Mona Samir', 40, 1800, 'Advanced', '2024-04-05'),
('Networking', 'Omar Khaled', 35, 1500, 'Beginner', '2024-05-01');

SELECT * FROM courses;
SELECT course_name, instructor FROM courses;
SELECT * FROM courses WHERE price > 1500;
SELECT * FROM courses WHERE level = 'Beginner';
SELECT * FROM courses WHERE hours BETWEEN 30 AND 40; 
UPDATE courses SET price = 2000 WHERE course_name = 'Algorithms';
SELECT * FROM courses WHERE instructor LIKE '%a%';