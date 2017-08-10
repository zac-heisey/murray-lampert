---
title: Sample Featured Project
layout: projects
section_id: projects
permalink: /featured-project
featured-images:
- uploads/gallery/second-stories/Lovett-4-W.jpg
- uploads/gallery/second-stories/Lovett-4-W.jpg
excerpt: This is a sample featured project. More to come!
---

<div class='full'>
  <div class='row'>
    <div class='large-12 columns'>
      <div class='mod modBoxedSlider'>
        <div class='slides'>
          {% for image in page.featured-images %}
            <div class='slide'>
              <img alt="" src="{{image}}" />
            </div>
          {% endfor %}
        </div>
      </div>
    </div>
  </div>
  <div class='spacing'></div>
  <div class='row'>
    <div class='large-8 columns'>
      <h3>{{ page.title }}</h3>
      <p>
        Dolores quibusdam eum itaque est et iusto perspiciatis saepe consequuntur quia occaecati consequatur. dignissimos dolores omnis voluptatum quia totam minus architecto qui assumenda ex aut aut. voluptatem et ex qui iure illum. est rerum eum est corrupti fugiat quas repellendus officia ratione tempore aliquid aspernatur itaque enim. officia dignissimos enim veniam corporis nemo ipsam sit omnis dolorum veniam rerum reprehenderit nihil mollitia. iure tenetur ut dolor et sit maxime culpa Illo minima ipsam nihil quibusdam at omnis magni quae id at magnam quia minus tempore. sit labore consequatur nihil cum minus occaecati. velit ratione quibusdam quisquam voluptas qui quos nesciunt excepturi maiores ut aut ut perferendis quos
      </p>
      <div class='spacing'></div>
      <a class='button small' href=''>Visit website</a>
    </div>
    <div class='large-4 columns'>
      <ul class='info'>
        <li>
          <strong>Client:</strong>
          Lovett
        </li>
        <li>
          <strong>Location:</strong>
          Pacific Beach
        </li>
        <li>
          <strong>Date:</strong>
          June 2013
        </li>
        <li>
          <div class='spacing'></div>
          <a href='' title='previous'>
            <i class='icon-left-open'></i>
          </a>
          <a href='/featured-projects' title='back to work list'>
            <i class='icon-layout'></i>
          </a>
          <a href='' title='next'>
            <i class='icon-right-open'></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
  <div class='four spacing'></div>
</div>
