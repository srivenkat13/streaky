const submit = document.getElementById("submit");
const clear = document.getElementById("clear");
const inputValue = document.getElementById("input");
const displayStreak = document.getElementById("streak-count");
const headingCount = document.getElementById("heading-count");
const taskDetails = document.getElementById("task-details");
const itemsFromLocalStorage = JSON.parse(localStorage.getItem("task"));

let allTasks = [];

if (itemsFromLocalStorage) {
  allTasks = itemsFromLocalStorage;
  renderTasks(allTasks);
  renderStreak(allTasks);
}
submit.addEventListener("click", saveTask);
clear.addEventListener("click", clearStorage);

function saveTask() {
  if (inputValue.value != "") {
    allTasks.push(inputValue.value);
    localStorage.setItem("task", JSON.stringify(allTasks));
    inputValue.value = "";
    renderStreak(allTasks);
    renderTasks(allTasks);
  } else {
    alert("Enter a Task !!");
  }
}

function clearStorage() {
  if (confirm("REMOVE ALL Streak?")) {
    localStorage.clear();
    location.reload();
  }
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
