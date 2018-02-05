---
title: Careers at Murray Lampert
permalink: "/careers-at-murray-lampert"
layout: default
section_id: careers
featured-image: 
excerpt: Murray Lampert works with the best in home design, construction, architecture,
  and more. Want to join the team? Visit our Careers page to see current openings.
---

{% for job in site.job-openings %}
  <h2><a href="{{ job.application-url }}">{{ job.title }}</a></h2>
  <p><strong>Posted On:</strong> {{ job.date | date_to_long_string}}</p>
  <p>{{ job.job-description }}</p>
  <a href="{{ job.application-url }}">View Full Job Description & Apply Here</a>

  ---
{% endfor %}
