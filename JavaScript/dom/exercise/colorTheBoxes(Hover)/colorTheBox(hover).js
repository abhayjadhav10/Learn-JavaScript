function randomlyAssignColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}

let boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("mouseenter", function () {
    box.dataset.originalBg = box.style.backgroundColor;
    box.dataset.originalColor = box.style.color;

    this.style.color = randomlyAssignColor();
    this.style.backgroundColor = randomlyAssignColor();
  });

  box.addEventListener("mouseleave", function () {
    this.style.backgroundColor = box.dataset.originalBg;
    this.style.color = box.dataset.originalColor;
  });
});
