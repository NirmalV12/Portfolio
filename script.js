// Smooth scrolling with offset
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1); // Get the section ID
        const targetSection = document.getElementById(targetId);

        // Dynamically calculate the navbar height
        const navbarHeight = document.querySelector('.navbar').offsetHeight;

        // Scroll to the section with dynamic offset
        window.scrollTo({
            top: targetSection.offsetTop - navbarHeight, // Adjust the target position
            behavior: 'smooth'
        });
    });
});

// Navbar background change on scroll
const navbar = document.querySelector('.navbar');
let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            ticking = false;
        });
        ticking = true;
    }
});

// Optional: Toggle menu for mobile view
const menuToggle = document.querySelector('.menu-toggle');
const navLinksContainer = document.querySelector('.nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinksContainer.classList.toggle('active');
    });
}
