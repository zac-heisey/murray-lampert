---
title: Contact
layout: default
section_id: contact
address1: 2878 Camino Del Rio South
address2: Suite 160, San Diego CA, 92108
phone: (619) 285-9222
---

  <div class='medium-8 columns'>
    <div class='form'>
      <div class='row'>
        <form id='contact_form' method='POST'>
          <div class='large-12 columns'>
            <p id='thanks' style='display: none;'>
              Thanks for contacting us, we'll be in touch soon!
            </p>
          </div>
          <div class='medium-12 columns'>
            <input class='required' name='name' placeholder='NAME' type='text'>
            <input class='required email' name='email' placeholder='EMAIL' type='text'>
            <input class='required' name='subject' placeholder='SUBJECT' type='text'>
            <textarea class='required' name='message' placeholder='MESSAGE'></textarea>
            <input class='button white' type='submit'>
          </div>
        </form>
      </div>
    </div>
    <div class='two spacing'></div>
  </div>
  <div class='medium-4 columns'>
    <div class='contact-details'>
      <h3>Murray Lampert Design, Build, Remodel</h3>
      <h4>Address:</h4>
      <p>{{ page.address1 }}<br>{{ page.address2 }}</p>
      <h4>Phone:</h4>
      <p>{{ page.phone }}</p>
      <h4>Map:</h4>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d53676.110066872054!2d-117.13469700000002!3d32.772185!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x409268b5dbfcff56!2sMurray+Lampert+Design%2C+Build%2C+Remodel!5e0!3m2!1sen!2sus!4v1497635068979" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
    </div>
  </div>
  <div class='four spacing'></div>
