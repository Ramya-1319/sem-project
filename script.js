// Selectors
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Event Listeners
addTaskBtn.addEventListener("click", addTask);
taskList.addEventListener("click", handleTaskAction);

// Functions
function addTask() {
    const taskText = taskInput.value;

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const taskItem = document.createElement("li");
    taskItem.innerHTML = <button class="deleteBtn">Delete</button>;
    
    taskList.appendChild(taskItem);
    taskInput.value = "";  // Clear the input field
} 

function handleTaskAction(e) {
    const target = e.target;

    // Delete task
    if (target.classList.contains("deleteBtn")) {
        const taskItem = target.parentElement;
        taskItem.remove();
    }

    // Mark task as completed
    if (target.tagName === "LI") {
        target.classList.toggle("completed");
    }
}