CREATE DATABASE Hospital_Ecom_DB;
USE Hospital_Ecom_DB;

CREATE TABLE Departments (
    dept_id INT PRIMARY KEY AUTO_INCREMENT,
    dept_name VARCHAR(100) NOT NULL,
    head_doctor_id INT NULL 
);

CREATE TABLE Doctors (
    doctor_id INT PRIMARY KEY AUTO_INCREMENT,
    doctor_name VARCHAR(100) NOT NULL,
    specialization VARCHAR(100),
    dept_id INT NOT NULL,
    FOREIGN KEY (dept_id) REFERENCES Departments(dept_id)
);

ALTER TABLE Departments ADD FOREIGN KEY (head_doctor_id) REFERENCES Doctors(doctor_id);

CREATE TABLE Patients (
    patient_id INT PRIMARY KEY AUTO_INCREMENT,
    patient_name VARCHAR(100) NOT NULL,
    date_of_birth DATE,
    phone_number VARCHAR(20)
);

CREATE TABLE Appointments (
    appointment_id INT PRIMARY KEY AUTO_INCREMENT,
    doctor_id INT NOT NULL,
    patient_id INT NOT NULL,
    appointment_date DATETIME NOT NULL,
    diagnosis TEXT,
    fee DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (doctor_id) REFERENCES Doctors(doctor_id),
    FOREIGN KEY (patient_id) REFERENCES Patients(patient_id)
);

INSERT INTO Departments (dept_name) VALUES ('Cardiology'), ('Neurology'), ('Pediatrics');

INSERT INTO Doctors (doctor_name, specialization, dept_id) 
VALUES ('Dr. Ahmed', 'Cardiologist', 1), ('Dr. Sara', 'Neurologist', 2), ('Dr. Khaled', 'Cardiologist', 1);

UPDATE Departments SET head_doctor_id = 1 WHERE dept_id = 1;

INSERT INTO Patients (patient_name, date_of_birth) VALUES ('John Doe', '1990-05-15'), ('Jane Smith', '1985-08-20');

INSERT INTO Appointments (doctor_id, patient_id, appointment_date, diagnosis, fee)
VALUES (1, 1, '2023-10-05 10:00:00', 'Chest Pain', 500.00),
    (1, 2, '2023-10-06 11:30:00', 'Arrhythmia', 450.00),
    (2, 1, '2023-10-07 09:00:00', 'Headache', 300.00);


SELECT d.dept_name, doc.doctor_name AS head_doctor
FROM Departments d
LEFT JOIN Doctors doc ON d.head_doctor_id = doc.doctor_id;

SELECT d.doctor_name, SUM(a.fee) AS total_doctor_revenue
FROM Doctors d
JOIN Appointments a ON d.doctor_id = a.doctor_id
GROUP BY d.doctor_id, d.doctor_name;

SELECT AVG(a.fee) AS avg_cardiology_fee
FROM Appointments a
JOIN Doctors d ON a.doctor_id = d.doctor_id
JOIN Departments dept ON d.dept_id = dept.dept_id
WHERE dept.dept_name = 'Cardiology';