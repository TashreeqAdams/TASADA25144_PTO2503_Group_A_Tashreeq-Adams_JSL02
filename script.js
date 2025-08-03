// First Task

// Task 1 Title Loop
let taskTitle = "";
while (!taskTitle) {
  taskTitle = prompt("Enter Task 1 title:");
}

// Task 1 Desription Loop
let taskDescription = "";
while (!taskDescription) {
  taskDescription = prompt("Enter Task 1 description:");
}

// Task 1 Status Loop
while (true) {
  taskStatus = prompt("Enter Task 1 Status (todo, doing, done):");

  //Lowercase conversion and stored in new variable
  let statusLower = taskStatus?.toLowerCase();

  // Loop conditions
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

// Task 2 Title Loop
let taskTitle2 = "";
while (!taskTitle2) {
  taskTitle2 = prompt("Enter Task 2 title:");
}

//Task 2 Description Loop
let taskDescription2 = "";
while (!taskDescription2) {
  taskDescription2 = prompt("Enter Task 2 description:");
}

// Task 2 Status Loop
while (true) {
  taskStatus2 = prompt("Enter Task 2 Status (todo, doing, done):");

  //Lowercase conversion and stored in new variable
  let statusLower = taskStatus2?.toLowerCase();

  //Loop conditions
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
