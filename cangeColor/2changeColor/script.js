function color() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  document.getElementById(
    "root"
  ).style.backgroundColor = `rgb( ${red},${green},${blue})`;

  document.getElementById("change").style.backgroundColor =
    "rgb(" + (255 - red) + "," + (255 - green) + "," + (255 - blue) + ")";

  document.getElementById("change").style.color =
    "rgb(" + red + "," + green + "," + blue + ")";

  document.getElementById(
    "color"
  )= `rgb( ${red},${green},${blue})`;
  //   document.getElementById("change").style.color =
  //     "rgb(" + (200 - red) + "," + (200 - green) + "," + (200 - blue) + ")";
}

//
