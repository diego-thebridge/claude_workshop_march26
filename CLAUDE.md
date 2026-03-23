# CLAUDE.md

## Proyecto

Workshop práctico "Claude Code — De Analizar a Enviar". Audiencia mixta: desarrolladores, product managers y power users. Arco narrativo: Plan Mode → Security Hardening → PR → Skills → Cowork.

## Estructura

- `sample-project/` — API Express.js con vulnerabilidades intencionales (ejercicios de Code)
- `cowork-workspace/` — Archivos desordenados de empresa ficticia "ClaroPago" (ejercicios de Cowork)
- `guides/` — Guías de referencia (quick-reference, skills, cowork)
- `solutions/` — Soluciones de los ejercicios
- `.claude/skills/` — Skills de ejemplo: code-review, product-spec, meeting-prep, release-notes
- `.claude/agents/` — Agent de ejemplo: security-auditor
- `examples/` — Configuración avanzada de hooks y permisos (importada de repo 1)
- `INSTRUCTOR-GUIDE.md` — Guía del instructor con timing, talking points y fallbacks

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
