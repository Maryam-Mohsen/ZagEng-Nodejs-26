const express = require('express');
const app = express();

app.use(express.json());

let students = [
    { id: 1, name: "Maryam", age: 21, department: "Computer Science" },
    { id: 2, name: "Mayar", age: 20, department: "Information Systems" },
    { id: 1, name: "Mawada", age: 19, department: "software engineering" },
    { id: 2, name: "Mohamed", age: 22, department: "cybersecurity" }
];

const logger = (req, res, next) => {
    console.log(`${req.method} request for ${req.url}`);
    next();
};

app.use(logger);

app.get('/', (req, res) => {
    res.send("Welcome to Student Management API");
});

// Task 1: Get All Students
app.get('/students', (req, res) => {
    res.status(200).json(students);
});

// Task 3: Search Students by Department
app.get('/students/search', (req, res) => {
    const dept = req.query.department;
    const filteredStudents = students.filter(s => s.department === dept);
    res.json(filteredStudents);
});

// Task 2: Get Student by ID
app.get('/students/:id', (req, res) => {
    const studentId = parseInt(req.params.id);
    const student = students.find(s => s.id === studentId);
    
    if (!student) {
        return res.status(404).json({ "error": "Student not found" });
    }
    res.json({ "student": student });
});

// Task 4: Add New Student
app.post('/students', (req, res) => {
    const { name, age, department } = req.body;


    if (!name || !department || age <= 15) {
        return res.status(400).json({ "error": "Validation failed" });
    }

    const newStudent = {
        id: students.length + 1,
        name,
        age,
        department
    };

    students.push(newStudent);
    res.status(201).json({
        "message": "Student created successfully",
        "student": newStudent
    });
});

// Task 5: Update Student
app.put('/students/:id', (req, res) => {
    const student = students.find(s => s.id === parseInt(req.params.id));
    
    if (!student) {
        return res.status(404).json({ "error": "Student not found" });
    }

    const { name, age, department } = req.body;
    
    if (name) student.name = name;
    if (age) student.age = age;
    if (department) student.department = department;

    res.json({ "message": "Student updated successfully" });
});

// Task 6: Delete Student
app.delete('/students/:id', (req, res) => {
    const index = students.findIndex(s => s.id === parseInt(req.params.id));
    
    if (index === -1) {
        return res.status(404).json({ "error": "Student not found" });
    }

    students.splice(index, 1);
    res.json({ "message": "Student deleted successfully" });
});


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});