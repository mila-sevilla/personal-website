// Portfolio Carousel

//For IE:
//const slides = Array.prototype.slice.call(document.querySelectorAll('.slide'));
//Or try arrayFrom and then build
const slides = Array.from(document.querySelectorAll('.slide'))
const prev = document.querySelector("[data-action='slideLeft']")
const next = document.querySelector("[data-action='slideRight']")
const dots = Array.from(document.querySelectorAll('.nav-dot'))

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

next.addEventListener('click', nextSlide)
prev.addEventListener('click', prevSlide)


dots.forEach(
    (dot) => {
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

// dots[0,1,2]  slides[0,1,2]

// const navDots = () => {
//     slides[currentSlide].classList.remove('current')
//     dots[currentSlide].classList.remove('currentDot')

//     if (slides[currentSlide] !== currentSlide) 
// }

// dots[0].addEventListener("click", function(){  })
// dots[1].addEventListener("click", function(){ currentSlide = 1 })



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



// //Full page scroll on desktop with mouse wheel

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

// Portfolio Carousel



// Navigational Progress Dots

// const updateDot = () => {
//   if()
// }

// _updateCurrentSlideDot : function () {
//   // update dots
//   var dots = this.obj.querySelectorAll(".carousel-dot");
//   for(var i = 0; i < dots.length; i++){
//     if(i == this.slide_index){
//       dots[this.slide_index].className += " active";
//     } else {
//       dots[i].className = dots[i].className.replace(/(^| )active/,"");
//     }
//   }

// },

// index = 0;

// nav_dots.forEach() {
//   if(slides.classList.contains('current')) {
//     nav_dots.classList.add('active')
//   } else {
//     nav_dots.classList.remove('active')
//   }

// }


