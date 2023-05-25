const slides = document.querySelectorAll('.carousel img');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');
const congratulationSlide = document.querySelector('.slide');

let currentSlide = 0;

function showSlide() {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    slides[currentSlide].classList.add('active');

    if (currentSlide === slides.length - 1) {
        document.querySelector('.slide').scrollIntoView({ behavior: 'smooth' });
    } else {
        congratulationSlide.style.visibility = 'hidden';
    }
    setTimeout(() => {
        slides.forEach((slide) => {
            slide.style.opacity = 0;
        });

        slides[currentSlide].style.opacity = 1;
    }, 500); // Задержка в 500 миллисекунд (0.5 секунды)
}

function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    showSlide();
}

function nextSlide() {
    currentSlide++;
    if (currentSlide === slides.length) {
        currentSlide = 0;
    }
    showSlide();
}

prevButton.addEventListener('click', () => {
    prevSlide();
    prevButton.classList.add('active');
    setTimeout(() => {
        prevButton.classList.remove('active');
    }, 300);
});

nextButton.addEventListener('click', () => {
    nextSlide();
    nextButton.classList.add('active');
    setTimeout(() => {
        nextButton.classList.remove('active');
    }, 300);
});

showSlide();

nextButton.addEventListener('click', () => {
    if (currentSlide === slides.length - 1) {
        congratulationSlide.style.visibility = 'visible';
    }
});
