// const task:any= document.getElementById("addTask");
var taskInput = document.getElementById("nTask");
var tasklist = [];
function addTask(taskList) {
    var taskListElement = document.getElementById("task-list");
    if (taskListElement) {
        taskListElement.innerHTML = ""; // Clear current list
        // let num:number=0;
        taskList.forEach(function (task, index) {
            // Create a new list item for each task
            var listItem = document.createElement("li");
            listItem.innerHTML = "\n                <span>".concat(task, "</span>\n                <button onclick=\"editTask(").concat(index, ")\">Edit</button>\n                <button onclick=\"deleteTask(").concat(index, ")\">Delete</button>\n            ");
            // num++;
            taskListElement.appendChild(listItem);
        });
    }
}
function editTask(index) {
    var edited = prompt("Change the task");
    tasklist[index] = edited;
    addTask(tasklist);
}
function deleteTask(index) {
    tasklist.splice(index, 1);
    addTask(tasklist);
}
function entered() {
    var taskValue = taskInput === null || taskInput === void 0 ? void 0 : taskInput.value.trim();
    // let taskValue:any=document.getElementById("nTask");
    // let value:string= taskValue.trim();
    if (taskValue) {
        tasklist.push(taskValue);
        addTask(tasklist);
        taskInput.value = "";
    }
    //     tasklist.push(value);
    //     addTask(tasklist);
}
