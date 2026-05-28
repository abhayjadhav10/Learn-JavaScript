/*
function randomColorAssign() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}

// function randomColorAssign() {
//   let r1 = Math.floor(Math.random() * 256);
//   let g1 = Math.floor(Math.random() * 256);
//   let b2 = Math.floor(Math.random() * 256);

//   return `rgb(${r1}, ${g1}, ${b2})`;
// }

let boxes = document.getElementsByClassName("box");
for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", function () {
    this.style.backgroundColor = randomColorAssign();
    this.style.color = randomColorAssign();
  });
}
*/


function getRandomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}

let boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("click", function () {
    this.style.backgroundColor = getRandomColor();
    this.style.color = getRandomColor();
  });
});