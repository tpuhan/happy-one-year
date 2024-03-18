// Function to start a slideshow given a selector for the container
function startSlideshow(slideshowSelector) {
    let slideIndex = 0; // Initialize slideIndex to 0 for each slideshow

    function showSlides() {
        let slides = document.querySelectorAll(slideshowSelector + ' .mySlides');
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none"; // Hide all slides
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1} // Loop back to the first slide
        slides[slideIndex-1].style.display = "block"; // Show the current slide
        setTimeout(showSlides, 4000); // Change slide every 4 seconds
    }

    showSlides(); // Call showSlides function to start the slideshow
}

// Initiate both slideshows when the document is fully loaded
document.addEventListener('DOMContentLoaded', (event) => {
    startSlideshow("#slideshow-us-together");
    startSlideshow("#slideshow-my-fav-pics");
});

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Animations on scroll
document.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('.animate-title, .animate-subtitle, .timeline-item, #messages, #gallery .gallery-grid img');
    sections.forEach((section) => {
        if (isInViewport(section)) {
            section.classList.add('active'); // Add 'active' class if in viewport
        } else {
            section.classList.remove('active'); // Remove 'active' class if not in viewport
        }
    });
});