# presentations

In diesem Repo werden die Präsentationen rund um den **ARENA Innovator** veröffentlicht.
Auslieferung erfolgt über **GitHub Pages** aus `main` (Root):
<https://arena-hub.github.io/presentations/>

Die Root-Seite (`index.html`) ist ein **Dokumentations-Hub für Stakeholder**, der alle
Präsentationen als Kacheln verlinkt.

## Struktur

```
index.html            Doku-Hub (Übersicht, verlinkt alle Präsentationen)
Kickoff/              Kickoff-Präsentation (impress.js)
landingpages/         Landing-Page-Varianten zu Issue #263 (impress.js)
  sascha/
  jroesner/
  v2/
```

Alle Präsentationen sind statisch und self-contained (impress.js ist jeweils unter
`vendor/` bzw. `js/` eingecheckt — keine CDN-Abhängigkeiten).

## Neue Präsentation ergänzen

1. Neues Unterverzeichnis mit der statischen Präsentation anlegen (self-contained).
2. Eine Kachel in `index.html` ergänzen, die darauf verlinkt.

## Lokal ansehen

```bash
python -m http.server 8000
# → http://localhost:8000
```
