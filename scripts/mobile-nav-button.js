const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

// Make primaryNav focusable
primaryNav.setAttribute('tabindex', '-1');

// Handle blur once, outside the click event
primaryNav.addEventListener('blur', (event) => {
    // Check if the newly focused element is inside primaryNav
    if (primaryNav.contains(event.relatedTarget)) {
        return;
    }

    // Use a timeout to allow other events to be processed first
    setTimeout(() => {
        primaryNav.setAttribute("nav-visible", "false");
    }, 0);
});

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('nav-visible');
    if (visibility === "false") {
        primaryNav.setAttribute("nav-visible", "true"); 
        primaryNav.focus();
    } else if (visibility === "true") {
        primaryNav.setAttribute("nav-visible", "false");
    }
});
