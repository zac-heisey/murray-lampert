---
title: About Murray Lampert
permalink: "/about-murray-lampert-design-build-remodel"
section_id: about
featured-image:
excerpt: Murray Lampert Design, Build, Remodel of San Diego is your BBB award winning
  design build contractor with over 40 years experience in home remodeling.
members:
- name: Gregg Cantor
  position: President/CEO
  avatar: uploads/gregg-cantor.jpg
  socials:
  - icon_class: fa fa-plus
    url: "/team-member/gregg-cantor"
  - icon_class: fa fa-envelope
    url: mailto:gcantor@murraylampert.com
- name: Lisa Cantor
  position: CFO
  avatar: uploads/lisa-cantor.jpg
  socials:
  - icon_class: fa fa-plus
    url: "/team-member/lisa-cantor"
  - icon_class: fa fa-envelope
    url: mailto:lcantor@murraylampert.com
- name: Rachel Cantor
  position: Director of Design
  avatar: uploads/rachel-cantor.jpg
  socials:
  - icon_class: fa fa-plus
    url: "/team-member/rachel-cantor"
  - icon_class: fa fa-envelope
    url: mailto:rachel@murraylampert.com
- name: Patti Atwell
  position: Director of Production
  avatar: uploads/patti-atwell.jpg
  socials:
  - icon_class: fa fa-plus
    url: "/team-member/patti-atwell"
  - icon_class: fa fa-envelope
    url: mailto:patti@murraylampert.com
- name: D'Ann Good
  position: Office Mgr. | Client Care
  avatar: uploads/dann-good.jpg
  socials:
  - icon_class: fa fa-plus
    url: "/team-member/dann-good"
  - icon_class: fa fa-envelope
    url: mailto:dgood@murraylampert.com
- name: Cameron Poeschel
  position: Project Manager
  avatar: uploads/cameron-poeschel.jpg
  socials:
  - icon_class: fa fa-plus
    url: "/team-member/cameron-poeschel"
  - icon_class: fa fa-envelope
    url: mailto:cpoeschel@murraylampert.com
- name: Rachel Bancroft
  position: Project & Interior Designer
  avatar: uploads/rachel-bancroft.jpg
  socials:
  - icon_class: fa fa-plus
    url: "/team-member/rachel-bancroft"
  - icon_class: fa fa-envelope
    url: mailto:rbancroft@murraylampert.com
layout: default
---

  <div class='medium-6 columns'>
    <h3>Murray Lampert Design, Build, Remodel Since 1975</h3>
    <div class='spacing'></div>
    <p>Founded by Murray Lampert in 1975, our company specializes in<a href="/san-diego-home-design-services/"> residential remodeling</a>, <a href="/remodel/">home renovation</a> and construction. For four generations, Murray Lampert Design, Build, Remodel has been building relationships with San Diego homeowners to become <a href="/testimonials/">one of San Diego County’s most trusted home remodelers</a>. Over these many years, we have transformed thousands of homes and earned our reputation for innovative design, quality craftsmanship, affordable prices and timely completion. It’s likely that someone in your neighborhood, even your own family, has enjoyed the personal touches that come with every Murray Lampert home remodel project.</p>
    <p>As a full service contractor (CSLB license <a href="https://www2.cslb.ca.gov/OnlineServices/CheckLicenseII/LicenseDetail.aspx?LicNum=458038">#458038</a>), Murray Lampert specializes in <a href="/san-diego-home-design-services">design</a>, <a href="/san-diego-design-build-contractors">build</a> and <a href="/san-diego-home-remodel-services">remodel</a> projects throughout San Diego. We also offer a number of other <a href="/design-build-services-san-diego">home remodeling and renovation services</a> such as architectural & interior design, outdoor spaces, room additions, green building, and more. Unlike many other contractors, we employ experienced Project Mangers to supervise your project from beginning to completion. This helps ensure that your home project will be completed when promised, as promised, and within budget.</p>
    <p>During construction, keeping your inconvenience to a minimum is a priority and we’ll use our relationships with suppliers, trades people and inspectors to keep your project on time and on budget.</p>
    <p>At <a href="/">Murray Lampert Design, Build, Remodel</a>, we believe in educating our clients not only on the process of home remodeling, but also on how to make sure everything is included. Some homeowners are enticed by companies who substantially undercut other bidders, later to find out there are hidden costs, and items like cabinets, granite, finish work etc. are very low quality, opening up the door for major cost overruns. We will provide you a shopping list and line you up with our preferred vendors to save you money. Everything is spelled out in our scope of work, and we work with you to make sure to stay within budget.</p>
  </div>
  <div class='medium-6 columns'>
    <!-- MLDBR Brand Video -->
    <h3>4 Generations of Design-Build Expertise</h3>
    <div class='spacing'></div>
    <div class="flex-video" id="homepage-video">
      <video autoplay controls>
        <source src="/uploads/assets/videos/legacy-15sec.mp4" type="video/mp4" />Your browser does not support the video tag. Try upgrading your browser to the latest version.
      </video>
    </div>
    <div class='spacing'></div>
    <!-- BBB Torch Award and Tape Measure Images -->
    <p class="torch"><img class="alignright size-full wp-image-1702" src="/uploads/tourch-01b.jpg" title="Murray Lampert BBB Torch Award Winner for Marketplace Ethics" alt="BBB Torch Awards logo" width="460" height="243" />
    <img class="alignright size-full wp-image-1703" src="/uploads/tourch-02.jpg" title="Murray Lampert Design, Build, Remodel example services" alt="tape measure image" width="460" height="193" /></p>
  </div>
  <div class='full'>
    <div class='row'>
    <!-- Start of Team Members Section -->
      <div class='large-12 columns' id='team-members'>
        <div class='four spacing'></div>
        <h3>The Murray Lampert Team</h3>
        <div class='spacing'></div>
      </div>
    </div>
    <div class='row'>
      {% for member in page.members %}
        <div class='small-6 medium-3 large-3 columns'>
          <div class='mod modTeamMember style-2'>
            <div class='member'>
              <img class="avatar" title="{{member.name}} at Murray Lampert Design, Build, Remodel" alt="{{member.name}} profile image" src="{{site.url}}/{{member.avatar}}" />
              <div class='overlay'>
                <ul class='socials'>
                  {% for social in member.socials %}
                    <li>
                      <a href='{{social.url}}'>
                        <i class='{{social.icon_class}}'></i>
                      </a>
                    </li>
                  {% endfor %}
                </ul>
              </div>
            </div>
            <h3>{{member.name}}</h3>
            <p class='position'>{{member.position}}</p>
            <div class='two spacing'></div>
          </div>
        </div>
      {% endfor %}
    </div>
    <div class='two spacing'></div>
  </div>
  <!-- Start of Our Clients Section - REMOVED (see master branch version for code block - line 141) -->
