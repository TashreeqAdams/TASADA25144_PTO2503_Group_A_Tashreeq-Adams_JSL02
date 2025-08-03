// First Task
let taskTitle = "";
while (!taskTitle) {
  taskTitle = prompt("Enter Task 1 title:");
}

let taskDescription = "";
while (!taskDescription) {
  taskDescription = prompt("Enter Task 1 description:");
}

while (true) {
  taskStatus = prompt("Enter Task 1 Status (todo, doing, done):");

  const statusLower = taskStatus?.toLowerCase();

  if (statusLower === "done") {
    console.log("Task 1 status: done");
    break;
  } else if (statusLower === "todo" || statusLower === "doing") {
    console.log("No tasks completed, let's get to work!");
    break;
  } else {
    console.log("bad");
    alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
  }
}
