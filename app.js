const submit = document.getElementById("submit");
const inputVal = document.getElementById("input");
const displayStreak = document.getElementById("streak-count");
const headingCount = document.getElementById("heading-count");
const taskDetails = document.getElementById("task-details");
const itemsFromLocalStorage = JSON.parse(localStorage.getItem("task"))

let allTasks = [];
let streak = "";

if(itemsFromLocalStorage){
  allTasks = itemsFromLocalStorage;
  renderTasks(allTasks)
}
submit.addEventListener("click", saveTask);

function saveTask() {
  if (inputVal.value != "") {
    allTasks.push(inputVal.value);
    localStorage.setItem("task",JSON.stringify(allTasks))
    inputVal.value = "";
    renderStreak();
    renderTasks(allTasks);
  } else {
    alert("Enter a Task !!");
  }
}

function renderStreak() {
  headingCount.textContent = allTasks.length;
  streak += "🔥";
  displayStreak.textContent = streak;
}

function renderTasks(arr) {
  let listItems = "";

  for (let i = 0; i < arr.length; i++) {
    listItems += `
        <li> ${
          arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
        }.</li>`;
  }
  taskDetails.innerHTML = listItems;
}
