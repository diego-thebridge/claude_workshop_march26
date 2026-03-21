# Guía Completa de Skills en Claude Code

## ¿Qué son los Skills?

Los Skills son instrucciones reutilizables que enseñan a Claude cómo realizar tareas específicas de forma consistente. Piensa en ellos como **plantillas de expertise** que puedes crear, compartir con tu equipo y reutilizar en cualquier proyecto.

A diferencia de un prompt que escribes cada vez, un Skill vive en un archivo y se invoca con un comando. Esto garantiza que Claude siga siempre el mismo proceso, con la misma calidad.

## ¿Por qué usar Skills?

| Sin Skills | Con Skills |
|-----------|-----------|
| Repites el mismo prompt largo cada vez | Un comando corto invoca todo el proceso |
| Cada persona del equipo pide cosas distintas | Estándar compartido para todos |
| Resultados inconsistentes | Formato y calidad consistentes |
| Conocimiento en la cabeza de una persona | Conocimiento codificado y versionado |

## Anatomía de un Skill

### Estructura de archivos
```
.claude/skills/mi-skill/
└── SKILL.md              # Archivo principal (obligatorio)
```

Un Skill puede ser un solo archivo `SKILL.md` o una carpeta con archivos adicionales de contexto.

### Formato del SKILL.md

```markdown
---
name: mi-skill
description: Descripción concisa — Claude la usa para decidir cuándo aplicar el skill
---

# Instrucciones

## Contexto
[Explica el contexto y el propósito del skill]

## Proceso
[Pasos que Claude debe seguir]

## Formato de salida
[Cómo debe estructurar la respuesta]

## Ejemplos
[Ejemplos de entrada y salida esperada]
```

### Campos del frontmatter

| Campo | Obligatorio | Descripción |
|-------|-------------|-------------|
| `name` | Sí | Nombre para invocar el skill |
| `description` | Sí | Descripción breve — Claude la usa para matching |

## Crear tu primer Skill — Paso a paso

### 1. Identificar la tarea repetitiva

Hazte estas preguntas:
- ¿Qué tarea hago (o hace mi equipo) una y otra vez?
- ¿Qué instrucciones le daría a alguien nuevo para hacerlo bien?
- ¿Qué errores comunes quiero evitar?

### 2. Crear el directorio

```bash
mkdir -p .claude/skills/mi-skill
```

### 3. Escribir el SKILL.md

Ejemplo — Skill de generación de tests:

```markdown
---
name: test-generator
description: Genera tests unitarios para funciones JavaScript/TypeScript siguiendo las convenciones del equipo
---

# Test Generator

## Contexto
Genera tests unitarios completos para el código proporcionado usando Jest.

## Proceso
1. Lee el archivo o función indicada
2. Identifica todos los paths posibles (happy path, edge cases, errores)
3. Genera tests siguiendo el patrón AAA (Arrange, Act, Assert)
4. Incluye tests para:
   - Comportamiento esperado (happy path)
   - Valores límite
   - Entradas inválidas
   - Casos de error

## Formato de salida
- Un archivo de test por cada archivo fuente
- Nombre: `[archivo].test.js`
- Agrupar tests con `describe` por función
- Cada test con nombre descriptivo en español

## Convenciones
- Usar `jest.mock()` solo para dependencias externas
- No mockear funciones del mismo módulo
- Mínimo 3 tests por función
```

### 4. Probar el Skill

```bash
claude
> /test-generator src/routes/products.js
```

### 5. Iterar

Ajusta las instrucciones basándote en los resultados. El Skill mejora conforme lo refinas.

## Skills por perfil

### Para Desarrolladores

| Skill | Propósito |
|-------|-----------|
| `code-review` | Revisión de código con estándares del equipo |
| `test-generator` | Generación de tests unitarios |
| `security-audit` | Auditoría de seguridad OWASP |
| `refactor` | Refactoring guiado con criterios específicos |
| `api-docs` | Documentación de APIs |

### Para Product Managers

| Skill | Propósito |
|-------|-----------|
| `product-spec` | Generación de specs de producto |
| `release-notes` | Notas de release para usuarios |
| `pr-summary` | Resumen no-técnico de PRs |
| `user-story` | Generación de user stories |
| `competitive-analysis` | Análisis competitivo estructurado |

### Para cualquier rol

| Skill | Propósito |
|-------|-----------|
| `meeting-prep` | Preparación de reuniones |
| `doc-summary` | Resumen de documentación |
| `email-draft` | Borradores de emails profesionales |
| `report-generator` | Generación de informes |

## Compartir Skills con el equipo

Los Skills en `.claude/skills/` se versionan con Git. Esto significa que:

1. **Cualquier cambio se revisa en PR** — como cualquier otro código
2. **Todo el equipo usa la misma versión** — consistencia garantizada
3. **Puedes hacer rollback** — si un cambio no funciona, vuelves atrás
4. **Historial completo** — sabes quién cambió qué y por qué

### Workflow recomendado

```
1. Alguien crea o modifica un Skill
2. Abre un PR con el cambio
3. El equipo lo revisa (¿las instrucciones son claras? ¿el formato es útil?)
4. Se mergea y todos lo tienen
```

## Skills personales vs de proyecto

| Ubicación | Alcance | Uso |
|-----------|---------|-----|
| `.claude/skills/` | Proyecto | Compartido con el equipo via Git |
| `~/.claude/skills/` | Personal | Solo en tu máquina, todos tus proyectos |

Los Skills personales son ideales para preferencias individuales (formato de emails, estilo de escritura). Los de proyecto son para estándares del equipo.

## Buenas prácticas

1. **Sé específico en la descripción** — Claude la usa para decidir cuándo aplicar el Skill
2. **Incluye ejemplos** — los ejemplos de entrada/salida mejoran mucho la calidad
3. **Define el formato de salida** — estructura clara = resultados predecibles
4. **Itera rápido** — prueba, ajusta, prueba de nuevo
5. **No sobrediseñes** — empieza simple y añade complejidad solo si la necesitas
6. **Documenta el "por qué"** — explica por qué se hace de cierta forma, no solo el qué
