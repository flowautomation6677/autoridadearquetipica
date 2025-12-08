

// Scroll Reveal Animation
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

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// Stagger Animation for Cards
const staggerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const cards = entry.target.parentElement.querySelectorAll('.stagger-fade');
            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add('visible');
                }, index * 100);
            });
        }
    });
}, observerOptions);

const deliverableSection = document.querySelector('.deliverables-grid');
if (deliverableSection) {
    staggerObserver.observe(deliverableSection);
}

// Testimonials Carousel
let currentSlide = 0;
const testimonials = document.querySelectorAll('.testimonial-card');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    testimonials.forEach(card => card.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    testimonials[index].classList.add('active');
    dots[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % testimonials.length;
    showSlide(currentSlide);
}

// Auto-advance carousel
setInterval(nextSlide, 6000);

// Manual dot navigation
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all items
        faqItems.forEach(faqItem => {
            faqItem.classList.remove('active');
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// Smooth Scroll for CTA buttons
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





// Typewriter Effect for Hero Subtitle (Removido para performance)
const subtitle = document.querySelector('.hero-subtitle');
if (subtitle) {
    // Garante que o texto está visível, já que a animação foi removida
    subtitle.style.opacity = 1; 
}

// Glow effect removed for performance

// Mockup 3D rotation removed for performance

// Entrance animation for sections removed. CSS classes .fade-up and .stagger-fade are now handled by IntersectionObserver for light entrance effect.

// Console message
console.log('%c✨ Autoridade Arquetípica Express 24h ✨', 'color: #D4AF37; font-size: 20px; font-weight: bold;');
console.log('%cDesenvolvido com excelência e atenção aos detalhes.', 'color: #FFFFFF; font-size: 12px;');


