function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    
    // Toggle active class
    navMenu.classList.toggle('active');
    
    // Update aria-expanded attribute
    const isExpanded = navMenu.classList.contains('active');
    hamburger.setAttribute('aria-expanded', isExpanded);
    navMenu.setAttribute('aria-hidden', !isExpanded);
}
