// IIFE wrapper start
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
    		// Add our 'fonts-loaded' class
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

  //== Carousel (move to inline in footer?) ==//

  {

    let carousel = document.querySelector('.carousel');
    let prevButton = document.querySelector('button[name="prev"]');
    let nextButton = document.querySelector('button[name="next"]');
    let dots = Array.from(document.querySelectorAll('.dot'));

    // Show next slide
    function showNextSlide(event) {

      // Disable buttons from being clicked during animation
      prevButton.setAttribute('disabled', '');
      nextButton.setAttribute('disabled', '');

      // Grab current and next slides
      let currentSlide = document.querySelector('.slide:not([hidden])');
      let nextSlide = currentSlide.nextElementSibling || document.querySelector('.slide:first-of-type');

      // Add/remove necessary classes
      nextSlide.hidden = false;
      currentSlide.classList.add('next-leaving');
      nextSlide.classList.add('next-entering');

      // Update active dots
      dots.forEach(dot => {

        dot.classList.remove('active');

        if (dot.getAttribute('data-dot') === nextSlide.getAttribute('data-slide')) {
          dot.classList.add('active');
        }

      });

    };

    // Show previous slide
    function showPreviousSlide(event) {

      // Disable buttons from being clicked during animation
      prevButton.setAttribute('disabled', '');
      nextButton.setAttribute('disabled', '');

      // Grab current and previous slides
      let currentSlide = document.querySelector('.slide:not([hidden])');
      let previousSlide = currentSlide.previousElementSibling || document.querySelector('.slide:last-of-type');

      // Add/remove necessary classes
      previousSlide.hidden = false;
      currentSlide.classList.add('previous-leaving');
      previousSlide.classList.add('previous-entering');

      // Update active dots
      dots.forEach(dot => {

        dot.classList.remove('active');

        if (dot.getAttribute('data-dot') === previousSlide.getAttribute('data-slide')) {
          dot.classList.add('active');
        }

      });

    };

    // Jump to slide based on clicked dot
    function jumpToSlide(event) {

      // If click was on currently active dot, bail
      if (event.target.classList.contains('active')) return;

      // Update active dots
      dots.forEach(dot => {

        dot.classList.remove('active');

        if (dot === event.target) {
          dot.classList.add('active');
        }

      });

      // Show correct slide based on active dot
      Array.from(document.querySelectorAll('.slide')).forEach(slide => {

        if (slide.getAttribute('data-slide') === event.target.getAttribute('data-dot')) {

          slide.hidden = false;

        }

        else {

          slide.hidden = true;

        }

      });

    };

    // Listen for clicks on Prev & Next buttons
    prevButton.addEventListener('click', showPreviousSlide, false);
    nextButton.addEventListener('click', showNextSlide, false);

    // Listen for clicks on dots
    dots.forEach(function(dot) {

      dot.addEventListener('click', jumpToSlide, false);

    });


    // Add/remove necessary classes after animation
    carousel.addEventListener('animationend', function(event) {

      // Re-enable buttons to be clickable
      prevButton.removeAttribute('disabled');
      nextButton.removeAttribute('disabled');

      if (event.target.classList.contains('next-leaving') || event.target.classList.contains('previous-leaving')) {
        event.target.hidden = true;
      }

      event.target.classList.remove('next-entering', 'next-leaving', 'previous-entering', 'previous-leaving');

    }, false);

  }

  //== Team Members Gallery (move to inline in footer?) ==//

  {

    let breakpointLarge = window.matchMedia('(min-width: 992px)');

    let teamMemberSection = document.querySelector('section.team-members');

    let teamMemberBios = Array.from(document.querySelectorAll('.bio'));

    // Toggle Bios
    function toggleBios(event) {

      teamMemberBios.forEach(bio => {

        // If team member bio matches focused container, show bio
        if (bio.getAttribute('data-name') === document.activeElement.getAttribute('data-name')) {
          bio.style.display = 'grid';
        }
        // Else hide bio
        else {
          bio.style.display = 'none';
        }

      });

    }

    // Listen for clicks and keydown events
    document.addEventListener('click', function(event) {

      if (!breakpointLarge.matches) return;

      toggleBios(event);


    }, false);

    document.addEventListener('keydown', function(event) {

      if (!breakpointLarge.matches) return;

      if (event.key === 'Enter') {

        toggleBios(event);

      }

    }, false);

  }

}()); // IIFE wrapper end
