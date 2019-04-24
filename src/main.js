import "./styles/main.scss";

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

// Portfolio Carousel
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector("[data-action='slideLeft']");
const next = document.querySelector("[data-action='slideRight']");

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

const nextSlide = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if(current.nextElementSibling) {
        current.nextElementSibling.classList.add('current');
    } else {
        slides[0].classList.add('current');
    }
   setTimeout(() => current.classList.remove('current'));
}

const prevSlide = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if(current.previousElementSibling) {
        current.previousElementSibling.classList.add('current');
    } else {
        // Add current class to last slide item
        slides[slides.length - 1].classList.add('current');
    }
   setTimeout(() => current.classList.remove('current'));
}

next.addEventListener('click', e => {
    nextSlide();
});

prev.addEventListener('click', e => {
    prevSlide();
});

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


