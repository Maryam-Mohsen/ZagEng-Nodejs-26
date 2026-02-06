function addTask() {
    let input = document.getElementById("taskInput");
    let ul = document.getElementById("todoUl");

    if (input.value !== "") {
        let li = document.createElement("li");
        
        let checkBtn = document.createElement("input");
        checkBtn.type = "checkbox";  

        let taskText = document.createTextNode(" " + input.value);

        checkBtn.onclick = function() {
            if (this.checked) { 
                
                setTimeout(() => {
                    li.remove(); 
                }, 500);
            }
        };

        li.appendChild(checkBtn);
        li.appendChild(taskText);
        
        ul.appendChild(li);
        input.value = ""; 
    }
}