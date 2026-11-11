const input = document.querySelector("#taskInput");
const button = document.querySelector("#addBtn");
const taskList = document.querySelector("#taskList");

button.addEventListener("click", function () {
    const task = input.value;
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const Delete = document.createElement('button');
    Delete.textContent = "Delete"
    

    
    const li = document.createElement("li");
    li.textContent = task;
    li.appendChild(checkbox);  
    li.appendChild(Delete)            
    taskList.appendChild(li);

    Delete.addEventListener('click', () =>{
        li.remove()
        
    })

    input.value = "";
});