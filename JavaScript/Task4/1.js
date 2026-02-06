let students = [];

function addStudent() {
    let name = document.getElementById("stdName").value;  
    let age = document.getElementById("stdAge").value;
    let grade = document.getElementById("stdGrade").value;

    let studentObj = { name: name, age: age, grade: grade };  
    students.push(studentObj);  

    renderStudents();
}

function renderStudents() {
    let ul = document.getElementById("stdUl");
    ul.innerHTML = "";  

    for (let i = 0; i < students.length; i++) {
        let li = document.createElement("li");  
        li.innerHTML = "Name: " + students[i].name + " | Age: " + students[i].age + " | Grade: " + students[i].grade;
        
        let btn = document.createElement("button");
        btn.innerHTML = "Delete";
        btn.onclick = function() {
            students.splice(i, 1);  
            renderStudents();
        };
        
        li.appendChild(btn);  
        ul.appendChild(li);  
    }
}