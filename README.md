# www.raffael.one
Neubau meiner veralteten Internetpräsenz mit jekyll und gh-pages
Nach zwei liegengebliebenen Seitenumbauten, die auf jekyll Now basierten, starte ich nochmal von vorne

work in progress...

* Inhaltsverzeichnis
{:toc}

## Zielstellung

### Konfiguration

- Entwicklung lokal und auf Github
- Backend:
  - prose.io
  - Texteditor + Upload/Commit
- entweder automatischer Push zu Uberspace oder alles auf Github
- solange Github+prose als Backend in Frage kommt, keine jekyll-Plugins

### Strukturanforderungen

- [ ] evtl. Blog(s) in verschiedenen Kategorien (Code, Kunst, Gedanken...)
  - [ ] mit eigenen Feeds
- [x] Custom Post Types --> collections
  - [ ] Vita-Einträge
  - [x] Blog-Einträge --> _posts
  - [ ] Bilder/Mediadaten-Einträge
  - [x] Bildergalerien --> collection + _data + lokale Bildkonvertierung + Upload auf externen Server
  - [x] Pressespiegel --> collection
  - [x] Kursangebote --> collection
  - [x] Referenzen Design --> collection
  - [x] Website-Archive --> pages im Ordner archiv
- [x] Custom Taxonomies --> yaml-Frontmatter --> I :heart: metadata
  
### eventuelle Features

- [ ] multilingual en + de
- [ ] Print-CSS
- [ ] PDF-Export
- [ ] eine Art Lerntagebuch/Reflexion --> Was habe ich in dem jeweiligen Projekt, der Situation gelernt? --> in yaml-Frontmatter

### Grundsätzliches

- die Seite muss ohne Javascript funktionieren --> nur zum Aufhübschen
- HTML5 + CSS3 (mit Fallbacks oder zumindest ansehnlichem Layout in alten Browsern)
- responsive Webdesign

### Migration folgender Seiten:

- [ ] raffaeljesche.de
- [ ] raffaeljesche.de/spaeter-arbeiten
  - [x] Inhalte
  - [x] Bildergalerien
  - [ ] Screenshots - Original-Seite
- [ ] raffaeljesche.de/malusphaere
  - [x] Inhalte
  - [x] Bildergalerien
  - [ ] Screenshots - Original-Seite
- [ ] raffaeljesche.de/perlenbaum
  - [ ] Bildergalerie
  - [ ] Screenshots - Original-Seite
- [ ] raffaeljesche.de/pausenraunen
  - [x] Inhalte
  - [x] Bildergalerien
  - [ ] Screenshots - Original-Seite
- [x] mein-wunderland.eu
  - [x] Inhalte
  - [x] Bildergalerien
  - [ ] Screenshots - Original-Seite
- [ ] verstyler.de
  - [.] Inhalte
  - [ ] Bildergalerien
  - [ ] Screenshots - Original-Seite
- [x] multiple.verstyler.de
  - [x] Inhalte
  - [x] Bildergalerie
  - [ ] Screenshots - Original-Seite
  
und als Extra:

- [x] ueber-lebenskunst.org/camp --> seit Jahren offline :-(
  - [x] Inhalte
  - [x] Bildergalerie --> war nie auf dem Camp-Blog


### kein Tracking externer Seiten durch Nachladen von Bildern und Scripten

- Video/Media-Einbettung
  - [ ] Youtube
  - [ ] Vimeo
  - [ ] ...
- Donate-Buttons
  - [.] flattr
  - [ ] Paypal ?
  - [ ] ...
- [.] Creative Commons-Hinweise
- Social Sharing
  - [ ] Facebook
  - [ ] Twitter
  - [ ] g+
  - [ ] ...

### aufräumen

- [ ] Crosspostings/Dopplungen zusammenführen
- [ ] tote Links entfernen
- [ ] fehlende Beschreibungen zu Vita-Einträgen hinzufügen
- [ ] Copyright-Hinweise/Urheberschaft zu allen/den meisten Bildern/Inhalten

### Visualisierung von Abhängigkeiten meiner Tätigkeiten

- [ ] evtl. d3.js + Metadaten
- [ ] Icons, Labels, Farben für Metadaten
- [x] Sortierung/Gruppierung in sinnvolle Überschriften (Navigation)

### Sonstiges

- so Open Source und Creative Commons wie möglich
- einfach erweiterbar
- Dokumentation meiner Arbeit an der neuen Seite
  - z. B. Social Sharing ohne Javascript und ohne Tracking
- [x] Hosting bei coolen Anbietern, wie Uberspace oder Github
- nebenbei ein paar neue Sprachen und Syntaxen lernen
  - liquid
  - scss
  - yaml
  - markdown
  - batch
  - bash
- nebenbei mit Codes experimentieren
  - inline SVG
  - d3.js
  - ...

## Fallstricke (sollten dokumentiert werden)

- viele Filter nur in Variablenaufruf und nicht in Schleifenbeginn möglich
- Server neustarten nach Änderungen in `_config.yml`
- von jekyll bereitgestellte Links wie `{{ site.url }}` beginnen mit Schrägstrich
  - wenn ich Dateien im _site-Ordner direkt öffne, funktionieren alle relativen Links nicht mehr
  - stattdessen muss immer Server ohne endenen Schrästrich laufen
- für gh-pages branches muss immer `{{ site.baseurl }}` definiert werden --> nervt und zerstört den Effekt der Einfachheit von Links in Markdown
- inkrementelle Regeneration nicht mit gh-pages möglich
  - deshalb funktioniert mein sonst eleganter Bilder-Galerie-Workaround nicht (bei jedem -serve werden alle Bilder kopiert --> ewige Ladezeiten)
- Array- und Variablen-Handling ist ungewohnt, speziell die Wiederverwendung von Variableninhalten um z. B. `$url = $domain.$subfolder."/".$file;` zu generieren
  - `{% capture var_name %}{{ site.url }}{{ site.baseurl }}{{ page.inFrontMatterDefinedSubfolder }}/{{ filename }}{% endcapture %}`
- nur pages in Root-Verzeichnis sind automatisch über domain.de/pagename aufrufbar
  - pages in eigenem Ordner, da übersichtlicher --> in page.md muss permalink aktiv sein
- kramdown `{:toc}` funktioniert nur für Überschriften, die sich direkt im Dokument befinden --> Überschriften von dynamisch angelegten Posts zum Thema lassen sich so leider nicht dynamisch in ein Inhaltsverzeichnis pressen
- von Wordpress gewohnte category und tag pages lassen sich nicht automatisch erstellen (zumindest nicht ohne Plugin) und müssen bei Bedarf als eigenständige Seiten angelegt werden
- site.pages != site.posts --> verschiedene globale Variablen zur Verfügung für diese beiden Seitentypen
- 4 Leerzeichen vor Text bedeuten, dass der Inhalt mit `<pre><code>...</code></pre>` dargestellt wird
- um Markdown innerhalb von HTML-Tags rendern zu können muss vorher `{::options parse_block_html="true" /}` gesetzt werden
  - `includes` sind davon auch betroffen, sodass eingerücktes HTML in include-Datei als `<pre><code>...inkludierter Code...</code></pre>` dargestellt wird --> hier muss davor `{::options parse_block_html="false" /}` und dahinter wieder `{::options parse_block_html="true" /}` gesetzt werden
- include-Dateiein bekommen kein yaml-Frontmatter

