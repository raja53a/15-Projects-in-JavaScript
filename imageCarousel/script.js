// script.js
document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelector('.gallery');
    const scrollSpeed = 2; // Adjust scroll speed as needed

    if (gallery) {
        // Handle mouse wheel scrolling
        gallery.addEventListener('wheel', function(e) {
            e.preventDefault(); // Prevent the default vertical scroll behavior

            // Scroll horizontally based on the wheel's delta value, multiplied by scrollSpeed
            gallery.scrollBy({
                left: e.deltaY * scrollSpeed, // Increase horizontal scroll speed
                behavior: 'smooth' // Smooth scrolling
            });
        });
    } else {
        console.error('Gallery element not found.');
    }

    // Handle the next and back button clicks
    const nextBtn = document.getElementById('nextBtn');
    const backBtn = document.getElementById('backBtn');

    if (nextBtn && backBtn) {
        nextBtn.addEventListener('click', function() {
            gallery.scrollBy({
                left: 300 * scrollSpeed, // Adjust this value to control the scroll distance
                behavior: 'smooth'
            });
        });

        backBtn.addEventListener('click', function() {
            gallery.scrollBy({
                left: -300 * scrollSpeed, // Adjust this value to control the scroll distance
                behavior: 'smooth'
            });
        });
    } else {
        console.error('Next or Back button not found.');
    }
});
