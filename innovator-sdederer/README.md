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

Dunkles „Mission-Control / Systems-Console"-Layout mit Monospace-Akzenten. Sieben inhaltliche
Steps plus ein herausgezoomter Überblick am Ende:

1. Cover / Inhalt
2. Feature-Highlights (Ideen · Voting · Review-Workflow)
3. Technologie-Stack (Angular · Spring Boot / Java 25 · PostgreSQL / H2)
4. Architektur & Monorepo (`apps/frontend`, `apps/backend`)
5. Authentifizierung (OAuth2-Proxy · Keycloak · GitHub IdP)
6. Deployment & Infrastruktur (Podman/Docker · ArgoCD · GitOps)
7. Umgebungen & CI/CD (dev · demo · staging)

## Starten

`index.html` direkt im Browser öffnen oder das Verzeichnis mit einem beliebigen statischen
Server ausliefern, z. B.:

```bash
npx serve innovator-sdederer
```

Navigation mit den Pfeiltasten, Leertaste/Bild-ab oder durch Klick auf einen Step.
