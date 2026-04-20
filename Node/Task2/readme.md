const express = require('express');
const app = express();
const PORT = 3000;

// --- إعدادات أساسية ---

// استخدام express.json() لتحليل البيانات القادمة في طلبات الـ POST و PUT [cite: 4]
app.use(express.json());

// مصفوفة لتخزين البيانات مؤقتًا (بدول قاعدة بيانات) [cite: 9]
// البيانات الأولية كما هو مطلوب في الـ Scenario [cite: 12, 14, 15, 16, 17, 18]
let students = [
    { id: 1, name: "Tahany", age: 21, department: "Computer Science" },
    { id: 2, name: "Ali", age: 22, department: "Information Systems" }
];

// --- Task 0: Custom Middleware (Logger) ---
// يتم تشغيل هذا الـ Middleware مع كل طلب يصل للسيرفر [cite: 5]
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} request to ${req.url}`);
    next();
});

// --- Task 1: Get All Students ---
// مسار لجلب جميع الطلاب [cite: 21, 22, 23]
app.get('/students', (req, res) => {
    res.status(200).json(students); [cite: 6]
});

// --- Task 3: Search Students by Department ---
// ملاحظة: تم وضع مسار الـ search قبل المسار الذي يحتوي على :id لمنع التداخل [cite: 41, 42, 43]
app.get('/students/search', (req, res) => {
    const dept = req.query.department; // استخدام Query Parameters لجلب القسم
    const filteredStudents = students.filter(s => s.department === dept);
    res.json(filteredStudents); [cite: 44, 45]
});

// --- Task 2: Get Student by ID ---
// استخدام Route Parameters (:id) لجلب طالب معين [cite: 25, 26]
app.get('/students/:id', (req, res) => {
    const student = students.find(s => s.id === parseInt(req.params.id));
    
    if (!student) {
        // إذا لم يوجد الطالب، نرسل كود 404 [cite: 35, 36, 37, 40]
        return res.status(404).json({ "error": "Student not found" });
    }
    
    res.json({ "student": student }); [cite: 27, 28, 29, 31]
});

// --- Task 4: Add New Student (POST) ---
// مسار لإضافة طالب جديد مع التحقق من البيانات [cite: 46, 47, 48]
app.post('/students', (req, res) => {
    const { name, age, department } = req.body; [cite: 49, 50, 52, 53, 54]

    // قواعد التحقق (Validation Rules) [cite: 55, 56, 57, 58]
    if (!name || !department || age <= 15) {
        return res.status(400).json({ "error": "Validation failed" }); [cite: 59, 60, 61, 62, 65]
    }

    const newStudent = {
        id: students.length + 1,
        name,
        age,
        department
    };

    students.push(newStudent);
    res.status(201).json({ [cite: 72, 73]
        "message": "Student created successfully", [cite: 66, 67, 70]
        "student": newStudent [cite: 71]
    });
});

// --- Task 5: Update Student (PUT) ---
// تحديث بيانات طالب موجود بناءً على الـ ID [cite: 74, 75, 76]
app.put('/students/:id', (req, res) => {
    const student = students.find(s => s.id === parseInt(req.params.id));
    
    if (!student) {
        return res.status(404).json({ "error": "Student not found" }); [cite: 82, 83, 85]
    }

    const { name, age, department } = req.body;
    
    // تحديث الحقول إذا تم إرسالها في الطلب
    if (name) student.name = name;
    if (age) student.age = age;
    if (department) student.department = department;

    res.json({ "message": "Student updated successfully" }); [cite: 77, 78, 79, 80]
});

// --- Task 6: Delete Student (DELETE) ---
// حذف طالب من المصفوفة [cite: 86, 87, 88]
app.delete('/students/:id', (req, res) => {
    const index = students.findIndex(s => s.id === parseInt(req.params.id));
    
    if (index === -1) {
        return res.status(404).json({ "error": "Student not found" });
    }

    students.splice(index, 1);
    res.json({ "message": "Student deleted successfully" }); [cite: 89, 90, 91]
});

// --- تشغيل السيرفر ---
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});