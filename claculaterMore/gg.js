// const root = document.getElementById("root");

// const header = document.createElement("div");
// header.setAttribute("class", "header");
// root.appendChild(header);

// let levelC = 0;
// const level = document.createElement("p");
// level.innerText = "Level ";
// header.appendChild(level);

// const startBtn = document.createElement("button");
// startBtn.innerText = "start";
// header.appendChild(startBtn);

// startBtn.addEventListener("click", startGame);

// function startGame() {
//   const boxes = document.createElement("div");
//   boxes.setAttribute("class", "boxes");
//   boxes.innerHTML = "";
//   let red = Math.floor(Math.random() * 205) + 50;
//   let blue = Math.floor(Math.random() * 255);
//   let green = Math.floor(Math.random() * 255);
//   let rand = Math.floor(Math.random() * 8);

//   for (let i = 0; i < 9; i++) {
//     const box = document.createElement("div");
//     box.setAttribute("class", "box");

//     if (i == rand) {
//       box.style.backgroundColor = `rgb( ${red - 50},${green},${blue})`;
//     } else {
//       box.style.backgroundColor = `rgb( ${red},${green},${blue})`;
//     }
//     boxes.appendChild(box);
//   }

//   root.appendChild(boxes);
// }

// const root = document.getElementById("root");

// const header = document.createElement("div");
// header.setAttribute("class", "header");
// root.appendChild(header);

// let levelC = 0;
// const level = document.createElement("p");
// level.innerText = "Level ";
// header.appendChild(level);

// let scoreR = 0;
// const score =document

// const startBtn = document.createElement("button");
// startBtn.setAttribute("class", "startBtn");
// startBtn.innerText = "start";
// header.appendChild(startBtn);

// startBtn.addEventListener("click", startGame);

// const boxes = document.createElement("div");
// boxes.setAttribute("class", "boxes");

// function startGame() {
//   boxes.innerHTML = "";
//   let red = Math.floor(Math.random() * 205) + 50;
//   let blue = Math.floor(Math.random() * 255);
//   let green = Math.floor(Math.random() * 255);
//   let rand = Math.floor(Math.random() * 8);

//   for (let i = 0; i < 9; i++) {
//     const box = document.createElement("div");
//     box.setAttribute("class", "box");
//     boxes.appendChild(box);
//     if (i == rand) {
//       box.style.backgroundColor = `rgb( ${red - 50},${green},${blue})`;
// box.addEventListener("click", startGame);
//     } else {
//       box.style.backgroundColor = `rgb( ${red},${green},${blue})`;
//     }
//   }
// root.appendChild(boxes);

function addBoxes() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const randomColor = `rgb(${red}, ${green}, ${blue})`;
  const random = Math.floor(Math.random() * 8);

  for (i = 0; i < 9; i++) {
    let box = document.createElement("div");
    box.setAttribute("class", "box");
    box.setAttribute("id", i);
    if (i == random) {
      box.style.backgroundColor = `rgb(${red - 50}, ${green}, ${blue})`;
    } else {
      box.style.backgroundColor = randomColor;
    }
    boxes.appendChild(box);
  }
}
