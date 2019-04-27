import "./main.scss";

const sections = document.querySelectorAll('section');
const section0Link = document.querySelector('.section0Link');
const section1Link = document.querySelector('.section1Link');
const section2Link = document.querySelector('.section2Link');
const section3Link = document.querySelector('.section3Link');

// const idlePeriod = 200;
// const animationDuration = 1000;

// let lastAnimation = 0;
let index = 0;

section0Link.addEventListener('click', () => {
    index = 0;
    sections[index].scrollIntoView({behavior: 'smooth'});
    //toggleText(index, 'show');
})

section1Link.addEventListener('click', () => {
    index = 1;
    sections[index].scrollIntoView({behavior: 'smooth'});
    //toggleText(index, 'show');
})

section2Link.addEventListener('click', () => {
    index = 2;
    sections[index].scrollIntoView({behavior: 'smooth'});
    //toggleText(index, 'show');
})

section3Link.addEventListener('click', () => {
    index = 3;
    sections[index].scrollIntoView({behavior: 'smooth'});
    //toggleText(index, 'show');
})

//var entry_animation = sections[0].querySelectorAll('.entry_animation');

// const toggleText = (i, state) => {
//     if (state === 'show') {
//         for (var i = 0; i < entry_animation.length; i++) { 
//             entry_animation[i].classList.add('show'); 
//         } 
//     } else {
//         entry_animation[i].classList.remove('show');  
//     } 
// }

// toggleText(0, 'show');

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
//         toggleText(index, 'hide');
//         index++;

//         sections.forEach((section, i) => {       
//             if (i === index) {
//             toggleText(i, 'show');
//             section.scrollIntoView({behavior: "smooth"});
//             }
//         })
//     // scrolling up
//     } else {
//         if (index < 1) return;
//         toggleText(index, 'hide');
//         index--;
        
//         sections.forEach((section, i) => {
//             if (i === index) {
//             toggleText(i, 'show');
//             section.scrollIntoView({behavior: "smooth"});
//             }
//         })
//     }  
//     lastAnimation = timeNow;
// })


// SOLUTION WITH LOOP

//section1Link.addEventListener('click', () => {
//     index = 1;
//     sections.forEach((section, i) => {
//         if (i === index) {
//             section.scrollIntoView({behavior: 'smooth'});
//         }
//     })
// });