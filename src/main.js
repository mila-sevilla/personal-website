// Portfolio Carousel

// Necessary for IE, Array.from not supported:
function arrayFromQuery(selector) {
  const nodeList = document.querySelectorAll(selector)
  return Array.prototype.slice.call(nodeList)
}

const slides = arrayFromQuery('.slide')
const prev_buttons = arrayFromQuery('[data-action=\'slideLeft\']')
const next_buttons = arrayFromQuery('[data-action=\'slideRight\']')
const dots = arrayFromQuery('.nav-dot')

let currentSlide = 0

const nextSlide = () => {
  slides[currentSlide].classList.remove('current')
  dots[currentSlide].classList.remove('currentDot')


  if (currentSlide === slides.length - 1) {
    currentSlide = 0
  } else {
    currentSlide++
  }

  slides[currentSlide].classList.add('current')
  dots[currentSlide].classList.add('currentDot')

  setTimeout(() => {
    next_buttons[currentSlide].focus()
  }, 300)
}


const prevSlide = () => {
  slides[currentSlide].classList.remove('current')
  dots[currentSlide].classList.remove('currentDot')

  if (currentSlide === 0) {
    currentSlide = slides.length - 1
  } else {
    currentSlide--
  }

  slides[currentSlide].classList.add('current')
  dots[currentSlide].classList.add('currentDot')
  
  // debugger
  setTimeout(() => {
    prev_buttons[currentSlide].focus()
  }, 300)
}

prev_buttons.forEach(prev_button => {
  prev_button.addEventListener('click', prevSlide)
})

next_buttons.forEach(next_button => {
  next_button.addEventListener('click', nextSlide)
})

// Navigation with the dots

dots.forEach(
  dot => {
    dot.addEventListener('click', function() {
      slides[currentSlide].classList.remove('current')
      dots[currentSlide].classList.remove('currentDot')

      const index = dots.indexOf(this)
      currentSlide = index

      slides[currentSlide].classList.add('current')
      dots[currentSlide].classList.add('currentDot')
    }
    )
  }
) 