---
title: To Do - new website
layout: post
todo:
 - collections in to do mit aufnehmen
---
* Inhaltsverzeichnis
{:toc}

## Technisches

- [ ] related post als include
- Bild-Positionierung noch nicht ideal, da kramdown <img> in <p> verpackt
- Galerie auslagern
  - evtl. als eigene jekyll-Instanz und dann als submodule laden
  - evtl. MediaGoblin oder andere Bildverwaltungssoftware
  - evtl. Script für XnView --> Stapelverarbeitung Thumbs + mittel + groß + filelist.yml

## Style

- [x] neues Logo
- Custom CSS für inhaltlich getrennte Bereiche
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

## To-Do-Punkte, die in einzelnen Artikeln (posts) aufgelistet sind
    
<ul>
{% for post in site.posts %}
  {% for todo in post.todo %}
  <li><a href="{{site.baseurl}}{{post.url}}">{{post.title | truncate: 15, "..." }}</a> > {{ todo }}</li>
  {% endfor %}
{% endfor %}
</ul>

## To-Do-Punkte, die in einzelnen Seiten (pages) aufgelistet sind
    
<ul>
{% for post in site.pages %}
  {% for todo in post.todo %}
  <li><a href="{{site.baseurl}}{{post.url}}">{{post.title | truncate: 15, "..." }}</a> > {{ todo }}</li>
  {% endfor %}
{% endfor %}
</ul>
