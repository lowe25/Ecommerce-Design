const toggleButton = document.getElementsByClassName("nav-burger")[0];
const navbarLinks = document.getElementsByClassName("nav-list")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

const col = document.querySelector(".col").addEventListener("click", col1);
const row = document.querySelector(".row").addEventListener("click", row1);
const div = document.querySelector(".product-landing-showcase");
const div1 = document.querySelector(".motherboard-showcase");


function col1() {
  div.style.display = "grid";
}
function row1() {
  div.style.display = "flex";
  div.style.flexDirection = "column";
}
