let students = [];

function addStudent() {
    let student = {
        name: document.getElementById("name").value,
        age: document.getElementById("age").value,
        grade: document.getElementById("grade").value
    };

    students.push(student);
    render();
}

function render() {
    let list = document.getElementById("studentList");
    list.innerHTML = "";
    students.forEach(s => {
        list.innerHTML += `<li>${s.name} - ${s.age} - ${s.grade}</li>`;
    });
}

function saveToJSON() {
    document.getElementById("jsonArea").value =
    JSON.stringify(students);
    students = [];  
    render();
}

function loadFromJSON() {
    students = JSON.parse(
    document.getElementById("jsonArea").value
    );
    render();
}
