CREATE DATABASE Ecom_DB;
USE Ecom_DB;

CREATE TABLE Products (
    product_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    category VARCHAR(50),
    stock_quantity INT NOT NULL CHECK (stock_quantity >= 0)
);

CREATE TABLE Orders (
    order_id INT PRIMARY KEY AUTO_INCREMENT,
    order_date DATE NOT NULL,
    status ENUM('Shipped', 'Pending') NOT NULL
);

CREATE TABLE Order_Items (
    order_id INT,
    product_id INT,
    quantity INT NOT NULL,
    unit_price DECIMAL(10,2) NOT NULL,
    PRIMARY KEY (order_id, product_id),
    FOREIGN KEY (order_id) REFERENCES Orders(order_id),
    FOREIGN KEY (product_id) REFERENCES Products(product_id)
);

ALTER TABLE Products ADD COLUMN discount DECIMAL(5,2);

INSERT INTO Products (name, category, stock_quantity) VALUES ('Laptop', 'Electronics', 10), ('Mouse', 'Electronics', 50);
INSERT INTO Orders (order_date, status) VALUES ('2023-10-01', 'Shipped'), ('2023-10-02', 'Pending');
INSERT INTO Order_Items VALUES (1, 1, 1, 1000.00), (1, 2, 2, 25.00), (2, 2, 1, 25.00);

SELECT order_id, SUM(quantity * unit_price) AS total_revenue
FROM Order_Items
GROUP BY order_id;