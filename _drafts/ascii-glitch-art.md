---
layout: page
title: Ascii Glitch Art
permalink: /ascii-glitch-art/
---

Mit Text lässt sich wunderbar spielen, wenn man Wörter und Buchstaben als Baukasten betrachtet. Zusammengesetzt erhalten die Bausteine neue Bedeutungen, die wiederum zu Bildern werden. Andersherum kann jedes digitale Bild auch als Zeichenkette im Texteditor geöffnet und bearbeitet werden, wodurch zufällige und interessante Effekte (Glitches) entstehen.

{% for post in site.categories.ascii-glitch-art %}
  * {{ post.date | date_to_string }} &raquo; [ {{ post.title }} ]({{ post.url }})
   {{ post.excerpt }} <a href="{{ site.baseurl }}{{ post.url }}" class="read-more">weiterlesen...</a>
{% endfor %}