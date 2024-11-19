const hoverImage = document.getElementById('hoverImage');
const fishes = document.querySelectorAll('.fish');

hoverImage.addEventListener('mouseenter', () => {
    fishes.forEach(fish => {
        fish.classList.add('paused'); 
    });
});

hoverImage.addEventListener('mouseleave', () => {
    fishes.forEach(fish => {
        fish.classList.remove('paused'); 
    });
});