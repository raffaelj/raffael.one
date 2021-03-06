---
title: To Do - new website
sitemap: false
---
* Inhaltsverzeichnis
{:toc}

## Technisches

- [ ] related post als include
- [ ] related galleries als include
- [x] Video-Links in embed konvertieren
  - [x] Youtube-Links in p.embed (kramdown `{: .embed}`) --> JS
  - [x] Vimeo-Links in p.embed (kramdown `{: .embed}`) --> JS
  - [x] Opt-In --> inkl. Vorschau schwierig
- Bild-Positionierung noch nicht ideal, da kramdown <img> in <p> verpackt
- Galerie auslagern
  - evtl. als eigene jekyll-Instanz und dann als submodule laden
  - evtl. MediaGoblin oder andere Bildverwaltungssoftware
  - [x] [Script für NConvert](https://github.com/raffaelj/image-processing-jekyll-batch-nconvert) --> Stapelverarbeitung thumbs + medium + large + filelist.yml + album.md
- [x] Dropdown für Kursangebote

## Style

- [x] neues Logo
- [ ] Meta-Button ist über Inhaltsverzeichnis transparent --> z-index
- evtl. Custom CSS für inhaltlich getrennte Bereiche
  - [ ] Tanz
  - [ ] Coding + Design
  - [ ] Kunst

## Artikel, die ich noch schreiben will

### Tutorials

- [ ] LED-Hula-Hoop-Reifen selbst bauen
- [ ] Projekt Google-frei - Doku
  - [ ] Uberspace + qmail + Roundcube + Baikal Server + AgenDAV
  - [ ] Thunderbird Lightning + Inverse SOGo Connector + MoreFunctionsForAddressBook
  - [ ] Cyanogenmod ohne Google-Konto und ohne PlayStore + F-Droid + DAVdroid + ICSdroid + K-9 Mail + Aufgaben + AnySoftKeyboard (inkl. German Language Pack)
  - [ ] weitere Dienste... Openstreetmap...
  - [ ] Alternativen zu Google Docs, Dropbox...

### Gedanken, Themen, Philosophisches, Positionen

- [ ] Was bedeutet Bildung, bzw. Lernen für mich?
- [ ] Meine Einstellung zu Open Source und Creative Commons
- [ ] Wahrheit, Wahrheiten und Blickwinkel

{% comment %}
## To-Do-Punkte, die in einzelnen Artikeln (posts) aufgelistet sind

{% for post in site.posts %}
  {% for todo in post.todo %}
* [{{ post.title | truncate: 15, "..."  }}]({{ post.url }}) - {{todo}}
  {% endfor %}
{% endfor %}
{% endcomment %}

## To-Do-Punkte, die in einzelnen Seiten (pages) aufgelistet sind

{% for post in site.pages %}
  {% for todo in post.todo %}
* [{{ post.title | truncate: 15, "..."  }}]({{ post.url }}) - {{todo}}
  {% endfor %}
{% endfor %}


## To-Do-Punkte, die in Collections aufgelistet sind

{% comment %}
{% for c in site.collections %}
  {{ c | jsonify }}
  {% assign post = c[1] %}
  {{ post | jsonify }}
  {% for todo in post %}
* [{{ post.title | truncate: 15, "..."  }}]({{ post.url }}) - {{todo}}
  {% endfor %}
{% endfor %}
{% endcomment %}

{% for collection in site.collections %}
### {{ collection.label}}

{% comment %}
{{collection | jsonify }}
{% endcomment %}

 {% for doc in collection.docs %}
  {% if doc.title %}
   {% for todo in doc.todo %}
* [{{ doc.title | truncate: 15, "..."  }}]({{ doc.url }}) - {{todo}}
   {% endfor %}
  {% else %}
  {% if sub.title %}
   {% for sub in doc.docs %}
   {% for todo in sub.todo %}
* [{{ sub.title | truncate: 15, "..."  }}]({{ sub.url }}) - {{todo}}
   {% endfor %}
   {% endfor %}
  {% else %}
   {% for subsub in sub.docs %}
   {% for todo in subsub.todo %}
* [{{ subsub.title | truncate: 15, "..."  }}]({{ subsub.url }}) - {{todo}}
   {% endfor %}
   {% endfor %}
  {% endif %}
  {% endif %}
 {% endfor %}


{% endfor %}