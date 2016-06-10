---
published: false
title: Projekt google-frei
---

# Projekt Google-frei

Webhosting/Server: Uberspace

Kontakte und Kalender: Baikal Server (auf Uberspace)

Android:
Cyanogenmod 11 (f. Motorola Defy+)
 * bereits gerootet und TWRP installiert
 * Anleitung: http://forum.xda-developers.com/showthread.php?t=2515036
 * ohne GAPPS (Google Apps)
 * Tweaks: https://www.androidpit.de/forum/594670/praktische-funktionen-von-cyanogenmod-10-11


## E-Mail

Webmail: Roundcube (Uberspace) --> noch einige Bugs
lokal: Thunderbird
mobil: K9-Mail


## Synchronisation

Kontakte und Kalender auf Android: DAVdroid, Thunderbird-Lightning
 * vor DAVdroid-Installation muss Aufgaben-App installiert werden (wenn gewünscht), sonst ist Synchronisation nicht möglich
  --> Tasks: https://f-droid.org/repository/browse/?fdid=org.dmfs.tasks

Anleitungen:
 * http://blog.natenom.com/2014/01/wechsel-von-tine-2-0-nach-baikal-in-thunderbird-und-auf-android/
 * http://www.rz.uni-greifswald.de/dienste/groupware/synchronisation.html
 * http://my5cent.spdns.de/allgemein/baikal-mit-thunderbird-lightning-synchronisieren.html
Konto-Konfigurations-Urls: https://davdroid.bitfire.at/configuration

CardDAV-Unterstützung für Thunderbird: http://www.sogo.nu/english/downloads/frontends.html
--> ist nicht in offizieller Plugin-Liste --> herunterladen + installieren



Kontakte
--------
 * Google-Kontakte als vcf exportieren
  --> auf Telefon kopieren
  --> importieren
  
  
  
### To do Telefon + NoGoogle

* [x] Kalenderfarben
* [ ] Swype-Tastatur
* [x] Roundcube + CardDAV
* [ ] E-Mail-Weiterleitungen
* [x] IMAP-Download-Begrenzungen auf Telefon --> z. B. 1 Monat
* [x] Geburtstagskalender --> Workaround: py-Script händisch ausführen
* [x] Online-Kalender
* [ ] Thunderbird CardDAV Sync-Upload-Bug
* [ ] force https --> Redirects einrichten
* [x] AgenDAV -> Public URLs korrigieren
* [ ] Cronjobs für DB-Backups
* [ ] E-Mail-Spam-Filter
* [ ] E-Mail-Sortier-Filter
* [ ] MMS-APN --> Einträge selbst erstellen --> außerdem andere APNs löschen (sonst Fehler)
