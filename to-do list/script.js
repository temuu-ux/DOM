const root = document.getElementById("root");

const header = document.createElement("div");
header.setAttribute("class", "header");
header.innerText = "To-Do List";
root.appendChild(header);

const conteiner = document.createElement("div");
conteiner.setAttribute("class", "conteiner");
root.appendChild(conteiner);

// list
const list = document.createElement("div");
list.setAttribute("class", "list");
header.appendChild(list);

const input = document.createElement("input");
input.setAttribute("placeholder", "enter task here...");
input.setAttribute("id", "");
list.appendChild(input);

const AddTask = document.createElement("button");
AddTask.setAttribute("class", "button");
AddTask.innerText = "Add Task";
conteiner.appendChild(AddTask);

AddTask.addEventListener("click", add);

function add() {
  const task = document.createElement("div");
  task.innerText = input.value;
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";

  list.appendChild(task);
  task.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", deleted);

  function deleted() {
    task.remove();
  }
}
