// nav
const navButton = document.querySelector('.nav__button')
const menu = document.querySelector('.menu')
const menuLinks = [...document.querySelectorAll('.menu__link')]
const menuItems = [...document.querySelectorAll('.menu__item')]

window.addEventListener('scroll', () => {
  if (window.pageYOffset > -1) {
    navButton.classList.add('opacity')
  } else {
    navButton.classList.remove('opacity')
  }
})

navButton.addEventListener('click', () => {
  navButton.classList.toggle('nav__button--active')
  menu.classList.toggle('visible')
})

menuLinks.forEach((link) => {
  link.addEventListener('click', function () {
    menuLinks.forEach(li => li.classList.remove('clicked'))
    this.classList.add('clicked')
    menu.classList.remove('visible')
    navButton.classList.toggle('nav__button--active')
  })
})

// links scrolling
const easeInCubic = function (t) { return t * (2 - t) }
const scrollToElem = (startTime, currentTime, duration, scrollEndElemTop, startScrollOffset) => {
  const runtime = currentTime - startTime
  let progress = runtime / duration
  progress = Math.min(progress, 1)
  const ease = easeInCubic(progress)
  window.scroll(0, startScrollOffset + (scrollEndElemTop * ease))
  if (runtime < duration) {
    requestAnimationFrame((timestamp) => {
      const currentTime = timestamp || new Date().getTime()
      scrollToElem(startTime, currentTime, duration, scrollEndElemTop, startScrollOffset)
    })
  }
}

const links = document.querySelectorAll('a[href^="#"]')
links.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault()
    const scrollEndElem = document.querySelector(link.getAttribute('href'))
    const anim = requestAnimationFrame((timestamp) => {
      const stamp = timestamp || new Date().getTime()
      const duration = 700
      const start = stamp
      const startScrollOffset = window.pageYOffset
      const scrollEndElemTop = scrollEndElem.getBoundingClientRect().top

      scrollToElem(start, stamp, duration, scrollEndElemTop, startScrollOffset)
    })
  })
})

// particles
particlesJS.load('particles-js', 'assets/particles.json', function () {
  console.log('callback - particles.js config loaded')
})