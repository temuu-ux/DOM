// DOM ->document object model
function add() {
  // num1+num2
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);

  let sum = num1 + num2;
  document.getElementById("answer").innerText = sum;
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
}
function subtract() {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let sum = num1 - num2;
  document.getElementById("answer").innerText = sum;
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
}
function multify() {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let sum = num1 * num2;
  document.getElementById("answer").innerText = sum;
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
}
function divide() {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let sum = num1 / num2;
  document.getElementById("answer").innerText = sum;
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
}
function random() {
  let num = Math.floor(Math.random() * 101);
  document.getElementById("randomNumber").innerText = num;
}
function random() {
  let arr = [];
  let num = Math.floor(Math.random() * 101);
  for (let i = 0; i < 100; i++) {}
  document.getElementById("randomNumber").innerText = num;
}
