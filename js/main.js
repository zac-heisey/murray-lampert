
(function() {

  //== Load Fonts (prevent FOIT) ==//

  // https://gomakethings.com/preventing-foit-with-web-fonts-using-the-vanilla-js-fonts.load-method/

  {

    // If the browser supports the fonts.load() method
    if ('fonts' in document) {

    	// When all Adobe Typekit styles are loaded
    	Promise.all([
    		document.fonts.load('600 1em adobe-caslon-pro'),
    		document.fonts.load('400 1em acumin-pro'),
    		document.fonts.load('700 1em acumin-pro')
    	]).then(function () {
    		// The font is loaded
    		// Add our loaded class
    		document.documentElement.className += 'fonts-loaded';
    	});

    }

  }

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

  //== Carousel (move to inline?) ==//

  {

    let carousel = document.querySelector('.carousel');
    let prevButton = document.querySelector('button[name="prev"]');
    let nextButton = document.querySelector('button[name="next"]');

    // Show next slide
    function showNextSlide(event) {

      // Grab current and next slides
      var currentSlide = document.querySelector('.slide:not([hidden])');
      var nextSlide = currentSlide.nextElementSibling || document.querySelector('.slide:first-of-type');

      // Add/remove necessary classes
      nextSlide.hidden = false;
      currentSlide.classList.add('next-leaving');
      nextSlide.classList.add('next-entering');

    };

    // Show previous slide
    function showPreviousSlide(event) {

      // Grab current and previous slides
      var currentSlide = document.querySelector('.slide:not([hidden])');
      var previousSlide = currentSlide.previousElementSibling || document.querySelector('.slide:last-of-type');

      // Add/remove necessary classes
      previousSlide.hidden = false;
      currentSlide.classList.add('previous-leaving');
      previousSlide.classList.add('previous-entering');

    };

    // Listen for clicks on Prev & Next buttons
    prevButton.addEventListener('click', showPreviousSlide, false);
    nextButton.addEventListener('click', showNextSlide, false);

    // Add/remove necessary classes after animation
    carousel.addEventListener('animationend', function(event) {
      
      if (event.target.classList.contains('next-leaving') || event.target.classList.contains('previous-leaving')) {
        event.target.hidden = true;
      }
      event.target.classList.remove('next-entering', 'next-leaving', 'previous-entering', 'previous-leaving');

    }, false);

  }

}());
