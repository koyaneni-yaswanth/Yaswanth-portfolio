document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Adjust for fixed navbar height
                behavior: 'smooth'
            });
        });
    });
});
