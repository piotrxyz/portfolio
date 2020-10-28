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
    menuLinks.forEach(li => li.classList.remove('highlight'))
    this.classList.add('highlight')
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

// animations
const aboutTitle = document.querySelector('.about__title')
const aboutTitleBar = document.querySelector('.about__title-bar')
const aboutSubtitle = document.querySelector('.about__subtitle')
const aboutDescription = document.querySelector('.about__description')
const aboutImg = document.querySelector('.about__me-img')
const aboutLinkContact = document.querySelector('.about__description-link--contact')
const aboutLinkPortfolio = document.querySelector('.about__description-link--portfolio')
const skillsSubtitle = document.querySelector('.skills__subtitle')
const skills = document.querySelectorAll('.skills__item')
const portfolioTitle = document.querySelector('.portfolio__title')
const portfolioTitleBar = document.querySelector('.portfolio__title-bar')
const contactTitle = document.querySelector('.contact__title')
const contactTitleBar = document.querySelector('.contact__title-bar')
const contactText = document.querySelectorAll('.contact__text')
const contactForm = document.querySelector('.contact__form')
const projects = document.querySelectorAll('.project')

function animateItems() {
  const windowHeight = window.innerHeight
  const aboutTitleDistanceToTop = aboutTitle.getBoundingClientRect().top
  const aboutTitleBarDistanceToTop = aboutTitleBar.getBoundingClientRect().top
  const aboutImgDistanceToTop = aboutImg.getBoundingClientRect().top
  const aboutSubtitleDistanceToTop = aboutSubtitle.getBoundingClientRect().top
  const aboutDescriptionDistanceToTop = aboutDescription.getBoundingClientRect().top
  const aboutLinkDistanceToTop = aboutLinkContact.getBoundingClientRect().top
  const aboutLinkPortfolioDistanceToTop = aboutLinkContact.getBoundingClientRect().top
  const skillsSubtitleDistanceToTop = skillsSubtitle.getBoundingClientRect().top
  const portfolioTitleDistanceToTop = portfolioTitle.getBoundingClientRect().top
  const contactTitleDistanceToTop = contactTitle.getBoundingClientRect().top

  // if aboutTitle is x% in viewport
  const aboutTitleVisible = aboutTitleDistanceToTop + windowHeight * 0.3 < windowHeight
  const aboutTitleBarVisible = aboutTitleBarDistanceToTop + windowHeight * 0.3 < windowHeight
  const aboutImgVisible = aboutImgDistanceToTop + windowHeight * 0.3 < windowHeight
  const aboutSubtitleVisible = aboutSubtitleDistanceToTop + windowHeight * 0.3 < windowHeight
  const aboutDescriptionVisible = aboutDescriptionDistanceToTop + windowHeight * 0.3 < windowHeight
  const aboutLinkVisible = aboutLinkDistanceToTop + windowHeight * 0.3 < windowHeight
  const aboutLinkPortfolioVisible = aboutLinkPortfolioDistanceToTop + windowHeight * 0.3 < windowHeight
  const skillsSubtitleVisible = skillsSubtitleDistanceToTop + windowHeight * 0.3 < windowHeight
  const portfolioTitleVisible = portfolioTitleDistanceToTop + windowHeight * 0.1 < windowHeight
  const contactTitleVisible = contactTitleDistanceToTop + windowHeight * 0.1 < windowHeight

  // if visible add class
  if (aboutTitleVisible && !aboutTitle.classList.contains('slide-left')) {
    aboutTitle.classList.add('slide-left')
  }

  if (aboutTitleBarVisible && !aboutTitleBar.classList.contains('slide-right')) {
    aboutTitleBar.classList.add('slide-right')
  }

  if (aboutImgVisible && !aboutImg.classList.contains('slide-down')) {
    aboutImg.classList.add('slide-down')
  }

  if (aboutSubtitleVisible && !aboutSubtitle.classList.contains('slide-down')) {
    aboutSubtitle.classList.add('slide-down')
  }

  if (aboutDescriptionVisible && !aboutDescription.classList.contains('slide-down')) {
    aboutDescription.classList.add('slide-down')
  }

  if (aboutLinkVisible && !aboutLinkContact.classList.contains('slide-down')) {
    aboutLinkContact.classList.add('slide-down')
  }

  if (aboutLinkPortfolioVisible && !aboutLinkPortfolio.classList.contains('slide-down')) {
    aboutLinkPortfolio.classList.add('slide-down')
  }

  if (skillsSubtitleVisible && !skillsSubtitle.classList.contains('slide-down')) {
    skillsSubtitle.classList.add('slide-down')
  }

  if (skillsSubtitleVisible && !skills[0].classList.contains('fade-in')) {
    skills.forEach((skill, index) => setTimeout(() => {
      skill.classList.add('fade-in')
    }, 150 * (index)))
  }

  if (portfolioTitleVisible && !portfolioTitle.classList.contains('slide-right')) {
    portfolioTitle.classList.add('slide-right')
    portfolioTitleBar.classList.add('slide-left')
    projects.forEach((project, index) => setTimeout(() => {
      project.classList.add('slide-up')
    }, 350 * (index)))
  }

  if (contactTitleVisible && !contactTitle.classList.contains('slide-left')) {
    contactTitle.classList.add('slide-left')
    contactTitleBar.classList.add('slide-right')
    contactText.forEach((text, index) => setTimeout(() => {
      text.classList.add('slide-down')
    }, 350 * (index)))
    contactForm.classList.add('pop-in')
  }
}

window.addEventListener('scroll', animateItems)

// particles
particlesJS.load('particles-js', 'assets/particles.json', function () {
  console.log('callback - particles.js config loaded')
})