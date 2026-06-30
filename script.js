

const taskInput = document.getElementById("taskInput");

const addBtn = document.getElementById("addBtn");

const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function () {

    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");

    li.textContent = taskInput.value;

    taskList.appendChild(li);

    taskInput.value = "";

});