// ========== Intersection Observer for Offer Cards ==========
const offerCards = document.querySelectorAll('.offer-card');

const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Stagger animation
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 150);
        }
    });
}, {
    threshold: 0.2,
    rootMargin: '0px 0px -60px 0px'
});

offerCards.forEach(card => {
    cardObserver.observe(card);
});

// ========== Parallax Effect on Hero ==========
const hero = document.querySelector('.hero');
const heroContent = document.querySelector('.hero-content');

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const heroHeight = hero.offsetHeight;

    if (scrolled < heroHeight) {
        // Subtle parallax on hero content
        const parallaxOffset = scrolled * 0.3;
        heroContent.style.transform = `translateY(${parallaxOffset}px)`;
        heroContent.style.opacity = 1 - (scrolled / heroHeight) * 0.6;
    }
});

// ========== Smooth scroll for About Us button ==========
const aboutBtn = document.getElementById('about-btn');
if (aboutBtn) {
    aboutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(aboutBtn.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}

// ========== On Load - check if cards are in viewport ==========
window.addEventListener('load', () => {
    offerCards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            setTimeout(() => {
                card.classList.add('visible');
            }, index * 150);
        }
    });
});

// ========== Mouse move parallax on hero particles ==========
const particles = document.querySelectorAll('.particle');

hero.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;

    particles.forEach((p, i) => {
        const speed = (i + 1) * 5;
        p.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
    });
});
