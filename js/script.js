console.log("Page loaded and scripts ready.");

document.addEventListener('DOMContentLoaded', () => {
    // Floating particles (0s and 1s)
    const container = document.getElementById('particles-container');
    if (container) {
        const numParticles = 40;
        for (let i = 0; i < numParticles; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            particle.textContent = Math.random() < 0.5 ? '0' : '1';
            const size = Math.random() * 0.8 + 1.2;
            particle.style.fontSize = `${size}em`;
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.animationDuration = `${Math.random() * 10 + 8}s`;
            particle.style.animationDelay = `${Math.random() * 8}s`;
            particle.style.opacity = `${Math.random() * 0.3 + 0.4}`;
            container.appendChild(particle);
        }
    }

    // Hamburger menu toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('nav ul');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = navMenu.classList.toggle('open');
            navToggle.setAttribute('aria-expanded', isOpen);
            navToggle.innerHTML = isOpen ? '&#10005;' : '&#9776;';
        });
    }

    // Mobile dropdown toggles (click instead of hover)
    document.querySelectorAll('.deroulant > a').forEach(link => {
        link.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                const parent = link.parentElement;
                const submenu = parent.querySelector('.sousmenu, ul');
                if (submenu) {
                    e.preventDefault();
                    parent.classList.toggle('open');
                }
            }
        });
    });

    // Close menu when clicking outside nav
    document.addEventListener('click', (e) => {
        if (navToggle && navMenu && !e.target.closest('nav')) {
            navMenu.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
            navToggle.innerHTML = '&#9776;';
        }
    });
});
