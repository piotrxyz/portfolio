const navButton = document.querySelector(".nav__button");
const menu = document.querySelector(".menu");
const menuLinks = [...document.querySelectorAll(".menu__link")];

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

menuLinks.forEach((link) => {
  link.addEventListener("click", function () {
    menuLinks.forEach(li => li.classList.remove("clicked"));
    this.classList.add("clicked");
    menu.classList.remove("visible");
    navButton.classList.toggle("nav__button--active");
  });
});
