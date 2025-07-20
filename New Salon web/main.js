// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile navigation toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Contact form handling
const contactForm = document.getElementById('contactForm');
const whatsappBtn = document.getElementById('whatsappBtn');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Show success message
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    contactForm.reset();
});

// WhatsApp integration
whatsappBtn.addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Create WhatsApp message
    let whatsappMessage = 'Hello Spike Spa!%0A%0A';
    
    if (name) {
        whatsappMessage += `Name: ${encodeURIComponent(name)}%0A`;
    }
    
    if (email) {
        whatsappMessage += `Email: ${encodeURIComponent(email)}%0A`;
    }
    
    if (message) {
        whatsappMessage += `Message: ${encodeURIComponent(message)}%0A`;
    } else {
        whatsappMessage += 'I would like to book an appointment at Spike Spa.%0A';
    }
    
    whatsappMessage += '%0AThank you!';
    
    // WhatsApp phone number (replace with actual number)
    const phoneNumber = '15551234567';
    
    // Open WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
    window.open(whatsappUrl, '_blank');
});

// Enhanced gallery hover effects
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.querySelector('img').style.transform = 'scale(1.1)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.querySelector('img').style.transform = 'scale(1)';
    });
});

// Service cards hover animation
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.background = 'linear-gradient(135deg, #f8f9fa, #ffffff)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.background = '#ffffff';
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const rate = scrolled * -0.5;
    
    if (hero) {
        hero.style.backgroundPosition = `center ${rate}px`;
    }
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add loading animation for images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', function() {
        this.style.opacity = '1';
    });
    
    // Set initial opacity
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.3s ease';
});

// Enhanced form validation
const formInputs = document.querySelectorAll('input, textarea');

formInputs.forEach(input => {
    input.addEventListener('blur', function() {
        if (this.value.trim() !== '') {
            this.classList.add('has-value');
        } else {
            this.classList.remove('has-value');
        }
    });
    
    input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', function() {
        this.parentElement.classList.remove('focused');
    });
});

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', function() {
    // Add initial classes for animations
    setTimeout(() => {
        document.querySelectorAll('.fade-in').forEach((el, index) => {
            setTimeout(() => {
                if (el.getBoundingClientRect().top < window.innerHeight) {
                    el.classList.add('visible');
                }
            }, index * 100);
        });
    }, 500);
});

// Social media link analytics (optional)
document.querySelectorAll('.social-icon, .footer-social a').forEach(link => {
    link.addEventListener('click', function() {
        const platform = this.querySelector('i').className;
        console.log(`Social media click: ${platform}`);
        // Add analytics tracking here if needed
    });
});

// Scroll to top functionality (hidden feature)
let scrollToTopBtn;

function createScrollToTopButton() {
    scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.setAttribute('id', 'scrollToTop');
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: var(--primary-color);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    `;
    
    document.body.appendChild(scrollToTopBtn);
    
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Show/hide scroll to top button
window.addEventListener('scroll', () => {
    if (!scrollToTopBtn) {
        createScrollToTopButton();
    }
    
    if (window.scrollY > 500) {
        scrollToTopBtn.style.opacity = '1';
        scrollToTopBtn.style.transform = 'translateY(0)';
    } else {
        scrollToTopBtn.style.opacity = '0';
        scrollToTopBtn.style.transform = 'translateY(20px)';
    }
});

// Preload critical images
function preloadImages() {
    const imageUrls = [
        'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1920',
        'https://images.pexels.com/photos/3757376/pexels-photo-3757376.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=600'
    ];
    
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// Initialize preloading
preloadImages();