function startSlideshow(slideshowClass) {
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = document.querySelectorAll(slideshowClass + ' .mySlides');
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        slides[slideIndex-1].style.display = "block";
        setTimeout(showSlides, 4000); // Change image every 4 seconds
    }
}

// Start both slideshows
startSlideshow("#slideshow-us-together");
startSlideshow("#slideshow-my-fav-pics");

// Function to check if an element is in viewport
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
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
});

// Simple Slideshow Functionality
let slideIndex = 0; // Start with the first slide

// Function to show the next slide in the slideshow
function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} // Loop back to the first slide
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 4000); // Change image every 4 seconds
}

// Call showSlides function to initiate the slideshow
document.addEventListener('DOMContentLoaded', (event) => {
    showSlides();
});



// Ensure to add the 'mySlides' class to each slideshow image or container in your HTML

