const sections = document.querySelectorAll('section');

const section0Btn = document.querySelector('.section0Btn');
const section1Btn = document.querySelector('.section1Btn');
const section2Btn = document.querySelector('.section2Btn');
const section3Btn = document.querySelector('.section3Btn');

const idlePeriod = 200;
const animationDuration = 1000;

let lastAnimation = 0;
let index = 0;

const toggleText = (index, state) => {
    if (state === 'show') {
      sections[index].querySelector('.text').classList.add('show');  
    } else {
      sections[index].querySelector('.text').classList.remove('show');  
    } 
}
  
toggleText(0, 'show');

document.addEventListener('wheel', event => {
    var delta = event.wheelDelta;
    var timeNow = new Date().getTime();
    // Cancel scroll if currently animating or within quiet period
    if (timeNow - lastAnimation < idlePeriod + animationDuration) {
      event.preventDefault();
      return;
    }
    // scrolling down
    if (delta < 0) {
        if (index > 2) return;
        toggleText(index, 'hide');
        index++;

        sections.forEach((section, i) => {       
            if (i === index) {
            toggleText(i, 'show');
            section.scrollIntoView({behavior: "smooth"});
            }
        })
    // scrolling up
    } else {
        if (index < 1) return;
        toggleText(index, 'hide');
        index--;
        
        sections.forEach((section, i) => {
            if (i === index) {
            toggleText(i, 'show');
            section.scrollIntoView({behavior: "smooth"});
            }
        })
    }  
    lastAnimation = timeNow;
})

section0Btn.addEventListener('click', () => {
    index = 0;
    sections[index].scrollIntoView({block: "start", behavior: 'smooth'});
    toggleText(index, 'show');
})

section1Btn.addEventListener('click', () => {
    index = 1;
    sections[index].scrollIntoView({block: "start", behavior: 'smooth'});
    toggleText(index, 'show');
})

section2Btn.addEventListener('click', () => {
    index = 2;
    sections[index].scrollIntoView({behavior: 'smooth'});
    toggleText(index, 'show');
})

section3Btn.addEventListener('click', () => {
    index = 3;
    sections[index].scrollIntoView({behavior: 'smooth'});
    toggleText(index, 'show');
})

// SOLUTION WITH LOOP

//section1Btn.addEventListener('click', () => {
//     index = 1;
//     sections.forEach((section, i) => {
//         if (i === index) {
//             section.scrollIntoView({behavior: 'smooth'});
//         }
//     })
// });