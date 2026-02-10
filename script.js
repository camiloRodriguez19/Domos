// script.js

// Carousel Navigation Functionality
const carousel = document.querySelector('.carousel');
let currentIndex = 0;

function showSlide(index) {
    const slides = carousel.querySelectorAll('.slide');
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

function nextSlide() {
    const slides = carousel.querySelectorAll('.slide');
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function prevSlide() {
    const slides = carousel.querySelectorAll('.slide');
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

// Set initial slide
showSlide(currentIndex);

// Dropdown Menu Functionality
const dropdown = document.querySelector('.dropdown');
const dropdownToggle = dropdown.querySelector('.dropdown-toggle');

dropdownToggle.addEventListener('click', () => {
    dropdown.classList.toggle('open');
});

// Interactive Elements
const interactiveElements = document.querySelectorAll('.interactive');
interactiveElements.forEach(element => {
    element.addEventListener('click', () => {
        alert('You clicked on an interactive element!');
    });
});