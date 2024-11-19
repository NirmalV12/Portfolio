document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1); // Get the section ID
        const targetSection = document.getElementById(targetId);
        
        // Dynamically calculate the navbar height
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        
        // Scroll to the section with dynamic offset
        window.scrollTo({
            top: targetSection.offsetTop - navbarHeight, // Offset adjustment
            behavior: 'smooth'
        });
    });
});