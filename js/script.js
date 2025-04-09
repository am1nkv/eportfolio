console.log("Page loaded and scripts ready.");

// Dynamically create floating bits (0s and 1s)
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('particles-container');
    if (!container) return; // Exit if container not found

    const numParticles = 40; // Increase number of bits slightly

    for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        // Set content to '0' or '1'
        particle.textContent = Math.random() < 0.5 ? '0' : '1' ;

        // Apply random styles (position, animation delay/duration, size)
        const size = Math.random() * 0.8 + 1.2; // Size multiplier between 1.2em and 2.0em
        particle.style.fontSize = `${size}em`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDuration = `${Math.random() * 10 + 8}s`; // Duration between 8s and 18s
        particle.style.animationDelay = `${Math.random() * 8}s`; // Delay up to 8s
        particle.style.opacity = `${Math.random() * 0.3 + 0.4}`; // Vary base opacity 0.4-0.7


        container.appendChild(particle);
    }
});