---
title: Event-Kalender
permalink: /kalender/
---

[ics](/kalender.ics)

Die nächsten Auftritte:

{% for item in site.kalender %}
## {{item.title}}

{:.date}
{{item.date_from | date: '%d.%m.%y'}}, {{item.start_time | replace: '-',':'}} - {{item.date_to | date: '%d.%m.%y'}}, {{item.end_time | replace: '-',':'}}

{{item.room}}, {{item.location}}

{{item.content}}

[Link]({{item.url}})
{% endfor %}