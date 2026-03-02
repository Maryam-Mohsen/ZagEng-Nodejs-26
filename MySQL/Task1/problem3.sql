USE school_db;

CREATE TABLE books (
    id INT PRIMARY KEY AUTO_INCREMENT, 
    book_name VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL, 
    pages INT CHECK (pages >= 50),
    category VARCHAR(100) DEFAULT 'General', 
    price DECIMAL(10,2) CHECK (price > 0), 
    publish_date DATE
);

INSERT INTO books (book_name, author, pages, category, price, publish_date) VALUES
('Clean Code', 'Robert Martin', 450, 'Programming', 500, '2008-08-01'),
('Atomic Habits', 'James Clear', 320, 'Self Development', 350, '2018-10-16'),
('Deep Work', 'Cal Newport', 300, 'Productivity', 300, '2016-01-05'),
('Design Patterns', 'GoF', 395, 'Programming', 600, '1994-10-21');

SELECT * FROM books;
SELECT book_name, author FROM books; 
SELECT * FROM books WHERE price < 400; 
SELECT * FROM books WHERE category = 'Programming';
SELECT * FROM books WHERE pages BETWEEN 300 AND 500;
UPDATE books SET price = 400 WHERE book_name = 'Deep Work'; 
SELECT * FROM books WHERE book_name LIKE '%o%';