# Guia del Instructor

> Notas de timing, talking points, transiciones y fallbacks para cada bloque.

---

## Antes del workshop

### Preparacion tecnica
- [ ] Clonar el repo en tu maquina
- [ ] `cd sample-project && npm install && npm test` — confirmar que pasa
- [ ] Tener Claude Code abierto y funcionando
- [ ] Tener Claude Desktop con Cowork listo (carpeta `cowork-workspace/`)
- [ ] Tener `gh` (GitHub CLI) autenticado para la demo de PR
- [ ] Preparar una rama con los fixes ya hechos (fallback para Bloque 2)
- [ ] Tener la URL del repo abierta en el navegador

### Preparacion de fallbacks
```bash
# Crear rama de fallback con fixes pre-hechos (hacer esto antes del workshop)
git checkout -b fallback/security-fixes
# ... hacer los fixes manualmente o con Claude ...
git push origin fallback/security-fixes
git checkout main
```

---

## Bloque 0 — Bienvenida y Setup (10 min)

### Timing
| Min | Actividad |
|-----|-----------|
| 0-3 | Presentacion personal + contexto del workshop |
| 3-5 | Tabla ecosistema Claude (Chat vs Code vs Cowork) |
| 5-10 | Verificacion de setup — pedir que levanten la mano si tienen problemas |

### Talking points
- "Los tres usan el mismo cerebro. La diferencia es donde trabajan y que pueden tocar."
- "Hoy vamos a recorrer un flujo completo: analizar, arreglar, enviar y automatizar."
- No perderse en explicaciones del ecosistema — el workshop es practico.

### Si hay problemas de setup
- Pedir a quienes tienen todo funcionando que ayuden a sus vecinos.
- Si alguien no puede instalar Claude Code, que observe las demos y haga los ejercicios de Cowork/Skills.
- Maximo 5 minutos en troubleshooting. Seguir adelante.

---

## Bloque 1 — Plan Mode: Auditoria de Seguridad (20 min)

### Timing
| Min | Actividad |
|-----|-----------|
| 10-12 | Explicar Plan Mode (Shift+Tab, modo lectura) |
| 12-20 | Demo: auditoria de seguridad en vivo |
| 20-30 | Ejercicio: participantes hacen su propia auditoria |

### Demo script
1. `cd sample-project && claude`
2. Presionar `Shift+Tab` — mostrar que el prompt cambia a `plan>`
3. Pegar el prompt de auditoria
4. Mientras Claude trabaja, narrar: "Mirad como lee archivo por archivo..."
5. Cuando termine, resaltar las vulnerabilidades criticas

### Talking points
- **Al activar Plan Mode**: "Esto es read-only. Nadie se pone nervioso."
- **Cuando encuentre la primera vulnerabilidad**: "JWT secret hardcodeado... esto es un clasico."
- **Al encontrar `new Function()`**: "Esto es inyeccion de codigo. Un atacante podria ejecutar lo que quisiera."
- **Para PMs que observan**: "Un PM podria hacer exactamente esto para entender cualquier API."

### Transicion al Bloque 2
> "Tenemos un informe de seguridad detallado con 8-9 vulnerabilidades. Pero los informes no arreglan nada. Vamos a arreglarlo. En vivo."

### Fallback
Si Claude tarda mas de 8 minutos en la demo, interrumpir y mostrar las vulnerabilidades de la solucion (`solutions/bloque-2-plan-mode.md`).

---

## Bloque 2 — Security Hardening (25 min)

### Timing
| Min | Actividad |
|-----|-----------|
| 30-32 | Explicar el plan: salir de Plan Mode, dar prompt comprehensivo |
| 32-55 | Demo live: Claude arreglando vulnerabilidades |

### Demo script
1. Presionar `Shift+Tab` para salir de Plan Mode (volver a `>`)
2. Pegar el prompt completo de hardening (del EXERCISES.md)
3. Narrar mientras Claude trabaja:
   - "Esta leyendo auth.js para entender el JWT..."
   - "Ahora instala bcrypt — va a pedir permiso..."
   - "Mira como cambia users.js para hashear passwords..."
   - "Ahora arregla la inyeccion de codigo en products.js..."
4. Cuando ejecute `npm test`, celebrar si pasa

### Talking points clave
- **Al pegar el prompt**: "Un solo prompt, 8 fixes. Observad como lo descompone."
- **Cuando pida permiso para npm install**: "Claude pide permiso para acciones destructivas. Esto es seguridad."
- **Cuando modifique multiples archivos**: "Nota que entiende las dependencias entre archivos."
- **Cuando pasen los tests**: "Tests verdes. Esto es trabajo real, no una demo de chat."

### Transicion al Bloque 3
> "Tenemos codigo seguro con tests verdes. En cualquier workflow real, el siguiente paso es enviarlo. Vamos a crear un Pull Request sin salir de la terminal."

### Fallback (CRITICO)
Si Claude se atasca, tarda mas de 20 min, o los tests no pasan:
```bash
# Opcion A: Cambiar a la rama pre-preparada
git checkout fallback/security-fixes
npm test  # Mostrar que pasa
```
O simplemente avanzar al Bloque 3 con lo que se haya logrado. No bloquear el workshop.

---

## Bloque 3 — Crear Pull Request (15 min)

### Timing
| Min | Actividad |
|-----|-----------|
| 55-60 | Demo: crear rama, commit, PR |
| 60-70 | Ejercicio: participantes crean su propio PR |

### Demo script
1. Pegar el prompt de PR (del EXERCISES.md)
2. Mostrar como Claude:
   - Crea la rama
   - Hace un commit con mensaje descriptivo
   - Pushea
   - Crea el PR con `gh pr create`
3. Abrir la URL del PR en el navegador
4. Mostrar la descripcion formateada en GitHub

### Talking points
- **Al crear la rama**: "Todo desde la terminal. Sin cambiar de ventana."
- **Al ver el PR en GitHub**: "Mira la descripcion — seccion tecnica Y seccion para no-tecnicos."
- **Para PMs**: "Podeis pedir a Claude que revise cualquier PR y os lo explique."

### Transicion al Bloque 4
> "Acabamos de analizar, arreglar, testar y enviar. Pero lo hicimos manualmente. Que pasa si queremos que todo el equipo haga auditorias con los mismos criterios? Aqui es donde entran los Skills."

### Fallback
Si `gh` no esta autenticado o falla el push, mostrar el commit local y explicar que el PR seria el paso final. No perder tiempo con troubleshooting de Git.

---

## Bloque 4 — Skills: La Nueva Gran Evolucion (30 min)

### Timing
| Min | Actividad |
|-----|-----------|
| 70-72 | El problema: "que pasa la proxima semana?" |
| 72-75 | Que son los Skills (mostrar estructura) |
| 75-80 | Demo: usar code-review + meeting-prep |
| 80-95 | Hands-on: crear tu propio Skill (3 tracks) |
| 95-100 | La revelacion: Skills + Git = conocimiento compartido |

### El momento "revelacion" — ENSAYAR ESTO

Este es el momento mas importante del workshop. La secuencia es:

1. **Plantear el problema** (emocional): "Acabamos de gastar 25 minutos en un audit. La proxima semana otro dev sube codigo. Hace lo mismo? No."
2. **Mostrar la solucion** (simple): Abrir un SKILL.md en vivo. "Es un archivo Markdown. Solo instrucciones en lenguaje natural."
3. **Demostrar que funciona** (practico): Ejecutar code-review sobre un archivo. Mostrar output estructurado.
4. **Hands-on** (personal): Cada uno crea su propio Skill.
5. **La revelacion** (estrategico): "Esto vive en Git. Cuando haces push, todo el equipo lo tiene. Es conocimiento institucional versionado."

### Talking points
- **Al mostrar SKILL.md**: "No es codigo. Un PM podria escribir esto."
- **Al ejecutar code-review**: "Siempre el mismo formato. Siempre los mismos criterios. Consistencia."
- **Durante hands-on**: Circular entre participantes. Ayudar a los que se atascan.
- **En la revelacion**: "Imaginad un repo donde cada practica del equipo esta documentada como un Skill. El onboarding de un nuevo miembro seria instantaneo."

### Transicion al Bloque 5
> "Hemos visto que Claude trabaja con codigo, con Git, con Skills. Pero no todo el trabajo del mundo es codigo. Vamos a ver como Claude trabaja con documentos, datos y archivos de negocio."

---

## Bloque 5 — Cowork (15 min)

### Timing
| Min | Actividad |
|-----|-----------|
| 100-104 | Demo 1: organizar notas caoticas |
| 104-108 | Demo 2: completar informe trimestral |
| 108-110 | Mencion de conectores |
| 110-115 | Exploracion libre de participantes |

### Demo script
1. Abrir Claude Desktop con `cowork-workspace/`
2. Pegar prompt de organizar notas
3. Mientras trabaja: "Mirad como cruza 5 archivos con formatos distintos..."
4. Luego el informe trimestral: "Tiene 11 TODOs. Claude va a rellenarlos con datos reales de otras carpetas."

### Talking points
- **Al organizar notas**: "Estas notas son un desastre real. Mezclan personal y profesional, hay cosas sin fecha..."
- **Al completar el informe**: "Esto es el momento wow. Cruza CSV de gastos, notas de reunion, analisis competitivo."
- **Conectores**: "Y esto con archivos locales. Imaginad conectado a Drive y Gmail."

### Transicion al Bloque 6
> "Empezamos en la terminal analizando codigo. Arreglamos bugs, enviamos un PR, automatizamos con Skills, y acabamos generando informes de negocio. Claude trabaja donde tu trabajas."

---

## Bloque 6 — Tips y Cierre (5 min)

### Timing
| Min | Actividad |
|-----|-----------|
| 115-116 | Hooks (mostrar JSON) |
| 116-117 | Permisos por directorio |
| 117-118 | Pipes de Unix |
| 118-120 | Recapitulacion + preguntas |

### Recapitulacion final (ENSAYAR)

Mostrar la tabla del arco completo:

> "Hoy hicimos en 2 horas lo que antes llevaba dias:
> - **Analizar**: Auditoria completa de seguridad sin tocar nada
> - **Ejecutar**: 8 vulnerabilidades arregladas en una sesion
> - **Enviar**: PR completo con descripcion para tecnicos y no-tecnicos
> - **Automatizar**: Skills reutilizables para que todo el equipo trabaje igual
> - **Expandir**: Informes de negocio generados desde datos dispersos
>
> Esto no es el futuro. Es hoy."

---

## Notas generales

### Ritmo
- Si un bloque va bien y hay engagement, estirar un poco.
- Si algo falla o se atasca, no insistir. Usar fallback y seguir.
- Los Bloques 2 y 4 son los mas importantes. Proteger su tiempo.

### Audiencia mixta
- Siempre dar contexto de por que algo importa para no-devs.
- En los bloques de codigo, hacer pause para explicar que esta pasando.
- En Cowork, involucrar a los PMs y power users activamente.

### Errores en vivo
- Si Claude hace algo inesperado, convertirlo en momento de aprendizaje.
- "Esto es lo que pasa cuando el prompt no es suficientemente especifico..."
- Nunca culpar a la herramienta. Siempre reencuadrar como oportunidad de aprender.
