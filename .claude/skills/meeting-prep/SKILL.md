---
name: meeting-prep
description: Prepara reuniones con agenda estructurada, puntos de discusión y plantillas de seguimiento
---

# Preparación de Reuniones

Prepara una reunión de forma estructurada a partir del contexto proporcionado (tema, asistentes, notas previas, documentos).

## Proceso

1. **Analizar contexto**: Lee cualquier archivo o nota proporcionada sobre la reunión
2. **Identificar objetivos**: Determina qué decisiones o resultados se esperan
3. **Estructurar agenda**: Crea una agenda con tiempos asignados
4. **Preparar puntos**: Identifica temas clave y preguntas a resolver
5. **Generar plantillas**: Crea plantillas de notas y seguimiento

## Formato de salida

```markdown
# Preparación: [Nombre de la reunión]
**Fecha**: [fecha]
**Duración**: [duración estimada]
**Asistentes**: [lista]

---

## Objetivo de la reunión
[1-2 frases claras sobre qué se debe lograr]

## Agenda

| Tiempo | Tema | Responsable | Objetivo |
|--------|------|-------------|----------|
| 00:00 - 00:05 | Apertura y contexto | [nombre] | Alinear al equipo |
| 00:05 - 00:20 | [Tema 1] | [nombre] | [Decidir/Informar/Discutir] |
| 00:20 - 00:35 | [Tema 2] | [nombre] | [Decidir/Informar/Discutir] |
| 00:35 - 00:45 | Próximos pasos y cierre | Todos | Asignar action items |

## Puntos clave a discutir

### [Tema 1]
- **Contexto**: [resumen breve]
- **Pregunta a resolver**: [pregunta concreta]
- **Opciones sobre la mesa**:
  - Opción A: [descripción] — Pros: [x] / Contras: [y]
  - Opción B: [descripción] — Pros: [x] / Contras: [y]

### [Tema 2]
- **Contexto**: [resumen breve]
- **Datos relevantes**: [métricas o hechos]
- **Pregunta a resolver**: [pregunta concreta]

## Preguntas preparadas
1. [Pregunta que necesita respuesta en esta reunión]
2. [Pregunta de seguimiento de reunión anterior]
3. [Pregunta sobre bloqueantes o riesgos]

---

## Plantilla de notas (para usar durante la reunión)

### Decisiones tomadas
- [ ]

### Action items
| Tarea | Responsable | Fecha límite |
|-------|-------------|-------------|
| | | |

### Temas pendientes para próxima reunión
-

---

## Plantilla de email de seguimiento

Asunto: Resumen y action items — [Nombre de la reunión] [fecha]

Hola equipo,

Resumen de la reunión de hoy:

**Decisiones:**
- [decisión 1]

**Próximos pasos:**
- [nombre]: [tarea] — para [fecha]

**Próxima reunión**: [fecha]

Saludos,
[nombre]
```

## Reglas

- La agenda debe sumar el tiempo total de la reunión (ni más ni menos)
- Cada punto de agenda necesita un objetivo claro (Decidir / Informar / Discutir)
- Si hay notas de reuniones anteriores, extrae action items pendientes
- Las preguntas deben ser concretas y respondibles en la reunión
- Incluye siempre la plantilla de notas y email de seguimiento
