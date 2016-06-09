---
title: Kursangebote
permalink: /kursangebote-workshops-seminare
---

{% for kurs in site.kursangebote %}
<div class="collection kursangebote">
<h2>{{ kurs.title }}</h2>
{% if kurs.label %}
{% for label in kurs.label %}
<span class="label">{{label}}</span>
{% endfor %}
{% endif %}
{{ kurs.content }}
</div>
{% endfor %}