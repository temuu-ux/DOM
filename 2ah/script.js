const root = document.getElementById("root");

let num1 = 0;
let num2 = 0;

const container = document.createElement("div");
container.setAttribute("class", "container");
root.appendChild(container);

const calScreen = document.createElement("div");
calScreen.setAttribute("class", "screen");
container.appendChild(calScreen);
calScreen.innerHTML = "";

const buttonsDiv = document.createElement("div");
buttonsDiv.setAttribute("class", "buttons_div");
container.appendChild(buttonsDiv);

const numbersDiv = document.createElement("div");
numbersDiv.setAttribute("class", "numbers_div");
buttonsDiv.appendChild(numbersDiv);

const operationsDiv = document.createElement("div");
operationsDiv.setAttribute("class", "operations_div");
buttonsDiv.appendChild(operationsDiv);

const percentButton = document.createElement("button");
percentButton.setAttribute("class", "top_buttons");
numbersDiv.appendChild(percentButton);
percentButton.innerHTML = "%";
percentButton.addEventListener("click", getNumPercent);

const plsMnsButtons = document.createElement("button");
plsMnsButtons.setAttribute("class", "top_buttons");
numbersDiv.appendChild(plsMnsButtons);
plsMnsButtons.innerHTML = "+/-";
plsMnsButtons.addEventListener("click", plsMnsNumer);

const clrButton = document.createElement("button");
clrButton.setAttribute("class", "top_buttons");
numbersDiv.appendChild(clrButton);
clrButton.innerHTML = "AC";
clrButton.addEventListener("click", clearScreen);

for (let i = 9; i > 0; i--) {
  const numberButtons = document.createElement("button");
  numberButtons.setAttribute("class", "number_buttons");
  numbersDiv.appendChild(numberButtons);
  numberButtons.innerHTML = i;
  numberButtons.addEventListener("click", onClickNumber);
}

const divideButton = document.createElement("button");
divideButton.setAttribute("class", "oper_button");
operationsDiv.appendChild(divideButton);
divideButton.innerHTML = "/";
divideButton.addEventListener("click", divide);

const mutiplyButton = document.createElement("button");
mutiplyButton.setAttribute("class", "oper_button");
operationsDiv.appendChild(mutiplyButton);
mutiplyButton.innerHTML = "x";
mutiplyButton.addEventListener("click", multiply);

const subtractButton = document.createElement("button");
subtractButton.setAttribute("class", "oper_button");
operationsDiv.appendChild(subtractButton);
subtractButton.innerHTML = "-";
subtractButton.addEventListener("click", subtract);

const plusButton = document.createElement("button");
plusButton.setAttribute("class", "oper_button");
operationsDiv.appendChild(plusButton);
plusButton.innerHTML = "+";
plusButton.addEventListener("click", sum);

const dotButton = document.createElement("button");
dotButton.setAttribute("class", "number_buttons");
numbersDiv.appendChild(dotButton);
dotButton.innerHTML = ".";
dotButton.addEventListener("click", onClickNumber);

const equalButton = document.createElement("button");
equalButton.setAttribute("class", "oper_button");
operationsDiv.appendChild(equalButton);
equalButton.innerHTML = "=";
equalButton.addEventListener("click", equal);

const zeroButton = document.createElement("button");
zeroButton.setAttribute("class", "zero_buttons");
numbersDiv.appendChild(zeroButton);
zeroButton.innerHTML = "0";
zeroButton.addEventListener("click", onClickNumber);

function onClickNumber(event) {
  calScreen.innerHTML = calScreen.innerHTML + event.target.innerHTML;
}

function clearScreen() {
  calScreen.innerHTML = "";
}

function plsMnsNumer() {
  calScreen.innerHTML = Number(calScreen.innerHTML) * -1;
}

function getNumPercent() {
  num1 = Number(calScreen.innerHTML);
  localStorage.setItem("num1", num1);
  localStorage.setItem("operation", "%");
  calScreen.innerHTML = "";
}

function divide() {
  num1 = Number(calScreen.innerHTML);
  localStorage.setItem("num1", num1);
  localStorage.setItem("operation", "/");
  calScreen.innerHTML = "";
}

function multiply() {
  num1 = Number(calScreen.innerHTML);
  localStorage.setItem("num1", num1);
  localStorage.setItem("operation", "*");
  calScreen.innerHTML = "";
}

function subtract() {
  num1 = Number(calScreen.innerHTML);
  localStorage.setItem("num1", num1);
  localStorage.setItem("operation", "-");
  calScreen.innerHTML = "";
}

function sum() {
  num1 = Number(calScreen.innerHTML);
  localStorage.setItem("num1", num1);
  localStorage.setItem("operation", "+");
  calScreen.innerHTML = "";
}

function equal() {
  num1 = localStorage.getItem("num1");
  num2 = Number(calScreen.innerHTML);
  let oper = localStorage.getItem("operation");
  let result = 0;
  switch (oper) {
    case "%":
      result = num1 * (num2 / 100);
      break;
    case "/":
      result = num1 / num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "+":
      result = num1 + num2;
      break;
  }
  calScreen.innerHTML = result;
  if (calScreen.innerHTML.length >= 10) {
    calScreen.style.fontSize = 35 + "px";
  }
}
