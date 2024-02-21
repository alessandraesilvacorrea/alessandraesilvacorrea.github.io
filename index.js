const themeToggleButtons = document.querySelectorAll(".theme-toggle-button");
const body = document.querySelector("body");
const mobileMenu = document.querySelector("#mobile-menu");
const mobileMenuCloseButton = document.querySelector(".close-nav-button");
const mobileMenuOpenButton = document.querySelector(".menu-toggle-button");

mobileMenuOpenButton.addEventListener("click", (e) => {
  mobileMenu.classList.add("active");
})

mobileMenuCloseButton.addEventListener("click", (e) => {
  mobileMenu.classList.remove("active");
})

themeToggleButtons.forEach(themeToggleButton => {
themeToggleButton.addEventListener("click", (e) => {
  e.preventDefault();
  body.classList.toggle("light");
});
})
