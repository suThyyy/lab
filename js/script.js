const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');
let currentSlide = 0;

function showSlide(n) {
    if (n >= slides.length) {
        currentSlide = 0;
    } else if (n < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = n;
    }
    slides.forEach((slide) => slide.classList.remove('active'));
    slides[currentSlide].classList.add('active');

    indicators.forEach((indicator) => indicator.classList.remove('active'));
    indicators[currentSlide].classList.add('active');
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

document.getElementById('prevBtn').addEventListener('click', () => changeSlide(-1));
document.getElementById('nextBtn').addEventListener('click', () => changeSlide(1));

indicators.forEach((indicator) => {
    indicator.addEventListener('click', () => showSlide(Number(indicator.dataset.slideTo))
    )
});

showSlide(0);

// ===== Hamburger menu (mobile) =====
const hamburger = document.getElementById('navToggle');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
});

document.querySelectorAll('.has-dropdown > a').forEach((link) => {
    link.addEventListener('click', (e) => {
        if (window.innerWidth <= 767) {
            e.preventDefault();
            link.parentElement.classList.toggle('open');
        }
    });
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('header')) {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 767) {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
        document.querySelectorAll('.has-dropdown.open').forEach((li) => li.classList.remove('open'));
    }
});