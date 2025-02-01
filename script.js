document.addEventListener('DOMContentLoaded', () => {
    const rainContainer = document.querySelector('.rain');
    const toggleButton = document.getElementById('toggleRain');
    let isRaining = true;

    // Function to create raindrops
    function createRaindrop() {
        const raindrop = document.createElement('div');
        raindrop.classList.add('raindrop');
        raindrop.style.left = `${Math.random() * 100}%`;
        raindrop.style.animationDuration = `${0.5 + Math.random() * 1}s`;
        raindrop.style.animationDelay = `${Math.random() * 2}s`;
        rainContainer.appendChild(raindrop);
    }

    // Generate multiple raindrops
    for (let i = 0; i < 200; i++) {
        createRaindrop();
    }

    // Toggle rain effect
    toggleButton.addEventListener('click', () => {
        if (isRaining) {
            rainContainer.style.display = 'none'; // Hide the rain
            toggleButton.textContent = 'Enable Rain';
        } else {
            rainContainer.style.display = 'block'; // Show the rain
            toggleButton.textContent = 'Disable Rain';
        }
        isRaining = !isRaining; // Toggle the state
    });
});