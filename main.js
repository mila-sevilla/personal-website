const sections = document.querySelectorAll('section');

// const nextBtn = document.querySelector('.nextBtn');
// const prevBtn = document.querySelector('.prevBtn');

const section0Btn = document.querySelector('.section0Btn');
const section1Btn = document.querySelector('.section1Btn');
const section2Btn = document.querySelector('.section2Btn');
const section3Btn = document.querySelector('.section3Btn');

let index = 0;
// const animationDuration = 1000;
// let lastTime = 0;

// nextBtn.addEventListener('click', () => {
//     index ++;
//     sections.forEach((section, i) => {
//         if (i === index) {
//             section.scrollIntoView({behavior: 'smooth'});
//         }
//     })
// });

// prevBtn.addEventListener('click', () => {
//     index --;
//     sections.forEach((section, i) => {
//         if (i === index) {
//             section.scrollIntoView({behavior: 'smooth'});
//         }
//     })
// });

// window.addEventListener('wheel', (e) => {
//     const delta = e.wheelDelta;
//     const currentTime = new Date().getTime();

//     if (currentTime - lastTime < animationDuration) {
//         e.preventDefault();
//         return;
//     }

//     if (delta < 0) {
//         const nextBtnClick = new Event('click');
//         nextBtn.dispatchEvent(nextBtnClick);
//     } else {
//         const prevtBtnClick = new Event('click');
//         prevBtn.dispatchEvent(prevBtnClick);
//     }
//     lastTime = currentTime;
// })

section0Btn.addEventListener('click', () => {
    index = 0;
    sections.forEach((section, i) => {
        if (i === index) {
            section.scrollIntoView({behavior: 'smooth'});
        }
    })
});

section1Btn.addEventListener('click', () => {
    index = 1;
    sections.forEach((section, i) => {
        if (i === index) {
            section.scrollIntoView({behavior: 'smooth'});
        }
    })
});

section2Btn.addEventListener('click', () => {
    index = 2;
    sections.forEach((section, i) => {
        if (i === index) {
            section.scrollIntoView({behavior: 'smooth'});
        }
    })
});

section3Btn.addEventListener('click', () => {
    index = 3;
    sections.forEach((section, i) => {
        if (i === index) {
            section.scrollIntoView({behavior: 'smooth'});
        }
    })
});