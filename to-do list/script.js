const root = document.getElementById("root");

const header = document.createElement("div");
header.setAttribute("class", "header");
header.innerText = "To-Do List";
root.appendChild(header);

const conteiner = document.createElement("div");
conteiner.setAttribute("class", "conteiner");
root.appendChild(conteiner);

const input = document.createElement("div");

input.setAttribute("class", "input");
input.innerText = "Enter task here ... ";
conteiner.appendChild(input);

const AddTask = document.createElement("div");
AddTask.setAttribute("class", "button");
AddTask.innerText = "Add Task";
conteiner.appendChild(AddTask);

