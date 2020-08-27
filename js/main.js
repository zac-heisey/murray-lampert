//== Variables ==//

// Menu Icon
var menuIcon = document.querySelector('#menu-icon');
// Nav Overlay
var navOverlay = document.querySelector('#nav-overlay');

//== Functions & Methods ==//

// Mobile menu toggle
function menuToggle(event) {

  // If menu is not open, show menu items
  if (!menuIcon.classList.contains('open')) {
    menuIcon.classList.add('open');
    menuIcon.setAttribute('aria-expanded', 'true');
    navOverlay.style.height = '100%';
  }
  // Else close menu
  else {
    menuIcon.classList.remove('open');
    menuIcon.setAttribute('aria-expanded', 'false');
    navOverlay.style.height = '0%';
  }

}


//== Inits & Listeners ==//

// Listen for click events on document
document.addEventListener('click', function(event) {

  // If click is on menu icon, run menuToggle function
  if (event.target === menuIcon) {
    menuToggle(event);
  }


}, false);
