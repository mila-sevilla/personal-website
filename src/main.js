import "./main.scss";

let slides = document.querySelectorAll('.slide');
let nextBtn = document.querySelector('#nextBtn');
let prevBtn = document.querySelector('#prevBtn');
let current = 0;

function reset() {
    for(let i = 0; i < slides.length; i++) {
        slides[i].getElementsByClassName.display = 'none';
    }
}

function startSlide() {
    reset();
    slides[0].getElementsByClassName.display = 'block';
}

function slidePrev() {
    reset();
    slides[current - 1].style.display = 'block';
    current--;
}

function slideNext() {
    reset();
    slides[current + 1].style.display = 'block';
    current++;
}

prevBtn.addEventListener('click', function() {
    if(current === 0) {
        current = slides.length;
    }
    slidePrev();
})

nextBtn.addEventListener('click', function() {
    if(current === slides.length - 1) {
        current = -1;
    }
    slideNext();
})

startSlide();

