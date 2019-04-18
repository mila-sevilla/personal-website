import "./main.scss";

// Portfolio Carousel
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector("[data-action='slideLeft']");
const next = document.querySelector("[data-action='slideRight']");


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


