const root = document.getElementById("root");

const header = document.createElement("div");
header.setAttribute("class", "header");
root.appendChild(header);

let levelC = 0;
const level = document.createElement("p");
level.innerText = "level " + levelC;
header.appendChild(level);

const startBtn = document.createElement("button");
startBtn.setAttribute("class", "startBtn");
startBtn.innerText = "start";
header.appendChild(startBtn);

let scoreR = 10;
const score = document.createElement("p");
score.innerText = "score " + scoreR;
header.appendChild(score);

startBtn.addEventListener("click", startGame);

const boxes = document.createElement("div");
boxes.setAttribute("class", "boxes");

function startGame() {
  boxes.innerHTML = "";
  let red = Math.floor(Math.random() * 205) + 50;
  let blue = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let rand = Math.floor(Math.random() * 8);

  for (let i = 0; i < 9; i++) {
    const box = document.createElement("div");
    box.setAttribute("class", "box");
    box.setAttribute("id", i);
    boxes.appendChild(box);
    if (i == rand) {
      box.style.backgroundColor = `rgb( ${red - 50},${green},${blue})`;
      box.addEventListener("click", startGame);
    } else {
      box.style.backgroundColor = `rgb( ${red},${green},${blue})`;
    }
    box.addEventListener("click", (e) => {
      let boxId = e.target.id;
      if (boxId == rand) {
        levelC++;
        boxes.innerHTML = "";
        level.innerText = "Level " + levelC;
        if (levelC == 5) {
          boxes.innerHTML = "WIN";
        } else {
          startGame();
        }
      } else {
        scoreR--;
        if (scoreR == 0) {
          boxes.innerHTML = "LOSE";
        }
        score.innerText = "score " + scoreR;
      }
    });
  }
}
root.appendChild(boxes);
// box.addEventListener ("click",(e) => {
//     let colorBox = e.target.id;
//     if (colorBox == rand) {
//       levelC++;
//       level.innerText = "level " + levelC;
//       boxes.innerHTML = "";
//     }
//     if (colorBox == 5) {
//       level.innerHTML = "WIN";
//     } else {
//       startGame();
//     }
// } else {
//         scoreR--;
//         if (scoreR == 0) {
//           gameBody.innerHTML = "LOSE";
//         }
//         score.innerText = "score " + scoreR;
//       }
//   );
