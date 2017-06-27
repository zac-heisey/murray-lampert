---
title: About Murray Lampert
layout: default
section_id: about
permalink: /about-murray-lampert-design-build-remodel
featured-image:
excerpt: Murray Lampert Design, Build, Remodel of San Diego is your BBB award winning design build contractor with over 35 years experience in home remodeling.
skills:
- title: Home & Architectural Design, 3D Project Rendering, etc.
  percent: 84
- title: Home Building & Construction, Second Stories, Room Additions, etc.
  percent: 95
- title: Home, Kitchen, & Bath Remodeling, Major Renovations, etc.
  percent: 70
- title: Outdoor Spaces, Green Building, Custom Cabinetry, etc.
  percent: 61
members:
- name: Mark Wayne
  position: founder
  desc: consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
    dolore magna aliquam erat volutpat consectetuer sit.
  avatar: images/@stock/member-1.jpg
  socials:
  - icon_class: fa fa-twitter
    url: http://twitter.com
  - icon_class: fa fa-facebook
    url: http://facebook.com
- name: Kate Holms
  position: Creative Director
  desc: consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
    dolore magna aliquam erat volutpat consectetuer sit.
  avatar: images/@stock/member-2.jpg
  socials:
  - icon_class: fa fa-twitter
    url: http://twitter.com
  - icon_class: fa fa-facebook
    url: http://facebook.com
  - icon_class: fa fa-dribbble
    url: http://dribbble.com
- name: Tom Hason
  position: Designer
  desc: consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
    dolore magna aliquam erat volutpat consectetuer sit.
  avatar: images/@stock/member-3.jpg
  socials:
  - icon_class: fa fa-twitter
    url: http://twitter.com
  - icon_class: fa fa-facebook
    url: http://facebook.com
  - icon_class: fa fa-tumblr
    url: http://tumblr.com
- name: Lily Whrem
  position: Developer
  desc: consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
    dolore magna aliquam erat volutpat consectetuer sit.
  avatar: images/@stock/member-4.jpg
  socials:
  - icon_class: fa fa-twitter
    url: http://twitter.com
  - icon_class: fa fa-facebook
    url: http://facebook.com
clients:
- images/@stock/client-grey-1.png
- images/@stock/client-grey-2.png
- images/@stock/client-grey-3.png
- images/@stock/client-grey-4.png
- images/@stock/client-grey-5.png
- images/@stock/client-grey-6.png
---

  <div class='medium-6 columns'>
    <h3>Murray Lampert Design, Build, Remodel Since 1975</h3>
    <div class='spacing'></div>
    <p>Founded by Murray Lampert in 1975, our company specializes in<a href="/san-diego-home-design-serivces/"> residential remodeling</a>, <a href="/remodel/">home renovation</a> and construction. For more than three generations, Murray Lampert Design, Build, Remodel has been building relationships with San Diego homeowners to become <a href="/testimonials/">one of San Diego County’s most trusted home remodelers</a>. Over these many years, we have transformed thousands of homes and earned our reputation for innovative design, quality craftsmanship, affordable prices and timely completion. It’s likely that someone in your neighborhood, even your own family, has enjoyed the personal touches that come with every Murray Lampert home remodel project.</p>
    <p>As a full service contractor (CSLB license <a href="https://www2.cslb.ca.gov/OnlineServices/CheckLicenseII/LicenseDetail.aspx?LicNum=458038">#458038</a>), Murray Lampert specializes in <a href="/san-diego-home-design-services">design</a>, <a href="/san-diego-design-build-contractors">build</a> and <a href="/san-diego-home-remodel-services">remodel</a> projects throughout San Diego. We also offer a number of other <a href="/murray-lampert-services">home remodeling and renovation services</a> such as architectural & interior design, outdoor spaces, room additions, green building, and more. Unlike many other contractors, we employ experienced Project Mangers to supervise your project from beginning to completion. This helps ensure that your home project will be completed when promised, as promised, and within budget.</p>
    <p>During construction, keeping your inconvenience to a minimum is a priority and we’ll use our relationships with suppliers, trades people and inspectors to keep your project on time and on budget.</p>
    <p>At <a href="/">Murray Lampert Design, Build, Remodel</a>, we believe in educating our clients not only on the process of home remodeling, but also on how to make sure everything is included. Some homeowners are enticed by companies who substantially undercut other bidders, later to find out there are hidden costs, and items like cabinets, granite, finish work etc. are very low quality, opening up the door for major cost overruns. We will provide you a shopping list and line you up with our preferred vendors to save you money. Everything is spelled out in our scope of work, and we work with you to make sure to stay within budget.</p>
  </div>
  <div class='medium-6 columns'>
    <h3>Our Home Design, Build, and Remodel Expertise</h3>
    <div class='spacing'></div>
    <div class='mod modBarGraph'>
      <ul class='bars'>
        {% for skill in page.skills %}
          <li>
            <h4 style=''>
              {{skill.title}}
              <strong>{{skill.percent}}%</strong>
            </h4>
            <p class='highlighted' data-percent='{{skill.percent}}'></p>
          </li>
        {% endfor %}
      </ul>
    </div>
    <!-- BBB Torch Award and Tape Measure Images -->
    <p class="torch"><img class="alignright size-full wp-image-1702" src="http://murraylampert.com/wp-content/uploads/tourch-01b.jpg" alt="tourch awards" width="460" height="243" />
    <img class="alignright size-full wp-image-1703" src="http://www.murraylampert.com/wp-content/uploads/tourch-02.jpg" alt="tourch-02" width="460" height="193" /></p>
  </div>
  <div class='full'>
    <div class='row'>
      <div class='large-12 columns'>
        <div class='four spacing'></div>
        <h3>The team</h3>
        <div class='spacing'></div>
      </div>
    </div>
    <div class='row'>
      {% for member in page.members %}
        <div class='small-6 medium-3 large-3 columns'>
          <div class='mod modTeamMember style-2'>
            <div class='member'>
              <img class="avatar" alt="" src="{{site.url}}/{{member.avatar}}" />
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
            <p>{{member.desc}}</p>
            <div class='two spacing'></div>
          </div>
        </div>
      {% endfor %}
    </div>
    <div class='two spacing'></div>
  </div>
  <div class='full'>
    <div class='row'>
      <div class='large-12 columns'>
        <h3>Our clients</h3>
        <div class='spacing'></div>
        <div class='mod modClients' data-slides_to_show='5'>
          <div class='clients'>
            {% for client in page.clients %}
              <div><img alt="" src="{{client}}" /></div>
            {% endfor %}
          </div>
        </div>
      </div>
    </div>
  </div>
