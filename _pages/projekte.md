---
title: Projekte
permalink: /projekte/
---

Über die Jahre hat sich einiges angesammelt. Da es schade wäre, alte Projekt-Webseiten zu löschen, gibt es hier eine Auswahl an Archiv-Seiten.

{% assign pages = site.pages | where: "archiv", "true" | sort: "date_from" %}
{% for item in pages reversed %}
{: .clear}
## [{{ item.title }}]({{ item.url }})
    {% if item.header %}

![Header-Grafik]({{site.imgpath}}/vita_header/{{ item.header }})
    {% endif %}
    {% if item.description %}
{{ item.description | markdownify }}
    {% else %}
{{ item.content | markdownify | strip_html | truncatewords: 40 }}
    {% endif %}
[weiterlesen...]({{ item.url }})
{% endfor %}
