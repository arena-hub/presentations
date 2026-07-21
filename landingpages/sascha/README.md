# Landingpage

impress.js-Präsentation mit einem visuellen Überblick über den **ARENA Innovator**
(Technologie-Stack, Deployment/Infrastruktur, Authentifizierung, Architektur).

> Kontext: [arena-hub/arena-hub#263](https://github.com/arena-hub/arena-hub/issues/263).
> Jede:r Entwickler:in baut eine eigene Version in einem eigenen Verzeichnis
> (`landing-page/<name>/`); das Team wählt anschließend eine finale Variante aus.

## Ausführen

Rein statisch, **keine externen CDN-Abhängigkeiten** — impress.js ist unter
`vendor/impress.js` eingecheckt. Wegen der `<script src>`-Einbindung sollte die Seite
über einen lokalen Webserver (statt `file://`) geöffnet werden:

```bash
cd apps/frontend/public/landing
python -m http.server 8000
# → http://localhost:8000
```

Alternativ: `npx serve .` oder die Datei direkt in IntelliJ/VS-Code-Live-Preview öffnen.

## Navigation

| Taste | Aktion |
|-------|--------|
| `→` / `Leertaste` | nächster Step |
| `←` | vorheriger Step |
| `Esc` | Gesamtübersicht (Zoom-out) |
| `Tab` | zwischen Steps springen |

## Inhalt / Steps

1. Titel
2. Was ist der Innovator? (Ideen · Voting · Review-Workflow)
3. Monorepo-Struktur (#251)
4. Frontend — Angular 21, Standalone, Runtime-Config
5. Backend — Spring Boot 4 / Java 25, Schichtung, Envers
6. Idea-Lifecycle & Permissions
7. Auth — Keycloak + oauth2-proxy, GitHub IdP (#255/#256)
8. CI/CD — pfad-gefilterte GitHub-Actions-Pipelines
9. Deployment — ArgoCD / Helm / Sealed Secrets (GitOps)
10. Ingress & Request-Flow (nginx → frontend/backend → PostgreSQL)
11. Lokale Entwicklung
12. Stack-Überblick
13. Outro

## Quellen

Inhalte zusammengetragen aus `README.md`, `CLAUDE.md` (root + `apps/*`), `MIGRATION.md`
sowie dem GitOps-Repo [`arena-hub/hub-gitops-config`](https://github.com/arena-hub/hub-gitops-config)
(ArgoCD-Applications, Helm-Values, Ingress, oauth2-proxy).

## Vendored

- `vendor/impress.js` — [impress.js](https://github.com/impress/impress.js) v2.0.0, MIT-Lizenz.
