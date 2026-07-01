const taskCounter = document.getElementById("taskCounter");
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

function updateCounter() {

    const remainingTasks = document.querySelectorAll("#taskList li:not(.completed)").length;

    taskCounter.textContent = `Tasks Remaining: ${remainingTasks}`;

}

function saveTasks() {

    localStorage.setItem("tasks", taskList.innerHTML);

}

function loadTasks() {

    const savedTasks = localStorage.getItem("tasks");

    if (savedTasks) {

        taskList.innerHTML = savedTasks;

    }

    updateCounter();

}

function createTask(taskText, isCompleted = false) {

    const li = document.createElement("li");

    li.textContent = taskText;

    if (isCompleted) {
    li.classList.add("completed");
    }

    li.addEventListener("click", function () {

    li.classList.toggle("completed");

    updateCounter();

    saveTasks();

    });

    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function (event) {

    event.stopPropagation();

    li.remove();

    updateCounter();

    saveTasks();

    });

    li.appendChild(deleteBtn);

    taskList.appendChild(li);

}

function addTask() {

    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    createTask(taskInput.value);

    taskInput.value = "";

    updateCounter();

    saveTasks();
}


addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function(event){

    if(event.key === "Enter"){
        addTask();
    }

});

loadTasks();