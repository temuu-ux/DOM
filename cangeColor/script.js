// let root = document.getElementById("root");

function changeF() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  document.getElementById("division").style.backgroundColor =
    "rgb(" + red + "," + green + "," + blue + ")";
  document.getElementById("colorCode").innerHTML =
    "rgb(" + red + "," + green + "," + blue + ")";
  document.getElementById("button").style.backgroundColor =
    "rgb(" + (255 - red) + "," + (255 - green) + "," + (255 - blue) + ")";
}

// function y() {
//   console.log("aslaa");
// }
// y();
