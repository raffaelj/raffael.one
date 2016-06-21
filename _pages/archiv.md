---
title: Archive
permalink: /archiv/
---

Über die Jahre hat sich einiges angesammelt. Da es schade wäre, alte Projekt-Webseiten zu löschen, gibt es nun eine Auswahl an Archiv-Seiten.

{% assign archiv = site.pages | where: "archiv", "true" %}
{% for item in archiv %}
* [{{ item.title }}]({{ item.url }})
{% endfor %}
