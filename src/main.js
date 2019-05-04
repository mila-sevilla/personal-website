import './styles/main.scss'
// Portfolio Carousel

//Necessary for IE, array.from not supported:
const slides = Array.prototype.slice.call(document.querySelectorAll('.slide'))
const prev_buttons = Array.prototype.slice.call(document.querySelectorAll('[data-action=\'slideLeft\']'))
const next_buttons = Array.prototype.slice.call(document.querySelectorAll('[data-action=\'slideRight\']'))
const dots = Array.prototype.slice.call(document.querySelectorAll('.nav-dot'))

// const slides = Array.from(document.querySelectorAll('.slide'))
// const prev_buttons = Array.from(document.querySelectorAll('[data-action=\'slideLeft\']'))
// const next_buttons = Array.from(document.querySelectorAll('[data-action=\'slideRight\']'))
// const dots = Array.from(document.querySelectorAll('.nav-dot'))

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
}

prev_buttons.forEach(prev_button => {
  prev_button.addEventListener('click', prevSlide)
})

next_buttons.forEach(next_button => {
  next_button.addEventListener('click', nextSlide)
})

//Navigation with the dots

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


// Full page scroll on desktop
// const sections = document.querySelectorAll('section');
// // const section0Link = document.querySelector('.section0Link');
// // const section1Link = document.querySelector('.section1Link');
// // const section2Link = document.querySelector('.section2Link');
// // const section3Link = document.querySelector('.section3Link');
// const idlePeriod = 200;
// const animationDuration = 1000;
// let lastAnimation = 0;
// let index = 0;

// document.addEventListener('wheel', event => {
//     var delta = event.wheelDelta;
//     var timeNow = new Date().getTime();
//     // Cancel scroll if currently animating or within quiet period
//     if (timeNow - lastAnimation < idlePeriod + animationDuration) {
//       event.preventDefault();
//       return;
//     }
//     // scrolling down
//     if (delta < 0) {
//         if (index > 2) return;
//         index++;

//         sections.forEach((section, i) => {       
//             if (i === index) {
//             section.scrollIntoView({behavior: "smooth"});
//             }
//         })
//     // scrolling up
//     } else {
//         if (index < 1) return;
//         index--;
        
//         sections.forEach((section, i) => {
//             if (i === index) {
//             section.scrollIntoView({behavior: "smooth"});
//             }
//         })
//     }  
//     lastAnimation = timeNow;
// })