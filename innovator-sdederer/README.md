# Landingpage-Entwurf — sdederer

Ein Kandidat für die impress.js-Landingpage zu
[#263](https://github.com/arena-hub/arena-hub/issues/263): ein visueller Überblick über
Technologie-Stack, Architektur, Deployment und Features des **ARENA Innovator**.

Laut Ticket entwickelt jeder Entwickler seine eigene Version unabhängig; das Team vergleicht
die Versionen anschließend und wählt eine finale aus.

**Self-contained** — kein CDN, kein `npm install`, kein Build-Step.
[impress.js](https://github.com/impress/impress.js) ist direkt unter `vendor/impress.js`
eingebunden.

## Design

Dunkles „Mission-Control / Systems-Console"-Layout mit Monospace-Akzenten. Acht inhaltliche
Steps plus ein herausgezoomter Überblick am Ende:

1. Cover / Inhalt
2. Features & Idee-Lebenszyklus (Draft → Published → Review → Approved → Progress → Archived)
3. Technologie-Stack (Angular · Spring Boot 4 / Java 25 · PostgreSQL / H2 · Spring Data JPA · MapStruct)
4. Backend im Querschnitt (controller → service → repository → entity, MapStruct Entity↔DTO)
5. Architektur & Monorepo (`apps/frontend`, `apps/backend`, `./run` Dispatcher, per-App CI)
6. Authentifizierung (heute: `default` / `no-auth` — Ziel: GitHub → Keycloak → OAuth2-Proxy → App)
7. Deployment & GitOps (Multi-Stage-Image → Helm → ArgoCD self-heal/prune)
8. Umgebungen & lokale Entwicklung (`./run`, Container-Postgres vs. H2; dev · demo · staging)

Product Owner: Thomas Fritsche. Weitere Teilnehmende sind bewusst nicht gelistet, da sich die
Besetzung ändert.

## Starten

`index.html` direkt im Browser öffnen oder das Verzeichnis mit einem beliebigen statischen
Server ausliefern, z. B.:

```bash
npx serve innovator-sdederer
```

Navigation mit den Pfeiltasten, Leertaste/Bild-ab oder durch Klick auf einen Step.
