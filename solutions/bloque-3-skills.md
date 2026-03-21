# Solución — Bloque 3: Skills

## Ejercicio 3.1: Crear un Skill

### Pista A — Desarrolladores: test-generator

#### Archivo creado: `.claude/skills/test-generator/SKILL.md`

```markdown
---
name: test-generator
description: Genera tests unitarios completos con Jest para funciones JavaScript, cubriendo happy path, edge cases y errores
---

# Test Generator

## Contexto
Genera tests unitarios completos para el código proporcionado usando Jest.

## Proceso
1. Lee el archivo o función indicada
2. Identifica todos los caminos posibles:
   - Happy path (comportamiento esperado)
   - Valores límite (0, null, undefined, arrays vacíos, strings vacíos)
   - Entradas inválidas (tipos incorrectos, formatos inesperados)
   - Casos de error (excepciones, fallos de I/O)
3. Genera tests siguiendo el patrón AAA (Arrange, Act, Assert)
4. Agrupa con `describe` por función/método
5. Nombra cada test de forma descriptiva en español

## Formato de salida
- Archivo: `[nombre-original].test.js` en el directorio `tests/`
- Mínimo 3 tests por función
- Incluir setup/teardown si es necesario

## Convenciones
- Usar `jest.mock()` solo para dependencias externas (fs, http, etc.)
- No mockear funciones del mismo módulo
- Usar `beforeEach` para setup compartido
- Assertions específicas (`toBe`, `toEqual`, `toThrow`) en vez de genéricas (`toBeTruthy`)

## Ejemplo

Entrada: "Genera tests para src/routes/products.js"

Salida esperada:
- Tests para GET /products (lista, paginación)
- Tests para GET /products/:id (existe, no existe)
- Tests para POST /products (con auth, sin auth, datos inválidos)
- Tests para PUT /products/:id (actualización válida, parcial)
- Tests para DELETE /products/:id (con auth, sin auth)
- Tests para GET /products/search (búsqueda válida, inyección)
```

#### Cómo probarlo
```bash
claude
> /test-generator sample-project/src/routes/products.js
```

---

### Pista B — Producto: release-notes

#### Archivo creado: `.claude/skills/my-release-notes/SKILL.md`

```markdown
---
name: my-release-notes
description: Genera notas de release para usuarios finales a partir de commits recientes, en lenguaje no técnico
---

# Release Notes Generator

## Proceso
1. Lee los commits recientes con `git log --oneline -20`
2. Clasifica cada cambio en: Nuevo, Mejorado, Corregido
3. Reescribe cada entrada en lenguaje de usuario
4. Genera el documento final

## Formato
# Novedades — [fecha]

## Nuevo
- **[Nombre visible]**: [qué puede hacer el usuario ahora]

## Mejorado
- **[Área]**: [qué cambió para mejor]

## Corregido
- **[Problema]**: [qué ya no ocurre]

## Reglas
- Sin jerga técnica
- Máximo 2 frases por item
- Omitir cambios internos (refactoring, CI, dependencias)
- Enfocarse en el beneficio para el usuario
```

---

### Pista C — Power Users: doc-summarizer

#### Archivo creado: `.claude/skills/doc-summarizer/SKILL.md`

```markdown
---
name: doc-summarizer
description: Resume documentos largos extrayendo puntos clave, decisiones y action items
---

# Resumidor de Documentos

## Proceso
1. Lee el documento o documentos indicados
2. Identifica: puntos clave, decisiones, datos relevantes, action items
3. Genera un resumen estructurado

## Formato de salida
# Resumen: [título del documento]

## Puntos clave
- [punto 1]
- [punto 2]

## Decisiones
- [decisión tomada y contexto]

## Datos relevantes
| Dato | Valor | Contexto |
|------|-------|----------|

## Action items
- [ ] [tarea] — [responsable si se menciona]

## Lo que falta o está incompleto
- [información que el documento no cubre]

## Reglas
- Máximo 1 página de resumen por cada 10 de documento original
- Preservar datos numéricos exactos
- Distinguir hechos de opiniones
- Si hay contradicciones en el documento, señalarlas
```

---

## Ejercicio 3.2: Iterar y mejorar

### Proceso de iteración
1. Probar el skill con un caso real
2. Identificar qué falta o qué sobra en el output
3. Ajustar las instrucciones del SKILL.md
4. Volver a probar

### Mejoras típicas
- Añadir una sección de "Ejemplos" con input/output esperado
- Ser más específico en el formato de salida
- Añadir restricciones ("no incluyas X", "siempre incluye Y")
- Ajustar el tono (más formal, más conciso, etc.)
