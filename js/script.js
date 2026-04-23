/**
 * IRON CORE - Project JavaScript
 * Handles: Navbar transitions, AOS, Lightbox, Back to top, and Form Validation.
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Navbar Scroll Effect
    const navbar = document.getElementById('mainNavbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });

    // 2. AOS Initialization
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });

    // 3. GLightbox Initialization
    const lightbox = GLightbox({
        selector: '.glightbox'
    });

    // 4. Back to Top Button
    const backToTopBtn = document.getElementById('backToTop');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 5. Smooth Scrolling for Navbar Links
    document.querySelectorAll('a.nav-link, .btn-neon, .btn-outline-light').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href;
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const offset = 70; // Adjust based on navbar height
                    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });

                    // Close mobile menu if open
                    const navbarCollapse = document.querySelector('.navbar-collapse');
                    if (navbarCollapse.classList.contains('show')) {
                        const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                        bsCollapse.hide();
                    }
                }
            }
        });
    });

    // 6. Contact Form Validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple validation check
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && email && message) {
                // Show success message (in a real app, you'd send this to a server)
                alert(`Thank you, ${name}! Your message has been sent successfully. We'll get back to you soon.`);
                contactForm.reset();
            } else {
                alert('Please fill in all required fields.');
            }
        });
    }

    // 7. Navbar Active Link Update on Scroll (handled by Bootstrap Scrollspy in HTML, but can be forced here)
    // Bootstrap 5 Scrollspy is used via data-bs-spy="scroll" on the body tag.
});
