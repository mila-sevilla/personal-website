const sections = document.querySelectorAll('section');

const section0Btn = document.querySelector('.section0Btn');
const section1Btn = document.querySelector('.section1Btn');
const section2Btn = document.querySelector('.section2Btn');
const section3Btn = document.querySelector('.section3Btn');

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