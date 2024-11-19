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

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
