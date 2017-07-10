---
title: Our Design, Build, & Remodel Services
layout: default
section_id: services
permalink: /murray-lampert-services
featured-image:
excerpt: From kitchen and bath remodeling to whole house renovations in San Diego, Murray Lampert Design, Build, Remodel. Learn more about our services today!
services_col_1:
- url: /san-diego-room-additions
  title: Room Additions
  desc: Whether you need a new family room, bedroom, or a master suite, Murray Lampert’s San Diego room addition services can deliver what you need.
- url: /san-diego-second-story-addition
  title: Second Stories
  desc: Add space without losing valuable landscaping or yard area with a second story addition. Our goal as a second story contractor in San Diego is to deliver quality, value, and satisfaction.
- url: /san-diego-kitchen-remodeling-services
  title: Kitchen Remodels
  desc: Transform your outdated kitchen with Murray Lampert's custom kitchen remodeling service. Get a new look by replacing cabinets, counters, appliances, fixtures, finishes, and more.
- url: /san-diego-bathroom-remodeling-services
  title: Bathroom Remodels
  desc: Expand and revitalize your master or guest bathroom with our custom San Diego bathroom remodeling services.
- url: /san-diego-green-home-construction
  title: Green Home Construction
  desc: Murray Lampert is proud be to a Green Certified company, and a leading eco-friendly home remodeling contractor in San Diego.
services_col_2:
- url: /major-renovations
  title: Major Renovations
  desc: If your floor plan is outdated, doesn't fit your lifestyle, or provide enough space, a major home renovation may be a great solution.
- url: /3d-architectural-rendering-services
  title: 3D Project Modeling
  desc: Architectural rendering and 3D project modeling allows you to visualize your finished home remodel project before we start work.
- url: /san-diego-architectural-design-services
  title: Architectural Design
  desc: With a licensed architect on staff, our team can create a highly detailed plan that will exceed your expectations.
- url: /san-diego-outdoor-living-space-design
  title: Outdoor Living Spaces
  desc: Custom-built outdoor living spaces allow you to enjoy the beautiful San Diego weather. Outdoor fireplaces, kitchens, and more.
- url: /san-diego-outdoor-living-space-design
  title: Outdoor Kitchens
  desc: Customize your outdoor space with a kitchen, covered patio, fireplace, or a fire pit. Perfect for those weekend cookouts and summer BBQs with friends and family.
other_services:
- url: fa fa-trophy
  title: Design
  desc: Placeat vel itaque perspiciatis sed repellat qui nihil recusandae doloremque
    aperiam necessitatibus aspernatur. illum ad adipisci saepe dolores cumque fugit
    nihil minus. temporibus corporis eos dolore reprehenderit ipsa at neque ab ut
    porro perferendis ex nihilillum ad adipisci saepe dolores cumque fugit nihil minus.
- url: fa fa-compass
  title: Art Direction
  desc: Placeat vel itaque perspiciatis sed repellat qui nihil recusandae doloremque
    aperiam necessitatibus aspernatur. illum ad adipisci saepe dolores cumque fugit
    nihil minus. temporibus corporis eos dolore reprehenderit ipsa at neque ab ut
    porro perferendis ex nihilillum ad adipisci saepe dolores cumque fugit nihil minus.
- url: fa fa-star-half-empty
  title: Branding
  desc: Placeat vel itaque perspiciatis sed repellat qui nihil recusandae doloremque
    aperiam necessitatibus aspernatur. illum ad adipisci saepe dolores cumque fugit
    nihil minus. temporibus corporis eos dolore reprehenderit ipsa at neque ab ut
    porro perferendis ex nihilillum ad adipisci saepe dolores cumque fugit nihil minus.
- url: fa fa-image
  title: Photography
  desc: Placeat vel itaque perspiciatis sed repellat qui nihil recusandae doloremque
    aperiam necessitatibus aspernatur. illum ad adipisci saepe dolores cumque fugit
    nihil minus. temporibus corporis eos dolore reprehenderit ipsa at neque ab ut
    porro perferendis ex nihilillum ad adipisci saepe dolores cumque fugit nihil minus.
- url: fa fa-dot-circle-o
  title: Marketing
  desc: Placeat vel itaque perspiciatis sed repellat qui nihil recusandae doloremque
    aperiam necessitatibus aspernatur. illum ad adipisci saepe dolores cumque fugit
    nihil minus. temporibus corporis eos dolore reprehenderit ipsa at neque ab ut
    porro perferendis ex nihilillum ad adipisci saepe dolores cumque fugit nihil minus.
---

  <div class='medium-6 columns'>
    {% for service in page.services_col_1 %}
      <div class='fadein mod modIconText' data-delay='{{ 300 | times:forloop.index0 }}'>
        <div class='icon-text-simple'>
          <h3><a href='{{site.url}}{{service.url}}'>{{service.title}}</a></h3>
          <p>{{service.desc}}</p>
        </div>
        <div class='two spacing'></div>
      </div>
    {% endfor %}
  </div>
  <div class='medium-6 columns'>
    {% for service in page.services_col_2 %}
      <div class='fadein mod modIconText' data-delay='{{ 300 | times:forloop.index0 }}'>
        <div class='icon-text-simple'>
          <h3><a href='{{site.url}}{{service.url}}'>{{service.title}}</a></h3>
          <p>{{service.desc}}</p>
        </div>
        <div class='two spacing'></div>
      </div>
    {% endfor %}
  </div>

  <div class='full'>
    <div class='row'>
      <div class='large-12 columns'>
        <div class='mod modBoxedTextSlider'>
          <div class='boxes'>
            {% for service in page.other_services %}
              <div class='box' style='background: #f9f9f9;'>
                <i class='{{service.icon_class}}'></i>
                <h4>{{service.title}}</h4>
                <p>{{service.desc}}</p>
              </div>
            {% endfor %}
          </div>
        </div>
      </div>
    </div>
  </div>
