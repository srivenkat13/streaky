/* for PWA implementation */
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("sw.js")
    .then((registration) => {
      console.log("SW Registered !!");
      console.log(registration);
    })
    .catch((error) => {
      console.log("SW Registration Failed !!!");
      console.log(error);
    });
}

/* Buttons */
const submit = document.getElementById("submit");
const clear = document.getElementById("clear");
const edit = document.getElementById("edit");

const inputValue = document.getElementById("input");
const displayStreak = document.getElementById("streak-count");
const headingCount = document.getElementById("heading-count");
const taskDetails = document.getElementById("task-details");
let itemsFrmLclStrg = JSON.parse(localStorage.getItem("task"));

let allTasks = [];
let lastTask = "";

if (itemsFrmLclStrg) {
  allTasks = itemsFrmLclStrg;
  renderTasks(allTasks);
  renderStreak(allTasks);
}
submit.addEventListener("click", saveTask);
clear.addEventListener("click", clearStorage);
edit.addEventListener("click", editLast);

function saveTask() {
  if (inputValue.value != "") {
    allTasks.push(inputValue.value);
    lastTask = inputValue.value;
    localStorage.setItem("task", JSON.stringify(allTasks));
    localStorage.setItem("last-task", JSON.stringify(lastTask));
    inputValue.value = "";
    inputValue.setAttribute("placeholder", "Enter the task done");
    renderStreak(allTasks);
    renderTasks(allTasks);
  } else {
    alert("Enter a Task !!");
  }
}

function clearStorage() {
  if (confirm("REMOVE All Streaks? 🤔")) {
    localStorage.removeItem("task");
    location.reload();
  }
}

function editLast() {
  inputValue.value = JSON.parse(localStorage.getItem("last-task"));
  inputValue.setAttribute("placeholder", "Edit the previous task");
  console.log(inputValue.value);
  allTasks.pop();
}

function renderStreak(arr) {
  let string = "";
  for (let i = 0; i < arr.length; i++) {
    string += "🔥";
  }
  headingCount.textContent = arr.length;
  displayStreak.textContent = string;
}

function renderTasks(arr) {
  let listItems = "";

  for (let i = 0; i < arr.length; i++) {
    listItems += `
        <li>${arr[i].charAt(0).toUpperCase() + arr[i].slice(1)}.</li>`;
  }
  taskDetails.innerHTML = listItems;
}
