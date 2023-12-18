let number1 = Math.floor(Math.random() * 100);

function goesNumber() {
  let num1 = Number(document.getElementById("num1").value);
  if (num1 > number1) {
    document.getElementById("answer").innerText = "too high";
  } else if (num1 < number1) {
    document.getElementById("answer").innerText = "too low";
  } else {
    document.getElementById("answer").innerText = "Congratulations";
  }
}
function reset() {
  number1 = Math.floor(Math.random() * 100);
  document.getElementById("num1").value = "";
}
reset();
