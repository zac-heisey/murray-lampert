
(function() {

  //== Main Menu Toggle ==//

  {

    let menuIcon = document.querySelector('#menu-icon');
    let navOverlay = document.querySelector('#nav-overlay');

    // Close main menu
    function closeMenu() {

      menuIcon.classList.remove('open');
      menuIcon.setAttribute('aria-expanded', 'false');
      navOverlay.setAttribute('aria-hidden', 'true');
      navOverlay.style.visibility = 'hidden';
      navOverlay.style.height = '0%';

    }

    // Open main menu
    function openMenu() {

      menuIcon.classList.add('open');
      menuIcon.setAttribute('aria-expanded', 'true');
      navOverlay.setAttribute('aria-hidden', 'false');
      navOverlay.style.visibility = 'visible';
      navOverlay.style.height = '100%';

    }

    // Toggle menu opened/closed
    function menuToggle(event) {

      // If menu is not open, show menu items
      if (!menuIcon.classList.contains('open')) {
        openMenu();
      }
      // Else close menu
      else {
        closeMenu();
      }

    }

    // Listen for clicks on hamburger menu icon
    menuIcon.addEventListener('click', menuToggle);

    // Listen for keydown events
    document.addEventListener('keydown', function(event) {

      // If menu is open and Escape key is pressed, close menu
      if (event.key === 'Escape' && menuIcon.classList.contains('open')) {
        closeMenu();
        return;
      }

    }, false);

  }

  //== Lazy Load Images (via loading="lazy") ==//

  {

    // Grab all images on the page
    let images = document.querySelectorAll('img');

    images.forEach( image => {

      // If image doesn't have loading="lazy" attribute, add it
      if (image.getAttribute('loading') === null) {
        image.setAttribute('loading', 'lazy');
      }

    });

  }

}());