---
layout: default
title: Sitemap
description: Murray Lampert Design, Build, Remodel in San Diego sitemap.
permalink: "/sitemap/"
---

<section class="rich-text">

  <div class="lock">

  <h3>Pages</h3>

  <ul>
  {% for page in site.pages %}
    {% if page.title and page.title != "San Diego Home Remodeling Blog" and page.title != "Thank You" %}
    <li>
      <a href="{{ page.url }}">{{ page.title }}</a>
    </li>
    {% endif %}
  {% endfor %}
  </ul>

  <hr>

  <h3>Featured Projects</h3>

  <ul>
  {% for project in site.featured-projects %}
    <li>
      <a href="{{ project.url }}">{{ project.title }}</a>
    </li>
  {% endfor %}
  </ul>

  <hr>

  <h3>Service Locations</h3>

  <ul>
  {% for location in site.service-locations %}
    <li>
      <a href="{{ location.url }}">{{ location.title }}</a>
    </li>
  {% endfor %}
  </ul>

  <hr>

  <h3>Blog</h3>

  <ul>
    <li>
      <a href="{{ site.url }}/blog">San Diego Home Remodel</a>
    </li>
  {% for post in site.posts %}
    <li>
      <a href="/{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
  </ul>

  </div>

</section>
