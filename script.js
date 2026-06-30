
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");


function addTask() {

    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");

    li.textContent = taskInput.value;

    taskList.appendChild(li);

    taskInput.value = "";
}


addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function(event){

    if(event.key === "Enter"){
        addTask();
    }

});