const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const addTask = document.getElementById("addTask");
const completedTask = document.getElementById("completedTasks");
const totalTask = document.getElementById("totalTasks");

// ფუნქცია, რომელიც განაახლებს სტატისტიკას
const Update = function () {
  completedTask.textContent = completed;
  totalTask.textContent = total;
};

// სტატისტიკის საწყისი მნიშვნელობები
let completed = 0;
let total = 0;

// დავალების დამატების ფუნქცია
addTask.addEventListener("click", function () {
  // ამოღება შეყვანილი ტექსტის და მისი ცარიელი სივრცის მოცილება
  const taskText = taskInput.value.trim();
  if (taskText === " ") return; // არ დაამატოს ცარიელი დავალებები

  // დავალების რაოდენობის გაზრდა
  total+=1;
  // დავალების კონტეინერის შექმნა
  const task = document.createElement("div");
  task.className = "task";

  // span-ის შექმნა, რომელიც შეინახავს დავალების ტექსტს
  const taskTextSpan = document.createElement("span");
  taskTextSpan.textContent = taskText;

  // "Complete" ღილაკის შექმნა
  const completeButton = document.createElement("button");
  completeButton.textContent = "Complete";
  completeButton.classList='completebtn';
  completeButton.addEventListener("click", function () {
    if (!task.classList.contains("completed")) {
      task.classList = 'completed';
      completed++;
      taskTextSpan.style.textDecoration = "line-through";
      taskTextSpan.style.color = "grey";
      completeButton.style.backgroundColor = "lightgreen";
      completeButton.style.color = "white";
    } else {
      task.classList.remove("completed");
      completed--;
      taskTextSpan.style.textDecoration = "none";
      taskTextSpan.style.color = "black";
      completeButton.style.backgroundColor = "";
      completeButton.style.color = "";
    }
    Update();
  });

  // "Delete" ღილაკის შექმნა
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList='delete-btn';
  deleteButton.addEventListener("click", function () {
    if (task.classList.contains("completed")) {
      completed--;
    }
    total--;
    taskList.removeChild(task);
    Update();
  });

  // დავალების ტექსტისა და ღილაკების კონტეინერში დამატება
  task.appendChild(taskTextSpan);
  task.appendChild(completeButton);
  task.appendChild(deleteButton);

  // დავალების დამატება სიაში
  taskList.appendChild(task);

  taskInput.value = "";

  Update();
});
