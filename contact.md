---
layout: default
title: Contact Murray Lampert
description: Contact Murray Lampert Design, Build, Remodel for a free in-home or virtual consultation. Reach out to start your remodeling project in San Diego today!
---

<section class="rich-text">

  <div class="lock">

    <h6>Get In Touch</h6>
    <h2>Contact Murray Lampert</h2>
    <p>Our team is excited to learn more about your project! Complete the quick form below and let us know a bit more about you, as well as some details about your remodeling project. Our team will be in touch ASAP to discuss next steps and schedule your FREE in-home or virtual consultation.</p>

    <!-- Website Lead: Contact Form -->
    <form name='Website Lead: Contact Form' method="POST" action='/thank-you/' netlify-honeypot='surname' data-netlify-recaptcha="true" data-netlify="true">

      <!-- Netlify honeypot field -->
      <p class='hidden'><label>Don’t fill this out: <input name='surname'></label></p>
      <!-- Standard form fields -->
      <input id="first-name" name='first name' placeholder='First Name' type='text' required>
      <input id="last-name" name='last name' placeholder='Last Name' type='text' required>
      <input name='email' placeholder='Email Address' type='email' required>
      <input name='phone' placeholder='Phone Number' type='tel' required>
      <input name='address' placeholder='Your Home Address' type='text' required>
      <input name='zipcode' placeholder='Your Zip Code' type='text' onfocusout="validateZip()" required>
      <select name='area-of-interest' placeholder='Area of Interest' required>
        <option value="" disabled selected>Area of Interest</option>
        <option value="Total Renovation">Total Renovation</option>
        <option value="Room Addition">Room Addition</option>
        <option value="Second Story">Second Story</option>
        <option value="Kitchen Remodel">Kitchen Remodel</option>
        <option value="Bathroom Remodel">Bathroom Remodel</option>
        <option value="ADU">ADU / Granny Flat / In-Law Suite</option>
        <option value="Indoor Outdoor">Indoor / Outdoor</option>
        <option value="Other">Other</option>
      </select>
      <select name='expected-time-frame' placeholder='Expected Time Frame' required>
        <option value="" disabled selected>Expected Time Frame</option>
        <option value="ASAP">ASAP</option>
        <option value="3 months">3 Months</option>
        <option value="6 months">6 Months</option>
        <option value="1 year">1 Year</option>
        <option value="More than a year">More than a year</option>
      </select>
      <select name='project-budget' placeholder='What is Your Budget?' required>
        <option value="" disabled selected>What is Your Budget?</option>
        <option value="$50k - $100k">$50,000 - $100,000</option>
        <option value="$100k - $200k">$100,000 - $200,000</option>
        <option value="$200k - $300k">$200,000 - $300,000</option>
        <option value="$300k - $500k">$300,000 - $500,000</option>
        <option value="$500k+">$500,000+</option>
      </select>
      <select name='financing' placeholder='Will You Need Financing?'>
        <option value="" disabled selected>Will You Need Financing?</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
      <select name='referral-source' placeholder='How Did You Find Us?'>
        <option value="" disabled selected>How Did You Find Us?</option>
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
      <textarea name='message' placeholder='Tell Us About Your Project' required></textarea>
      <!-- Netlify reCAPTCHA 2 -->
      <div data-netlify-recaptcha="true"></div>
      <input type="submit" class="btn blue" id="contact-btn" value="GET IN TOUCH" disabled>
      <p id='js-disabled-alert'>Please enable JavaScript or call us directly to get in touch: (619) 285-9222</p>

    </form>

  </div>

  <!-- Form-related scripts -->
  <script type="text/javascript">

    // Enable contact form submit button when JS is enabled
    document.getElementById('contact-btn').removeAttribute('disabled');

    // Remove JS disabled alert message
    document.getElementById('js-disabled-alert').remove();

  </script>

</section>
