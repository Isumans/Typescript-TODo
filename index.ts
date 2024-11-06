// const task:any= document.getElementById("addTask");
const taskInput: HTMLInputElement | null = document.getElementById("nTask") as HTMLInputElement;

let tasklist:string[]=[];

function addTask(taskList:any){
    let taskListElement:HTMLElement | null = document.getElementById("task-list");
    if (taskListElement) {
        taskListElement.innerHTML = ""; // Clear current list
        // let num:number=0;
        taskList.forEach((task:string,index:number) => {
            // Create a new list item for each task
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <span>${task}</span>
                <button onclick="editTask(${index})">Edit</button>
                <button onclick="deleteTask(${index})">Delete</button>
            `;
            // num++;
            taskListElement.appendChild(listItem);
        });
    }
}
function editTask(index:number){
    let edited:any=prompt("Change the task");
    tasklist[index]=edited;
    addTask(tasklist);
}
function deleteTask(index:number){
    tasklist.splice(index,1);
    addTask(tasklist);
}
function entered(){
    const taskValue: string | undefined = taskInput?.value.trim();

    // let taskValue:any=document.getElementById("nTask");
    // let value:string= taskValue.trim();
    if(taskValue){
        tasklist.push(taskValue);
        addTask(tasklist);
        taskInput!.value="";
    }
//     tasklist.push(value);
//     addTask(tasklist);
}

