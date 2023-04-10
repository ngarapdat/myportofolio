const menuToggle = document.querySelector(".toggle");
const navItem = document.querySelector("nav ul");
menuToggle.addEventListener("click", () => {
  navItem.classList.toggle("slide");
});

const boxes = document.querySelectorAll(".about,.project,.kemampuan,.kontak");

window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
  const trigger = (window.innerHeight / 5) * 4;

  for (let i = 0; i < boxes.length; i++) {
    const boxTop = boxes[i].getBoundingClientRect().top;
    if (boxTop < trigger) {
      boxes[i].classList.add("show");
    } else {
      boxes[i].classList.remove("show");
    }
  }
}
