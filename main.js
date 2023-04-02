const menuToggle = document.querySelector(".toggle")
const navItem =document.querySelector("nav ul")
menuToggle.addEventListener("click", () => {
    navItem.classList.toggle('slide')
})