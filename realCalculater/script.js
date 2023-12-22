const root = document.getElementById("root");

const cal = document.createElement("div");
cal.setAttribute("class", "cal");
root.appendChild(cal);

const allBtn = document.createElement("div");
allBtn.setAttribute("class", "allBtn");
root.appendChild(allBtn);

for (let i = 0; i < 19; i++) {
  const calBtn = document.createElement("div");
  calBtn.setAttribute("class", "calBtn");
  calBtn.setAttribute("id", `calBtn${i}`);
  allBtn.appendChild(calBtn);
}
const myBtn = document.querySelectorAll(".calBtn");
myBtn[0].innerText = "AC";
myBtn[1].innerText = "+/-";
myBtn[2].innerText = "%";
myBtn[3].innerText = "/";
myBtn[4].innerText = "7";
myBtn[5].innerText = "8";
myBtn[6].innerText = "9";
myBtn[7].innerText = "*";
myBtn[8].innerText = "4";
myBtn[9].innerText = "5";
myBtn[10].innerText = "6";
myBtn[11].innerText = "-";
myBtn[12].innerText = "1";
myBtn[13].innerText = "2";
myBtn[14].innerText = "3";
myBtn[15].innerText = "+";
myBtn[16].innerText = "0";
myBtn[17].innerText = ".";
myBtn[18].innerText = "=";

//global variables for numbers and operation

let numberA = 0;
let numberB = 0;
let operation = "";

const myButtons = document.querySelectorAll(".calBtn");

for (let i = 0; i < myButtons.length; i++) {
  myButtons[i].addEventListener("click", function () {
    if (i > 3 && i < 7) {
      numberA = Number(myButtons[i].innerText);
      console.log(numberA);
    } else {
      console.log("aa");
    }
  });
}

// main operation
function calculate() {
    
}

