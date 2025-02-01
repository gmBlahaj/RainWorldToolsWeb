document.addEventListener('DOMContentLoaded', () => {
    const rainContainer = document.querySelector('.rain');

    function createRaindrop() {
        const raindrop = document.createElement('div');
        raindrop.classList.add('raindrop');
        raindrop.style.left = `${Math.random() * 100}%`; // Random horizontal position
        raindrop.style.animationDuration = `${0.5 + Math.random() * 1}s`; // Random fall speed
        raindrop.style.animationDelay = `${Math.random() * 2}s`; // Random delay
        rainContainer.appendChild(raindrop);
    }

    // Generate multiple raindrops
    for (let i = 0; i < 200; i++) {
        createRaindrop();
    }
});