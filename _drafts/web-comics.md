---
layout: page
title: Web-Comics
permalink: /web-comics/
---

Die Mozilla-Gemeinschaft hat das ganz wundervolle Projekt Webmaker ins Leben gerufen und dort unter Anderem Thimble mit einem Tutorial zum Erstellen von Web-Comics zur Verfügung gestellt.
{% for post in site.categories.web-comics %}
  * {{ post.date | date_to_string }} &raquo; [ {{ post.title }} ]({{ post.url }})
   {{ post.excerpt }} <a href="{{ site.baseurl }}{{ post.url }}" class="read-more">weiterlesen...</a>
{% endfor %}