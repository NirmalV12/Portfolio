// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1); // Get the section ID
        const targetSection = document.getElementById(targetId);
        
        // Dynamically calculate the navbar height (useful for responsive designs)
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        
        // Scroll to the section with dynamic offset based on navbar height
        window.scrollTo({
            top: targetSection.offsetTop - navbarHeight, // Dynamic offset
            behavior: 'smooth'
        });
    });
});
