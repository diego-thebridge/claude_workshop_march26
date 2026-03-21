---
name: product-spec
description: Genera especificaciones de producto estructuradas a partir de una idea o requisito
---

# Generador de Especificaciones de Producto

Genera una especificación de producto completa y estructurada a partir de una descripción de feature o requisito.

## Proceso

1. **Entender**: Analiza la descripción proporcionada e identifica el problema a resolver
2. **Investigar**: Si hay código o documentación relevante en el proyecto, léelo para contexto
3. **Estructurar**: Genera la spec siguiendo el formato definido
4. **Completar**: Asegúrate de que no falten secciones críticas

## Formato de salida

```markdown
# Spec: [Nombre de la Feature]

## Problema
[Qué problema resuelve esta feature. Por qué es importante ahora.]

## Objetivo
[Qué queremos lograr. Métrica de éxito principal.]

## Usuarios afectados
[Quién se beneficia. Segmentos y personas.]

## User Stories

### Como [rol], quiero [acción], para [beneficio]
**Criterios de aceptación:**
- [ ] Criterio 1
- [ ] Criterio 2
- [ ] Criterio 3

[Repetir para cada user story relevante]

## Flujo principal
1. El usuario [acción]
2. El sistema [respuesta]
3. ...

## Casos borde
- ¿Qué pasa si [situación inusual]?
- ¿Qué pasa si [error]?
- ¿Qué pasa si [límite]?

## Dependencias
- [Equipo/sistema/feature] necesita [qué cosa]
- [Integración externa] requiere [acceso/API/etc.]

## Fuera de alcance
- [Lo que NO incluye esta versión]
- [Lo que se deja para una iteración futura]

## Métricas de éxito
| Métrica | Actual | Objetivo | Cómo se mide |
|---------|--------|----------|-------------|
| [KPI 1] | [valor] | [valor] | [herramienta] |
| [KPI 2] | [valor] | [valor] | [herramienta] |

## Riesgos
| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|-------------|---------|-----------|
| [Riesgo 1] | Alta/Media/Baja | Alto/Medio/Bajo | [Plan] |

## Timeline estimado
- **Diseño**: X semanas
- **Desarrollo**: X semanas
- **QA**: X semanas
- **Rollout**: [Estrategia: flag, % gradual, etc.]

## Preguntas abiertas
- [ ] [Pregunta que necesita respuesta antes de empezar]
```

## Reglas

- Sé específico — evita generalidades como "mejorar la experiencia"
- Los criterios de aceptación deben ser verificables (sí/no)
- Incluye siempre la sección "Fuera de alcance" para gestionar expectativas
- Las métricas deben ser medibles con herramientas existentes
- Si falta información, lista las preguntas abiertas en vez de inventar
