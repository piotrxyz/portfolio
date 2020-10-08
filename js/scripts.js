// nav
const navButton = document.querySelector(".nav__button");
const menu = document.querySelector(".menu");
const menuLinks = [...document.querySelectorAll(".menu__link")];
const menuItems = [...document.querySelectorAll(".menu__item")];

window.addEventListener("scroll", () => {
  if (window.pageYOffset > -1) {
    navButton.classList.add("opacity");
  } else {
    navButton.classList.remove("opacity");
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

// particles
particlesJS.load('particles-js', 'assets/particles.json', function () {
  console.log('callback - particles.js config loaded');
});

// AOS
AOS.init({
  duration: 1200,
  once: true,
  startEvent: 'DOMContentLoaded'
});

// ScrollReveal
ScrollReveal().reveal(".header", {
  delay: 1000,
  duration: 3000,
});