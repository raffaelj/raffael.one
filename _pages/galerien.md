---
title: Foto- und Bildergalerien
permalink: /galerie/
---

{% comment %}
funktioniert, wenn in md album_folder und album_image definiert sind

{% for item in site.gallery %}
<p class="gallery_album_preview"><a href="{{ item.url }}">
 <img src="{{site.edata}}{{site.galpath}}{{item.album_folder}}/thumbs/{{item.album_image}}" alt="{{ item.title }}" title="{{ item.title }}" />
 <span>{{ item.title }}</span>
</a></p>
{% endfor %}

{% endcomment %}

{% comment %}
funktioniert, wenn in md alles aus yml steht

{% for item in site.gallery %}
<p class="gallery_album_preview"><a href="{{ item.url }}">
 <img src="{{site.edata}}{{site.galpath}}{{item.album_folder}}/thumbs/{{item.images[0].image}}" alt="{% if item.images[0].title %}{{item.images[0].title}}{% else %}Bild{% endif %}" title="{% if item.images[0].title %}{{item.images[0].title}}{% else %}Bild{% endif %}" />
 <span>{{ item.title }}</span>
</a></p>
{% endfor %}

{% endcomment %}

{% comment %}
<p class="gallery_album_preview"><a href="{{ g.url }}">
 <img src="{{site.edata}}{{site.galpath}}{{g.album_folder}}/thumbs/{{g.images[1].image}}" alt="{{ g.title }}" title="{{ g.title }}" />
 <span class="title">{{ g.title }}</span>
 {% if g.description %}<span class="description">{{ g.description }}</span>{% endif %}
</a></p>
{% endcomment %}


<div class="center">
{% for item in site.data.gallery %}
 {% if item[1].title == null %}
  {% for subitem in item.[1] %}
   {% if subitem[1].title == null %}
    <p>zu viele Verschachtelungen - das muss ich noch korrigieren</p>
   {% else %}
    {% assign g = subitem[1] %}{% include album_preview.html gallery=g %}
   {% endif %}
  {% endfor %}
 {% else %}
  {% assign g = item[1] %}{% include album_preview.html gallery=g %}
 {% endif %}
{% endfor %}
</div>