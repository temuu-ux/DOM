const root = document.getElementById("root");

const header = document.createElement("div");
header.setAttribute("class", "header");
header.innerText = "To-Do List";
root.appendChild(header);

const conteiner = document.createElement("div");
conteiner.setAttribute("class", "conteiner");
root.appendChild(conteiner);

const input = document.createElement("input");

// input.setAttribute("class", "input");
input.setAttribute = "placeholder ,Enter task here ...";
conteiner.appendChild(input);

const AddTask = document.createElement("button");
AddTask.setAttribute("class", "button");
AddTask.innerText = "Add Task";
conteiner.appendChild(AddTask);

// AddTask.addEventListener("click", add);

// function add() {
//   const findS = document.createElement("input");
//   findS.innerText = "inputG";
//   root.appendChild(findS);
// }
