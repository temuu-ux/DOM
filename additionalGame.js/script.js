let num1 = Number(
  (document.getElementById("num1").value = Math.floor(Math.random() * 101))
);
let num2 = Number(
  (document.getElementById("num2").value = Math.floor(Math.random() * 101))
);

function sumNN() {
  let sum = num1 + num2;
  if (Number(document.getElementById("sum").value) == sum) {
    alert("Answer is correct");
  } else alert("Answer is wrong");
}
function refresh() {
  num1 = document.getElementById("num1").value = Math.floor(
    Math.random() * 101
  );
  num2 = document.getElementById("num2").value = Math.floor(
    Math.random() * 101
  );
  document.getElementById("sum").value = "";
}
