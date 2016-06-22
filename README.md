# raffael.one
Neubau meiner veralteten Internetpräsenz mit jekyll und gh-pages
Nach zwei liegengebliebenen Seitenumbauten, die auf jekyll Now basierten, starte ich nochmal von vorne

work in progress...


### Migration folgender Seiten:

- [ ] raffaeljesche.de
- [ ] raffaeljesche.de/spaeter-arbeiten
  - [x] Inhalte
  - [.] Bildergalerien
  - [ ] Screenshots - Original-Seite
- [ ] raffaeljesche.de/malusphaere
  - [x] Inhalte
  - [ ] Bildergalerien
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
  - [ ] Inhalte
  - [ ] Bildergalerien
  - [ ] Screenshots - Original-Seite
- [x] multiple.verstyler.de
  - [x] Inhalte
  - [x] Bildergalerie
  - [ ] Screenshots - Original-Seite
  
und als Extra:

- [x] ueber-lebenskunst.org/camp --> seit Jahren offline :-(
  - [x] Inhalte
  - [ ] Bildergalerie --> war nie auf dem Camp-Blog


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
- kramdown `{:toc}` funktioniert nur für Überschriften, die sich direkt im Dokument befinden --> Überschriften von dynamisch angelegten Posts zum Thema lassen sich so leider nicht dynamisch in ein Inhaltsverzaichnis pressen
- von Wordpress gewohnte category und tag pages lassen sich nicht automatisch erstellen (zumindest nicht ohne Plugin) und müssen bei Bedarf als eigenständige Seiten angelegt werden
- site.pages != site.posts --> verschiedene globale Variablen zur Verfügung für diese beiden Seitentypen
- 4 Leerzeichen vor Text bedeuten, dass der Inhalt mit `<pre><code>...</code></pre>` dargestellt wird
- um Markdown innerhalb von HTML-Tags rendern zu können muss vorher `{::options parse_block_html="true" /}` gesetzt werden
  - `includes` sind davon auch betroffen, sodass eingerücktes HTML in include-Datei als `<pre><code>...inkludierter Code...</code></pre>` dargestellt wird --> hier muss davor `{::options parse_block_html="false" /}` und dahinter wieder `{::options parse_block_html="true" /}` gesetzt werden
- include-Dateiein bekommen kein yaml-Frontmatter

