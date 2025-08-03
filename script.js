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

  let statusLower = taskStatus?.toLowerCase();

  if (statusLower === "done") {
    console.log("Task 1 status: done");
    break;
  } else if (statusLower === "todo" || statusLower === "doing") {
    console.log("No tasks completed, let's get to work!");
    break;
  } else {
    alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
  }
}

// Second Task
let taskTitle2 = "";
while (!taskTitle2) {
  taskTitle2 = prompt("Enter Task 2 title:");
}

let taskDescription2 = "";
while (!taskDescription2) {
  taskDescription2 = prompt("Enter Task 2 description:");
}

while (true) {
  taskStatus2 = prompt("Enter Task 2 Status (todo, doing, done):");

  let statusLower = taskStatus2?.toLowerCase();

  if (statusLower === "done") {
    console.log("Task 2 status: done");
    break;
  } else if (statusLower === "todo" || statusLower === "doing") {
    console.log("No tasks completed, let's get to work!");
    break;
  } else {
    alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
  }
}
