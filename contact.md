---
title: Contact Murray Lampert
permalink: "/contact/"
layout: default
section_id: contact
address1: 2878 Camino Del Rio South
address2: Suite 160, San Diego CA, 92108
phone: "(619) 285-9222"
excerpt: Murray Lampert Design, Build, Remodel in San Diego. Contact us today for
  a free in-home consultation to get your home remodeling project started!
---

  <div class='medium-7 columns'>
    <div class='form'>
      <div class='row'>
        <!-- Removed id='contact_form' and method='POST' from original <form> -->
        <form name='Website Lead: Contact Form' netlify-honeypot='surname' action='/thank-you/' netlify>
          <div class='medium-12 columns'>
            <!-- Netlify honeypot field -->
            <p class='hidden'><label>Don’t fill this out: <input name='surname'></label></p>
            <!-- Standard form fields -->
            <input id="first-name" name='first name' placeholder='FIRST NAME' type='text' required>
            <input id="last-name" name='last name' placeholder='LAST NAME' type='text' required>
            <input name='email' placeholder='EMAIL' type='email' required>
            <input name='phone' placeholder='PHONE' type='tel' required>
            <input name='address' placeholder='YOUR ADDRESS' type='text' required>
            <input name='zipcode' placeholder='YOUR ZIP CODE' type='text' onfocusout="validateZip()" required>
            <select name='type-of-project' placeholder='TYPE OF PROJECT' onfocusout="aduBudget()" required>
              <option value="" disabled selected>TYPE OF PROJECT</option>
              <option value="Total Renovation">Total Renovation</option>
              <option value="Room Addition">Room Addition</option>
              <option value="Second Story">Second Story</option>
              <option value="Kitchen Remodel">Kitchen Remodel</option>
              <option value="Bathroom Remodel">Bathroom Remodel</option>
              <option value="ADU">ADU / Granny Flat / In-Law Suite</option>
              <option value="Indoor Outdoor">Indoor / Outdoor</option>
              <option value="Other">Other</option>
            </select>
            <select name='previous-remodel' placeholder='HAVE YOU DONE A REMODEL BEFORE?' required>
              <option value="" disabled selected>HAVE YOU DONE A REMODEL BEFORE?</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <select name='project-budget' placeholder='WHAT IS YOUR BUDGET?' required>
              <option value="" disabled selected>WHAT IS YOUR BUDGET?</option>
              <!-- <option value="$30k - $50k">$30,000 - $50,000</option> -->
              <option value="$50k - $100k">$50,000 - $100,000</option>
              <option value="$100k - $200k">$100,000 - $200,000</option>
              <option value="$200k - $300k">$200,000 - $300,000</option>
              <option value="$300k - $500k">$300,000 - $500,000</option>
              <option value="$500k+">$500,000+</option>
            </select>
            <select name='financing' placeholder='WILL YOU NEED FINANCING?'>
              <option value="" disabled selected>WILL YOU NEED FINANCING?</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>  
            <select name='referral-source' placeholder='HOW DID YOU FIND US?'>
              <option value="" disabled selected>HOW DID YOU FIND US?</option>
              <option value="Online Search">Online Search (Google, Bing, Yahoo, etc.)</option>
              <option value="Online Referral">Online Referral (Yelp, Houzz, BBB, etc.)</option>
              <option value="Social Media">Social Media (Facebook, Instagram, Pinterest, etc.)</option>
              <option value="Personal Referral">Personal Referral</option>
              <option value="Radio">Radio</option>
              <option value="Television">Television</option>
              <option value="Job Site Sign">Job Site Sign</option>
              <option value="Print Ad">Print Advertisement</option>
              <option value="Other">Other</option>
            </select>
            <textarea name='message' placeholder='HOW CAN WE HELP?' required></textarea>
            <div netlify-recaptcha style="margin-bottom:1.875rem;"></div>
            <input class='button default' type='submit' value="GET IN TOUCH" id="contact-btn" disabled>
            <p id='js-disabled-alert'>Please enable JavaScript or call us directly to get in touch (619) 285-9222</p>
          </div>
        </form>
      </div>
    </div>
    <div class='two spacing'></div>
  </div>
  <div class='medium-5 columns'>
    <div class='contact-details'>
      <h3>Murray Lampert Design, Build, Remodel</h3>
      <h4>Tour Our Office:</h4>
      <div id='google-360'>
        <iframe src="https://www.google.com/maps/embed?pb=!4v1527768435954!6m8!1m7!1sPnjsf6DAq6QAAAQvPIPAbA!2m2!1d32.77134674119494!2d-117.1302992294989!3f327.7689707024294!4f-1.6314316436287157!5f0.7820865974627469" width="436.66" height="306" frameborder="0" style="border:0;margin-bottom:1rem;" allowfullscreen></iframe>
      </div>
      <h4>Address:</h4>
      <p>{{ page.address1 }}<br>{{ page.address2 }}<br><a href="tel:+16192859222">{{ page.phone }}</a></p>
      <h4>Map:</h4>
      <div id='google-map'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d53676.110066872054!2d-117.13469700000002!3d32.772185!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x409268b5dbfcff56!2sMurray+Lampert+Design%2C+Build%2C+Remodel!5e0!3m2!1sen!2sus!4v1497635068979" width="436.66" height="306" frameborder="0" style="border:0;margin-bottom:1rem;" allowfullscreen></iframe>
      </div>
    </div>
  </div>
  <div class='four spacing'></div>
