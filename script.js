// Carousel auto-rotation
const carousel = document.querySelector('.carousel');
const slides = carousel.querySelectorAll('.slide');
let currentSlide = 0;

setInterval(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}, 5000);

// Dropdown menu functionality
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
    const toggle = dropdown.querySelector('.dropdown-toggle');
    toggle.addEventListener('click', () => {
        dropdowns.forEach(d => {
            if (d !== dropdown) d.classList.remove('open');
        });
        dropdown.classList.toggle('open');
    });
});

// Sticky header effects
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

// Smooth scrolling
const anchors = document.querySelectorAll('a[href^="#"]');
anchors.forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// WhatsApp button integration
const whatsappButton = document.querySelector('.whatsapp-button');
whatsappButton.addEventListener('click', () => {
    const message = 'Hello, I need assistance!';
    const phone = '123456789'; // Replace with your phone number
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
});

// Form validation
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    const inputs = form.querySelectorAll('input, textarea');
    let valid = true;
    inputs.forEach(input => {
        if (!input.value) {
            valid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });
    if (!valid) {
        e.preventDefault();
        alert('Please fill in all fields.');
    }
});

// Service card hover effects
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.backgroundColor = '#f0f0f0';
    });
    card.addEventListener('mouseleave', () => {
        card.style.backgroundColor = ''; // Reset to original
    });
});

// Scroll animations using Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        } else {
            entry.target.classList.remove('fade-in');
        }
    });
});

document.querySelectorAll('.scroll-animate').forEach(item => {
    observer.observe(item);
});

// Navbar mobile menu handling
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
});

const mobileMenuLinks = mobileMenu.querySelectorAll('a');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
    });
});

// Helper function for generating random content
function getRandomContent() {
    const contents = ['Content 1', 'Content 2', 'Content 3'];
    return contents[Math.floor(Math.random() * contents.length)];
}

// Example usage: console.log(getRandomContent());
