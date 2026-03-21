# CLAUDE.md

## Proyecto

Workshop práctico de Claude Code & Claude Cowork. Audiencia mixta: desarrolladores, product managers y power users.

## Estructura

- `sample-project/` — API Express.js con vulnerabilidades intencionales (ejercicios de Code)
- `cowork-workspace/` — Archivos desordenados de empresa ficticia "ClaroPago" (ejercicios de Cowork)
- `guides/` — Guías de referencia (quick-reference, skills, cowork)
- `solutions/` — Soluciones de los ejercicios
- `.claude/skills/` — Skills de ejemplo: code-review, product-spec, meeting-prep, release-notes
- `.claude/agents/` — Agent de ejemplo: security-auditor

## Idioma

Todo el contenido del workshop está en español.

## Convenciones

- El proyecto de ejemplo (`sample-project/`) usa JSON files como almacenamiento — NO requiere Docker ni base de datos
- Las vulnerabilidades en `sample-project/` son intencionales para fines educativos — no corregirlas sin contexto
- Los archivos en `cowork-workspace/` están desordenados a propósito — son material para ejercicios

## Comandos del sample-project

```bash
cd sample-project
npm install
npm run dev    # Servidor en puerto 3000
npm test       # Tests con Jest
```
