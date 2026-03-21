---
name: release-notes
description: Genera notas de release orientadas al usuario a partir de commits y PRs recientes
---

# Generador de Release Notes

Analiza los commits y/o PRs recientes del repositorio y genera notas de release escritas para usuarios finales (no técnicos).

## Proceso

1. **Recopilar cambios**: Lee el historial de git (commits, PRs, tags) del período indicado
2. **Clasificar**: Agrupa los cambios por categoría
3. **Traducir**: Convierte descripciones técnicas en lenguaje accesible para usuarios
4. **Redactar**: Escribe las notas siguiendo el formato definido

## Cómo obtener los cambios

```bash
# Commits desde el último tag
git log $(git describe --tags --abbrev=0)..HEAD --oneline

# O commits de los últimos N días
git log --since="7 days ago" --oneline

# O diferencia entre dos ramas
git log main..develop --oneline
```

## Categorías

| Categoría | Icono | Incluye |
|-----------|-------|---------|
| Nuevas funcionalidades | Nuevo | Features completamente nuevas |
| Mejoras | Mejorado | Mejoras a features existentes |
| Correcciones | Corregido | Bugs arreglados |
| Rendimiento | Optimizado | Mejoras de velocidad o eficiencia |
| Seguridad | Seguridad | Parches de seguridad |

## Formato de salida

```markdown
# Notas de la versión [X.Y.Z]
**Fecha**: [fecha]

## Resumen
[1-2 frases describiendo los cambios más importantes de esta versión]

## Nuevo
- **[Nombre de la feature]**: [Descripción en 1-2 frases de qué puede hacer el usuario ahora que antes no podía]

## Mejorado
- **[Área mejorada]**: [Descripción del cambio desde la perspectiva del usuario]

## Corregido
- **[Qué se arregló]**: [Descripción del problema que experimentaba el usuario y que ya no ocurre]

## Optimizado
- **[Qué es más rápido]**: [Descripción del cambio de rendimiento perceptible]

---

**Versión completa de cambios técnicos**: [enlace al changelog o comparación de commits]
```

## Reglas de redacción

- **Sin jerga técnica**: "Ahora puedes exportar tus datos en CSV" en vez de "Se añadió endpoint GET /api/export con formato CSV"
- **Enfoque en el beneficio**: Describe qué gana el usuario, no qué cambió en el código
- **Verbos activos**: "Ahora puedes...", "Hemos mejorado...", "Ya no ocurre..."
- **Brevedad**: Máximo 2 frases por item
- **Honestidad**: Si un bug era grave, reconócelo sin dramatizar
- Omite cambios internos que no afectan al usuario (refactoring, dependencias, CI)
- Si no hay cambios en una categoría, omite esa sección
