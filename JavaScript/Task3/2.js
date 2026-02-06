function checkStudents(students) {
    return students.map(function(student) {
        if (student.score >= 50) {
            student.passed = true;
        } else {
            student.passed = false;
        }
        return student;
    });
}

let studentsData = [
    { name: "Ahmed", score: 80 },
    { name: "Sara", score: 40 }
];
console.log(checkStudents(studentsData));