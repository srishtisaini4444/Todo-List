

const taskInput = document.getElementById("taskInput");

const addBtn = document.getElementById("addBtn");

const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function(){

    const li = document.createElement("li");
    console.log(li);

    li.textContent = taskInput.value;

    taskList.appendChild(li);

    });