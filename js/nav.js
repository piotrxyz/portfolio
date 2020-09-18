const navButton = document.querySelector(".nav__button");
const menu = document.querySelector(".menu");
const menuLink = [...document.querySelectorAll(".menu__link")];
console.log(menuLink);

window.addEventListener("scroll", () => {
  if (window.pageYOffset > -1) {
    navButton.classList.add("visible");
  } else {
    navButton.classList.remove("visible");
  }
});

navButton.addEventListener("click", () => {
  navButton.classList.toggle("nav__button--active");
  menu.classList.toggle("visible");
});

menuLink.forEach((link) => {
  link.addEventListener("click", (e) => {
    menu.classList.remove("visible");
    navButton.classList.toggle("nav__button--active");
  });
});