document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: false,
        mirror: false
    });

    // Page transition effect
    const transitionElement = document.querySelector('.page-transition');
    
    if (transitionElement) {
        // Show transition layer when leaving page
        document.querySelectorAll('a').forEach(link => {
            // Only apply to internal links that aren't anchors
            if (link.href.includes(window.location.origin) && !link.href.includes('#') && !link.getAttribute('target')) {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const destination = this.href;
                    
                    // Animate transition layer
                    transitionElement.classList.add('active');
                    
                    // Navigate after transition completes
                    setTimeout(function() {
                        window.location.href = destination;
                    }, 500);
                });
            }
        });
        
        // Hide transition layer when page loads
        window.addEventListener('load', function() {
            transitionElement.classList.remove('active');
        });
    }

    // Element reveal animations for sections
    const revealElements = document.querySelectorAll('.reveal-element');
    
    function checkReveal() {
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.classList.add('revealed');
            }
        });
    }
    
    // Check on initial load
    checkReveal();
    
    // Check on scroll
    window.addEventListener('scroll', checkReveal);
    
    // Hover animations for cards and buttons
    document.querySelectorAll('.service-card, .event-card, .leader-card, .sermon-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('hover-effect');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('hover-effect');
        });
    });
});
