const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');
const darkModeBtn = document.querySelector('.dark-mode-toggle');

// Make primaryNav focusable
primaryNav.setAttribute('tabindex', '-1');

// Handle blur once, outside the click event
primaryNav.addEventListener('blur', (event) => {
    // Check if the newly focused element is inside primaryNav
    if (primaryNav.contains(event.relatedTarget) || navToggle.contains(event.relatedTarget)){
    // if (primaryNav.contains(event.relatedTarget) || darkModeBtn.contains(event.relatedTarget) || navToggle.contains(event.relatedTarget)){
        primaryNav.setAttribute("nav-visible", "true"); //true means it IS hidden.
        return;
    }

    // Use a timeout to allow other events to be processed first
    setTimeout(() => {
        primaryNav.setAttribute("nav-visible", "false"); //true means it is NOT hidden.
    }, 0);
});


navToggle.addEventListener('click', () => {
    const hidden = primaryNav.getAttribute('nav-visible');
    if (hidden === "false") {
        primaryNav.setAttribute("nav-visible", "true"); 
        primaryNav.focus();
    } else if (hidden === "true") {
        primaryNav.setAttribute("nav-visible", "false");
    }
    console.log(hidden)
});
