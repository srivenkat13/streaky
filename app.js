const submit = document.getElementById("submit");
const inputVal = document.getElementById("input");
const displayStreak = document.getElementById("streak-count");
const headingCount = document.getElementById("heading-count");
const taskDetails = document.getElementById("task-details");

let allTasks = [];
let streak = "";

submit.addEventListener("click", saveTask);

function saveTask() {
  if (inputVal.value != "") {
    let currentTask = inputVal.value;
    allTasks.push(currentTask);
    inputVal.value = "";
    renderStreak();
    renderTasks();
  } else {
    alert("Enter a Task !!");
  }
}

function renderStreak() {
  headingCount.textContent = allTasks.length;
  streak += "🔥";
  displayStreak.textContent = streak;
}

function renderTasks() {
  let listItems = "";

  for (let i = 0; i < allTasks.length; i++) {
    listItems += `
        <li> ${
          allTasks[i].charAt(0).toUpperCase() + allTasks[i].slice(1)
        }.</li>`;
  }
  taskDetails.innerHTML = listItems;
}
