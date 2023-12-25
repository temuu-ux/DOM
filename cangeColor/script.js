// let root = document.getElementById("root");

// let red = Math.floor(Math.random() * 255);
// let blue = Math.floor(Math.random() * 255);
// let green = Math.floor(Math.random() * 255);

// root.style.backgroundColor = `rgb (${red},${blue},${green})`;

function changeColor() {
  document.getElementById("root").style.backgroundColor = "Green";
  for (let i = 0; i < 100; i++) {
    if (document.getElementById("root").style.backgroundColor == "Green") {
      document.getElementById("root").style.backgroundColor = "blueviolet";
    } else {
      document.getElementById("root").style.backgroundColor = "Green";
    }
  }
}
changeColor;
