---
layout: page
title: 3Div
permalink: /3div/
---

Wir untersuchen Internetseiten und ihre Quellcodes auf zwei- und dreidimensionaler Ebene. Auf spielerische Weise werden Inhalte bearbeitet und eingefügt um anschließend eigene 3D-Modelle zu erstellen. Diese werden dann wiederum als Internetseiten sichtbar und veröffentlicht.

3Div ist ein 2D-Editor um schicke 3D-HTML-Modelle zu erstellen, die nur für die Entdecker sichtbar sind, welche sich Quellcodes von Internetseiten mit der 3D-Untersuchung von Firefox anschauen.

Der [3Div-Quellcode](https://github.com/raffaelj/3div) ist Open Source und liegt bei Github.

{% for post in site.categories.3div %}
  * {{ post.date | date_to_string }} &raquo; [ {{ post.title }} ]({{ post.url }})
   {{ post.excerpt }} <a href="{{ site.baseurl }}{{ post.url }}" class="read-more">weiterlesen...</a>
{% endfor %}