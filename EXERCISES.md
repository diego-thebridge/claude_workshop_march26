# Ejercicios del Workshop: Claude Code & Cowork

> **Duración total**: 120 minutos
> **Audiencia**: Desarrolladores, Product Managers, Power Users
> **Requisitos previos**: Ver [README.md](README.md) para setup completo

---

## Tabla de Contenidos

- [Bloque 1: Introduccion — El ecosistema Claude (15 min)](#bloque-1-introduccion--el-ecosistema-claude)
- [Bloque 2: Claude Code — Plan Mode y Exploracion (20 min)](#bloque-2-claude-code--plan-mode-y-exploracion)
- [Bloque 3: Skills — El superpoder compartido (30 min)](#bloque-3-skills--el-superpoder-compartido)
- [Bloque 4: Claude Cowork — Para toda la organizacion (25 min)](#bloque-4-claude-cowork--para-toda-la-organizacion)
- [Bloque 5: GitHub Integration (15 min)](#bloque-5-github-integration)
- [Bloque 6: Tips avanzados y cierre (15 min)](#bloque-6-tips-avanzados-y-cierre)

---

## Bloque 1: Introduccion — El ecosistema Claude

**Duracion**: 15 minutos
**Dificultad**: ⭐
**Audiencia**: Todos los participantes

### Contexto: Tres herramientas, un mismo cerebro

Claude se presenta en tres formatos principales, cada uno disenado para un contexto de uso diferente:

| Herramienta | Que es | Para quien | Donde se usa |
|-------------|--------|------------|--------------|
| **Claude Chat** | Conversacion con IA en el navegador | Todos | [claude.ai](https://claude.ai) |
| **Claude Code** | Agente de programacion en la terminal | Desarrolladores | Terminal / CLI |
| **Claude Cowork** | Asistente de trabajo integrado con archivos locales | Toda la organizacion | Claude Desktop |

**Claude Chat** es la interfaz web clasica. Sirve para preguntas rapidas, brainstorming y tareas puntuales. No tiene acceso a tu sistema de archivos local.

**Claude Code** es un agente que vive en tu terminal. Puede leer, modificar y crear archivos en tu proyecto. Ejecuta comandos, corre tests, hace commits de Git. Piensa en el como un desarrollador junior muy rapido que trabaja a tu lado.

**Claude Cowork** es la version de escritorio para trabajo de conocimiento. Accede a carpetas locales, organiza documentos, genera informes, y se conecta a servicios como Google Drive o Gmail. Es el asistente para las personas que no viven en la terminal.

**La clave**: los tres usan el mismo modelo de lenguaje (Claude). La diferencia es el contexto al que tienen acceso y las acciones que pueden ejecutar.

### Cuando usar cada uno

| Necesidad | Herramienta recomendada |
|-----------|------------------------|
| Pregunta rapida sobre codigo | Claude Chat o Claude Code |
| Refactorizar un modulo entero | Claude Code |
| Analizar la arquitectura de un proyecto | Claude Code (Plan Mode) |
| Organizar notas de una reunion | Claude Cowork |
| Generar un informe a partir de datos | Claude Cowork |
| Crear un PR con tests | Claude Code |
| Resumir un documento largo | Claude Chat o Claude Cowork |
| Revisar PRs sin saber programar | Claude Code (Plan Mode) |

---

### Ejercicio 1.1: Verifica tu setup

**Objetivo**: Confirmar que tienes las herramientas necesarias instaladas y funcionando.

**Tiempo**: 5 minutos

#### Track Desarrolladores (Claude Code)

1. Abre tu terminal.

2. Verifica que Claude Code esta instalado:
   ```bash
   claude --version
   ```
   Deberias ver un numero de version (por ejemplo, `1.x.x`).

3. Verifica que el repositorio esta clonado:
   ```bash
   cd claude_workshop_march26
   ls
   ```
   Deberias ver las carpetas `sample-project/`, `cowork-workspace/`, `guides/`, etc.

4. Verifica que el proyecto de ejemplo funciona:
   ```bash
   cd sample-project
   npm install
   npm test
   ```

5. Inicia Claude Code en el directorio del workshop:
   ```bash
   cd ..
   claude
   ```
   Deberias ver el prompt interactivo de Claude Code.

6. Escribe un saludo simple para confirmar que funciona:
   ```
   Hola, dime en que directorio estamos trabajando
   ```

#### Track Producto / Power Users (Claude Cowork)

1. Abre **Claude Desktop** en tu computadora.

2. Verifica que tienes acceso a Cowork:
   - En la pantalla principal, busca la opcion para abrir una carpeta o workspace.
   - Si ves la opcion "Cowork" o "Open folder", tu plan lo soporta.

3. Selecciona la carpeta del workshop:
   - Navega hasta `claude_workshop_march26/cowork-workspace/`
   - Seleccionala como tu carpeta de trabajo.

4. Escribe un saludo simple:
   ```
   Hola, que archivos puedes ver en esta carpeta?
   ```

#### Resultado esperado

- Los desarrolladores deberian tener Claude Code respondiendo en su terminal.
- Los usuarios de Cowork deberian ver que Claude identifica los archivos en `cowork-workspace/`.
- Si algo fallo, levanta la mano. Es mejor resolver problemas de setup ahora.

#### Problemas comunes

- **"claude: command not found"**: Necesitas instalar Claude Code. Ejecuta `npm install -g @anthropic-ai/claude-code` o sigue la [guia de instalacion](https://docs.anthropic.com/en/docs/claude-code).
- **"npm test" falla**: Asegurate de tener Node.js 18+ instalado (`node --version`).
- **Cowork no aparece en Claude Desktop**: Verifica que tienes un plan Pro, Team o Enterprise. Actualiza Claude Desktop a la ultima version.

#### Para saber mas

- [Instalacion de Claude Code](https://docs.anthropic.com/en/docs/claude-code/getting-started)
- [Descarga de Claude Desktop](https://claude.ai/download)
- [Documentacion de Cowork](https://support.claude.com/en/articles/13345190-get-started-with-cowork)

---

## Bloque 2: Claude Code — Plan Mode y Exploracion

**Duracion**: 20 minutos
**Dificultad**: ⭐⭐
**Audiencia**: Desarrolladores (producto observa y aprende)

### Contexto: Que es Plan Mode

Plan Mode es un modo de operacion de Claude Code en el que el agente **analiza y planifica sin ejecutar cambios**. Es como pedirle a un consultor que revise tu proyecto y te de un informe, sin que toque nada.

Para activar Plan Mode:
- Usa la combinacion de teclas `Shift+Tab` dentro de Claude Code para alternar entre modo normal y Plan Mode.
- Veras el indicador cambiando de `>` a `plan>` en el prompt.
- En Plan Mode, Claude puede leer archivos, analizar codigo y generar recomendaciones, pero **no modificara ningun archivo**.

Esto es especialmente util para:
- Entender un proyecto nuevo o heredado.
- Hacer auditorias de seguridad sin riesgo.
- Que personas no tecnicas comprendan la arquitectura de un codebase.

---

### Ejercicio 2.1: Analisis de arquitectura y seguridad

**Objetivo**: Usar Plan Mode para analizar el proyecto `sample-project/` e identificar vulnerabilidades de seguridad sin modificar nada.

**Tiempo**: 10 minutos

#### Instrucciones

1. Abre Claude Code en el directorio del proyecto de ejemplo:
   ```bash
   cd claude_workshop_march26/sample-project
   claude
   ```

2. Activa Plan Mode presionando `Shift+Tab`. El prompt deberia cambiar a `plan>`.

3. Escribe el siguiente prompt:
   ```
   Analiza la arquitectura completa de este proyecto. Quiero entender:
   1. Cual es la estructura de archivos y carpetas
   2. Que endpoints tiene la API y que hace cada uno
   3. Como maneja la autenticacion
   4. Como almacena los datos (archivos JSON, base de datos, etc.)
   5. Identifica al menos 3 vulnerabilidades de seguridad o malas practicas

   No modifiques ningun archivo. Solo analiza y reporta.
   ```

4. Observa como Claude:
   - Lee los archivos del proyecto uno por uno.
   - Construye un mapa mental de la arquitectura.
   - Identifica patrones y problemas.

5. Revisa el informe que genera. Deberia incluir:
   - Un mapa de la estructura del proyecto.
   - Lista de endpoints con sus metodos HTTP.
   - Analisis del manejo de JWT y autenticacion.
   - Vulnerabilidades concretas (secretos hardcodeados, falta de validacion, etc.).

#### Resultado esperado

Claude deberia generar un informe detallado que incluya al menos estos hallazgos:

- La estructura del proyecto con `src/`, `data/`, `tests/`.
- Endpoints REST como `GET /api/products`, `POST /api/auth/login`, etc.
- Problemas de seguridad como:
  - Secretos JWT hardcodeados o en texto plano.
  - Falta de rate limiting.
  - Validacion de entrada insuficiente.
  - Ausencia de HTTPS forzado.

#### Para personas de producto

Aunque no escribas codigo, este ejercicio muestra algo poderoso: puedes pedirle a Claude Code que te explique cualquier proyecto en lenguaje llano. Prueba variaciones como:

```
Explicame este proyecto como si fuera un product manager que necesita
entender que hace para escribir la documentacion del producto.
```

#### Problemas comunes

- **Claude intenta modificar archivos**: Asegurate de estar en Plan Mode (el prompt debe mostrar `plan>`). Presiona `Shift+Tab` si no lo esta.
- **El analisis es muy superficial**: Se especifico en tu prompt. Pidele que mire archivos concretos si no los detecto.
- **Claude pide permiso para ejecutar comandos**: En Plan Mode no deberia necesitarlo. Si lo hace, di "no" y reformula tu pregunta.

#### Para saber mas

- [Documentacion de Plan Mode](https://docs.anthropic.com/en/docs/claude-code/core-features#plan-mode)
- [Mejores practicas para analisis de codigo](https://docs.anthropic.com/en/docs/claude-code/best-practices)

---

### Ejercicio 2.2: Generacion de documentacion tecnica

**Objetivo**: Usar Claude Code para generar documentacion tecnica completa del proyecto, demostrando que Claude entiende profundamente el codigo.

**Tiempo**: 10 minutos

#### Instrucciones

1. Sigue en el directorio `sample-project/` con Claude Code abierto.

2. Puedes quedarte en Plan Mode o cambiar al modo normal (si quieres que Claude cree el archivo de documentacion).

3. Escribe el siguiente prompt:
   ```
   Genera documentacion tecnica completa para este proyecto en formato Markdown.
   La documentacion debe incluir:

   1. Descripcion general del proyecto
   2. Requisitos y como instalar
   3. Estructura del proyecto (arbol de archivos explicado)
   4. Documentacion de cada endpoint de la API:
      - Metodo HTTP y ruta
      - Parametros requeridos
      - Ejemplo de request y response
      - Codigos de error
   5. Modelo de datos (estructura de los JSON)
   6. Autenticacion: como funciona, como obtener un token
   7. Variables de entorno necesarias

   Crea el archivo como docs/API.md
   ```

4. Revisa la documentacion generada. Verifica que:
   - Los endpoints estan correctamente documentados.
   - Los ejemplos de request/response son realistas.
   - La estructura es clara y navegable.

5. Si algo falta o es incorrecto, pidele que lo corrija:
   ```
   El endpoint POST /api/products requiere autenticacion pero no lo mencionaste.
   Corrige esa seccion.
   ```

#### Resultado esperado

Un archivo `docs/API.md` con documentacion profesional que incluya:

- Tabla de contenidos navegable.
- Cada endpoint documentado con ejemplos de curl o similar.
- Modelo de datos claro.
- Instrucciones de autenticacion paso a paso.

#### Para personas de producto

Este es un caso de uso muy practico: generar documentacion que antes requeria horas de trabajo de un desarrollador. La clave esta en ser especifico con lo que necesitas. Cuanto mas detallado tu prompt, mejor el resultado.

#### Problemas comunes

- **La documentacion tiene errores en los endpoints**: Claude a veces inventa endpoints que no existen. Siempre verifica contra el codigo real.
- **No crea el archivo**: Si estas en Plan Mode, Claude no puede crear archivos. Cambia al modo normal con `Shift+Tab`.
- **El formato Markdown se ve mal**: Pidele que use una estructura especifica: "Usa tablas para los parametros y bloques de codigo para los ejemplos".

#### Para saber mas

- [Generacion de documentacion con Claude Code](https://docs.anthropic.com/en/docs/claude-code/common-tasks)
- [Markdown Guide](https://www.markdownguide.org/)

---

## Bloque 3: Skills — El superpoder compartido

**Duracion**: 30 minutos
**Dificultad**: ⭐⭐⭐
**Audiencia**: Todos los participantes

### Contexto: Que son los Skills

Los Skills son **instrucciones reutilizables** que le dicen a Claude como hacer una tarea especifica. Piensa en ellos como recetas o plantillas de comportamiento.

Un Skill es simplemente un archivo Markdown (`.md`) guardado en la carpeta `.claude/skills/` de tu proyecto. Cuando invocas un Skill, Claude lee esas instrucciones y las sigue al pie de la letra.

**Por que son importantes:**

- **Consistencia**: Todo el equipo obtiene el mismo resultado para la misma tarea.
- **Reutilizacion**: Escribes las instrucciones una vez, las usas para siempre.
- **Compartibilidad**: Como viven en el repo, cualquiera del equipo puede usarlos.
- **No requieren codigo**: Cualquier persona puede crear un Skill escribiendo instrucciones en lenguaje natural.

**Estructura de un Skill:**

```
.claude/skills/
  nombre-del-skill/
    SKILL.md          # Las instrucciones que Claude seguira
```

El archivo `SKILL.md` tipicamente contiene:

- Una descripcion de que hace el Skill.
- Instrucciones paso a paso.
- El formato de salida esperado.
- Ejemplos (opcionales pero recomendados).

**Como invocar un Skill:**

Dentro de Claude Code, usas el comando:
```
/skill-name
```

O puedes referirte al Skill en tu prompt:
```
Usa el skill de code-review para revisar el archivo src/routes/auth.js
```

---

### Ejercicio 3.0: Explorar los Skills existentes

**Objetivo**: Familiarizarte con los Skills incluidos en el repositorio del workshop.

**Tiempo**: 5 minutos

#### Instrucciones

1. Regresa al directorio raiz del workshop:
   ```bash
   cd claude_workshop_march26
   claude
   ```

2. Explora los Skills existentes:
   ```
   Muestrame que skills hay disponibles en .claude/skills/ y explicame
   que hace cada uno en una tabla.
   ```

3. Prueba uno de los Skills existentes. Por ejemplo, el de code review:
   ```
   Usa el skill de code-review para revisar el archivo
   sample-project/src/routes/auth.js
   ```

4. Observa como la salida sigue un formato estructurado y consistente, definido por el Skill.

#### Resultado esperado

Deberas ver los Skills disponibles en el repositorio:

- **code-review**: Revisa codigo buscando bugs, seguridad y buenas practicas.
- **product-spec**: Genera especificaciones de producto a partir de una idea.
- **meeting-prep**: Prepara agendas y materiales para reuniones.

Al usar el Skill de code-review, la salida deberia seguir un formato estandar con secciones como: Resumen, Problemas criticos, Sugerencias de mejora, Veredicto.

---

### Ejercicio 3.1: Crea tu propio Skill (EJERCICIO PRINCIPAL)

**Objetivo**: Cada participante crea un Skill adaptado a su perfil profesional.

**Tiempo**: 20 minutos

Elige la pista que mejor se ajuste a tu rol:

---

#### Pista A: Desarrolladores — Skill de generacion de tests

**Objetivo**: Crear un Skill que genere tests automatizados para cualquier archivo de codigo.

##### Instrucciones

1. Crea la estructura de carpetas para tu Skill:
   ```
   Crea el directorio .claude/skills/test-generator/ con un archivo SKILL.md
   ```

2. El contenido de tu `SKILL.md` debe incluir estas instrucciones para Claude. Puedes escribirlas tu o pedirle a Claude que te ayude:
   ```
   Crea un skill en .claude/skills/test-generator/SKILL.md con las siguientes
   caracteristicas:

   - Nombre: Test Generator
   - Proposito: Generar tests unitarios completos para un archivo dado
   - El skill debe:
     1. Analizar el archivo recibido como entrada
     2. Identificar todas las funciones y metodos exportados
     3. Para cada funcion, generar tests que cubran:
        - Caso exitoso (happy path)
        - Casos limite (edge cases)
        - Manejo de errores
     4. Usar Jest como framework de testing
     5. Incluir mocks para dependencias externas
     6. Seguir el patron Arrange-Act-Assert
   - Formato de salida: Un archivo de test completo listo para ejecutar
   - Incluye un ejemplo de como se ve un test generado por este skill
   ```

3. Verifica que el Skill se creo correctamente:
   ```
   Muestrame el contenido de .claude/skills/test-generator/SKILL.md
   ```

4. Prueba tu Skill con un archivo del proyecto:
   ```
   Usa el skill test-generator para generar tests del archivo
   sample-project/src/routes/products.js
   ```

5. Ejecuta los tests generados para ver si pasan:
   ```
   Ejecuta los tests que acabas de generar
   ```

##### Resultado esperado

- Un archivo `.claude/skills/test-generator/SKILL.md` con instrucciones claras.
- Tests generados que cubren multiples escenarios.
- Los tests deberian pasar (o al menos compilar sin errores de sintaxis).

---

#### Pista B: Product Managers — Skill de release notes

**Objetivo**: Crear un Skill que analice los commits o PRs recientes y genere release notes orientadas al usuario final.

##### Instrucciones

1. Pide a Claude que cree el Skill:
   ```
   Crea un skill en .claude/skills/release-notes/SKILL.md con las siguientes
   caracteristicas:

   - Nombre: Release Notes Generator
   - Proposito: Analizar cambios recientes en el repositorio y generar
     release notes en lenguaje no tecnico
   - El skill debe:
     1. Revisar los commits recientes o el diff de un PR
     2. Clasificar cada cambio en categorias:
        - Nuevas funcionalidades
        - Mejoras
        - Correcciones de bugs
        - Cambios internos (no visibles al usuario)
     3. Para cada cambio visible al usuario, escribir una descripcion
        en lenguaje llano que un usuario final pueda entender
     4. Ignorar cambios puramente tecnicos (refactoring, actualizacion
        de dependencias) a menos que impacten al usuario
     5. Sugerir un titulo llamativo para la release
   - Formato de salida: Markdown con secciones por categoria
   - Tono: Profesional pero accesible, como un blog de producto
   - Incluye un ejemplo de salida con 3-4 cambios ficticios
   ```

2. Verifica el Skill:
   ```
   Muestrame el contenido de .claude/skills/release-notes/SKILL.md
   ```

3. Prueba tu Skill (incluso sin commits reales, puedes simular):
   ```
   Usa el skill release-notes para generar las notas de lanzamiento
   basandote en los archivos actuales del proyecto sample-project/.
   Imagina que esta es la version 1.0.0 y estos son todos los features nuevos.
   ```

##### Resultado esperado

- Un archivo `.claude/skills/release-notes/SKILL.md` con instrucciones completas.
- Release notes generadas con lenguaje amigable para el usuario final.
- Las notas deberian estar organizadas por categoria y ser comprensibles sin conocimientos tecnicos.

---

#### Pista C: Power Users — Skill de resumen de documentos

**Objetivo**: Crear un Skill que resuma documentos largos y extraiga los puntos clave de accion.

##### Instrucciones

1. Pide a Claude que cree el Skill:
   ```
   Crea un skill en .claude/skills/doc-summarizer/SKILL.md con las siguientes
   caracteristicas:

   - Nombre: Document Summarizer
   - Proposito: Resumir documentos largos y extraer action items
   - El skill debe:
     1. Leer el documento o documentos proporcionados
     2. Generar un resumen ejecutivo (maximo 5 oraciones)
     3. Extraer los puntos clave (bullet points)
     4. Identificar decisiones tomadas (si las hay)
     5. Listar action items con responsables (si se mencionan)
     6. Senalar preguntas abiertas o temas sin resolver
     7. Sugerir proximos pasos
   - Formato de salida: Markdown estructurado con secciones claras
   - Tono: Profesional y conciso
   - Funciona con: actas de reunion, documentos de estrategia,
     reportes, emails largos
   - Incluye un ejemplo de salida basado en un acta de reunion ficticia
   ```

2. Verifica el Skill:
   ```
   Muestrame el contenido de .claude/skills/doc-summarizer/SKILL.md
   ```

3. Prueba tu Skill con contenido del workshop:
   ```
   Usa el skill doc-summarizer para resumir el archivo README.md
   del repositorio principal
   ```

##### Resultado esperado

- Un archivo `.claude/skills/doc-summarizer/SKILL.md` con instrucciones detalladas.
- Un resumen del README que incluya los puntos clave del workshop.
- Action items o proximos pasos claramente listados.

---

### Verificacion del ejercicio (todas las pistas)

Para confirmar que tu Skill funciona correctamente, verifica:

- El archivo `SKILL.md` existe en la ruta correcta dentro de `.claude/skills/`.
- Las instrucciones son claras y no ambiguas.
- El Skill produce una salida consistente cada vez que lo invocas.
- Otra persona de tu equipo podria usarlo sin explicacion adicional.

### Ejercicio 3.2: Itera y mejora tu Skill

**Tiempo**: 5 minutos

1. Revisa la salida de tu Skill. Identifica algo que mejorar.

2. Pidele a Claude que lo refine:
   ```
   Mejora el skill [nombre] para que tambien incluya [lo que falta].
   Actualiza el archivo SKILL.md.
   ```

3. Vuelve a probar y compara la salida.

4. Si tienes tiempo, prueba el Skill de un companero. Comparen resultados.

#### Problemas comunes

- **Claude no encuentra el Skill**: Asegurate de que la ruta sea exactamente `.claude/skills/nombre-del-skill/SKILL.md`. El archivo debe llamarse `SKILL.md` en mayusculas.
- **La salida es inconsistente**: Anade mas ejemplos al Skill. Los ejemplos son la mejor forma de definir el formato esperado.
- **El Skill es demasiado generico**: Se mas especifico en las instrucciones. En lugar de "resume el documento", especifica cuantos puntos, que tipo de informacion extraer, que formato usar.
- **No se como empezar a escribir**: Pidele a Claude que te ayude. Escribe: "Ayudame a crear un skill para [tu caso de uso]. Hazme preguntas para entender que necesito."

#### Para saber mas

- [Guia completa de Skills](guides/skills-guide.md)
- [Documentacion oficial de Skills](https://docs.anthropic.com/en/docs/claude-code/skills)
- [Mejores practicas para escribir prompts](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering)

---

## Bloque 4: Claude Cowork — Para toda la organizacion

**Duracion**: 25 minutos
**Dificultad**: ⭐⭐
**Audiencia**: Todos (foco en producto y power users)

### Contexto: Que es Claude Cowork

Claude Cowork es Claude con superpoderes de escritorio. A diferencia de Claude Chat (que solo puede conversar), Cowork puede:

- **Leer y escribir archivos** en carpetas de tu computadora.
- **Organizar informacion** dispersa en documentos estructurados.
- **Procesar datos** de hojas de calculo y archivos CSV.
- **Generar reportes** a partir de datos crudos.
- **Trabajar con proyectos persistentes** que recuerdan el contexto.

La diferencia clave con Claude Code:

| Aspecto | Claude Code | Claude Cowork |
|---------|-------------|---------------|
| Interfaz | Terminal (CLI) | Claude Desktop (GUI) |
| Publico principal | Desarrolladores | Toda la organizacion |
| Ejecuta codigo | Si | No directamente |
| Acceso a archivos | Via terminal | Via seleccion de carpeta |
| Git integration | Nativa | No |
| Conectores | No | Google Drive, Gmail, etc. |

**Para este bloque necesitas**: Claude Desktop con Cowork habilitado y la carpeta `cowork-workspace/` del repositorio.

**Nota para desarrolladores**: Si no tienes Cowork, puedes hacer estos ejercicios con Claude Code. Los resultados seran similares; la diferencia es la interfaz.

---

### Ejercicio 4.1: Organizar notas desordenadas

**Objetivo**: Darle a Cowork una carpeta con notas desordenadas y pedirle que las organice de forma coherente.

**Tiempo**: 8 minutos

#### Instrucciones

1. Abre Claude Desktop y selecciona la carpeta `cowork-workspace/` como tu workspace.

2. Explora el contenido de la carpeta `notas/`:
   ```
   Que archivos hay en la carpeta notas/? Dame un resumen de cada uno.
   ```

3. Pide a Cowork que organice las notas:
   ```
   Las notas en la carpeta notas/ estan desordenadas. Necesito que:

   1. Leas todas las notas
   2. Identifiques los temas principales
   3. Crees un documento consolidado llamado notas/RESUMEN-NOTAS.md que:
      - Agrupe las notas por tema
      - Tenga una tabla de contenidos
      - Incluya una seccion de "Action items" con todas las tareas
        pendientes que encuentres en las notas
      - Marque que informacion podria estar desactualizada
   ```

4. Revisa el documento generado. Verifica que la organizacion tiene sentido.

5. Si falta algo, pidele que itere:
   ```
   Anade una seccion de "Decisiones tomadas" extrayendo cualquier decision
   mencionada en las notas originales.
   ```

#### Resultado esperado

- Un archivo `notas/RESUMEN-NOTAS.md` bien estructurado.
- Las notas originales agrupadas por tema.
- Lista clara de action items extraidos de las notas.
- Tabla de contenidos navegable.

#### Con Claude Code (alternativa para devs)

Si usas Claude Code en lugar de Cowork:
```bash
cd claude_workshop_march26/cowork-workspace
claude
```
Luego usa los mismos prompts. Claude Code accede a los archivos de la misma manera.

#### Problemas comunes

- **Cowork no ve los archivos**: Asegurate de haber seleccionado la carpeta correcta. Deberia ser `cowork-workspace/`, no la raiz del repositorio.
- **La organizacion no tiene sentido**: Se mas especifico sobre los criterios de agrupacion. Por ejemplo: "Agrupa por proyecto" o "Agrupa por fecha".
- **Falta contenido**: Verifica que las notas originales tienen contenido. Si la carpeta esta vacia, consulta con el facilitador.

---

### Ejercicio 4.2: Crear un reporte de gastos

**Objetivo**: Transformar datos crudos de gastos en un reporte financiero organizado.

**Tiempo**: 8 minutos

#### Instrucciones

1. Pide a Cowork que analice los datos de gastos:
   ```
   Revisa los archivos en la carpeta gastos/. Que tipo de datos hay
   y en que formato estan?
   ```

2. Pide que genere un reporte:
   ```
   Con los datos de la carpeta gastos/, crea un reporte de gastos
   profesional en gastos/REPORTE-GASTOS.md que incluya:

   1. Resumen ejecutivo con el gasto total
   2. Desglose por categoria (transporte, comida, software, etc.)
   3. Desglose por mes (si hay datos de varios meses)
   4. Top 5 gastos individuales mas grandes
   5. Grafico en formato texto/ASCII que muestre la distribucion
      por categoria
   6. Recomendaciones para reducir gastos basandote en los patrones
      que observas
   7. Tabla final con todos los gastos ordenados por fecha
   ```

3. Revisa el reporte. Verifica que los numeros sumen correctamente.

4. Pidele un formato alternativo si lo necesitas:
   ```
   Convierte la tabla final del reporte a formato CSV para que pueda
   importarlo en una hoja de calculo. Guardalo como gastos/gastos-export.csv
   ```

#### Resultado esperado

- Un archivo `gastos/REPORTE-GASTOS.md` con formato profesional.
- Totales y subtotales correctos.
- Grafico ASCII que muestra la distribucion visual.
- Opcionalmente, un archivo CSV listo para importar.

#### Problemas comunes

- **Los numeros no cuadran**: Claude a veces comete errores aritmeticos. Pidele que verifique: "Suma todos los gastos individuales y confirma que el total coincide con tu resumen."
- **No reconoce el formato de los datos**: Describele el formato: "Los datos estan en CSV con columnas: fecha, concepto, categoria, monto."
- **Falta el simbolo de moneda**: Especificale: "Todos los montos estan en euros (EUR)."

---

### Ejercicio 4.3: Generar un resumen ejecutivo

**Objetivo**: A partir de documentos dispersos, crear un resumen ejecutivo coherente que un directivo pueda leer en 2 minutos.

**Tiempo**: 9 minutos

#### Instrucciones

1. Pide a Cowork que explore los informes disponibles:
   ```
   Revisa todos los archivos en la carpeta informes/.
   De que trata cada documento? Dame un inventario.
   ```

2. Genera el resumen ejecutivo:
   ```
   Necesito un resumen ejecutivo para el equipo directivo.
   Usando toda la informacion en informes/, crea un documento
   informes/RESUMEN-EJECUTIVO.md que:

   1. No supere las 2 paginas impresas (aproximadamente 800 palabras)
   2. Empiece con los 3 puntos mas importantes (formato "lo que debes saber")
   3. Incluya metricas clave en una tabla facil de leer
   4. Resuma el estado de cada proyecto o iniciativa mencionada
   5. Identifique riesgos o banderas rojas
   6. Termine con las 3 decisiones mas urgentes que necesitan aprobacion

   El tono debe ser ejecutivo: directo, sin jerga tecnica, orientado a la accion.
   ```

3. Revisa el resumen. Verifica que:
   - Es realmente conciso (no mas de 800 palabras).
   - Un directivo sin contexto previo podria entenderlo.
   - Las metricas y datos son precisos respecto a los documentos originales.

4. Pidele una mejora especifica:
   ```
   Anade un semaforo (verde/amarillo/rojo) al lado de cada proyecto
   basandote en su estado actual. Usa texto en lugar de emojis:
   [VERDE], [AMARILLO], [ROJO].
   ```

#### Resultado esperado

- Un archivo `informes/RESUMEN-EJECUTIVO.md` conciso y profesional.
- Maximo 800 palabras con la informacion mas critica.
- Tabla de metricas clave.
- Secciones de riesgos y decisiones pendientes.
- Semaforos de estado para cada proyecto.

### Proyectos persistentes en Cowork

Una funcionalidad clave de Cowork es la capacidad de crear **Proyectos**: espacios de trabajo que mantienen el contexto entre sesiones.

Para crear un Proyecto:
1. En Claude Desktop, busca la opcion "Proyectos" o "Projects".
2. Crea un nuevo proyecto y asignale la carpeta `cowork-workspace/`.
3. Dale un nombre descriptivo como "Workshop - Datos de equipo".
4. En la siguiente sesion, cuando abras este Proyecto, Claude recordara el contexto previo.

Esto es muy util para tareas recurrentes como reportes semanales, seguimiento de proyectos o preparacion de reuniones periodicas.

#### Problemas comunes

- **El resumen es demasiado largo**: Se explicito con el limite de palabras. Anade: "Esto es critico: no mas de 800 palabras."
- **Falta informacion clave**: Indicale que documentos son prioritarios: "El informe de ventas y el de satisfaccion del cliente son los mas importantes."
- **El tono es demasiado tecnico**: Pidele: "Reescribelo como si fuera para el CEO, que no tiene background tecnico."

#### Para saber mas

- [Guia de Cowork](guides/cowork-guide.md)
- [Documentacion de Cowork](https://support.claude.com/en/articles/13345190-get-started-with-cowork)
- [Conectores de Cowork (Drive, Gmail)](https://support.claude.com/en/articles/13345190-get-started-with-cowork)

---

## Bloque 5: GitHub Integration

**Duracion**: 15 minutos
**Dificultad**: ⭐⭐
**Audiencia**: Todos los participantes

### Contexto: Claude Code y Git

Claude Code tiene integracion nativa con Git y GitHub. Puede:

- Crear ramas, hacer commits y pushear cambios.
- Crear Pull Requests con titulo y descripcion.
- Revisar PRs existentes y dar feedback.
- Explicar cambios en un PR en lenguaje no tecnico.

Esto es util para:
- **Desarrolladores**: Automatizar el flujo de Git sin salir de Claude.
- **Product Managers**: Entender que cambios trae un PR sin leer codigo.
- **Cualquier persona**: Revisar el historial del proyecto.

---

### Ejercicio 5.1: Flujo completo de Git con Claude Code

**Objetivo**: Crear una rama, hacer un cambio, commitear y crear un PR, todo usando Claude Code como intermediario.

**Tiempo**: 10 minutos

#### Instrucciones

1. Asegurate de estar en el directorio raiz del workshop con Claude Code:
   ```bash
   cd claude_workshop_march26
   claude
   ```

2. Pide a Claude que cree una rama de trabajo:
   ```
   Crea una nueva rama llamada feature/workshop-[tu-nombre]
   a partir de la rama principal
   ```

3. Pide un cambio concreto en el proyecto:
   ```
   En el archivo sample-project/src/routes/products.js, anade
   validacion de entrada para el endpoint POST que crea productos.
   El nombre del producto no debe estar vacio y el precio debe ser
   un numero positivo. Si la validacion falla, retorna un error 400
   con un mensaje descriptivo.
   ```

4. Pide que haga commit y cree el PR:
   ```
   Haz commit de los cambios con un mensaje descriptivo en espanol.
   Luego crea un Pull Request hacia la rama principal con:
   - Titulo claro
   - Descripcion que explique que se cambio y por que
   - Una seccion de "Como probar" con instrucciones
   ```

5. Revisa el PR creado en GitHub (Claude te dara la URL).

#### Resultado esperado

- Una nueva rama creada con tu nombre.
- Codigo de validacion anadido al endpoint de productos.
- Un commit con mensaje descriptivo.
- Un Pull Request en GitHub con titulo, descripcion y seccion de testing.

#### Para personas de producto

Aunque no necesites crear PRs tu misma, observa lo facil que es el flujo. En tu dia a dia podrias pedirle a Claude Code:
```
Muestrame los ultimos 5 PRs mergeados y explicame cada uno
como si fuera para las release notes del producto.
```

#### Problemas comunes

- **"No tienes permiso para pushear"**: Necesitas tener acceso de escritura al repositorio. Verifica tu configuracion de SSH/HTTPS con GitHub.
- **"La rama ya existe"**: Usa un nombre unico: `feature/workshop-[tu-nombre]-[fecha]`.
- **Claude modifica archivos que no deberia**: Se especifico: "Solo modifica el archivo X. No toques nada mas."

---

### Ejercicio 5.2: Revisar un PR con Claude Code

**Objetivo**: Usar Claude Code para revisar un Pull Request y entender los cambios, sea cual sea tu nivel tecnico.

**Tiempo**: 5 minutos

#### Instrucciones

1. Pide a Claude que revise un PR (usa el de un companero o el que acabas de crear):
   ```
   Revisa el Pull Request #[numero] y dame:
   1. Un resumen de los cambios en lenguaje no tecnico
   2. Si eres dev: posibles bugs, problemas de seguridad y sugerencias
   3. Una valoracion general: debemos aprobar o pedir cambios?
   ```

2. Si eres de producto, prueba esta variante:
   ```
   Revisa el Pull Request #[numero] y explicamelo como si fuera
   un product manager que necesita decidir si este cambio esta listo
   para produccion. No uses jerga tecnica. Dime:
   - Que cambia para el usuario final
   - Hay algun riesgo
   - Necesitamos actualizar la documentacion del producto
   ```

3. Compara tu revision con la de un companero. Discutan las diferencias.

#### Resultado esperado

- Resumen claro y comprensible de los cambios del PR.
- Para devs: analisis tecnico con bugs potenciales y sugerencias.
- Para producto: explicacion en lenguaje llano de impacto al usuario.

#### Problemas comunes

- **Claude no encuentra el PR**: Verifica que el numero de PR es correcto y que estas en el repositorio correcto.
- **La revision es muy superficial**: Pidele que sea mas detallado: "Revisa linea por linea y busca especificamente errores de logica y vulnerabilidades de seguridad."
- **No tienes PRs disponibles**: Usa el PR que creaste en el Ejercicio 5.1 o pide a un companero su numero de PR.

#### Para saber mas

- [Git con Claude Code](https://docs.anthropic.com/en/docs/claude-code/common-tasks#git-operations)
- [GitHub CLI (gh)](https://cli.github.com/)
- [Guia de Pull Requests](https://docs.github.com/en/pull-requests)

---

## Bloque 6: Tips avanzados y cierre

**Duracion**: 15 minutos
**Dificultad**: ⭐⭐⭐⭐ (solo demos, no hay ejercicio practico)
**Audiencia**: Todos los participantes

### Este bloque es solo demostrativo. Observa, toma notas y pregunta.

---

### Demo 6.1: Hooks — Automatiza acciones en Claude Code

Los Hooks son acciones automaticas que se disparan en ciertos momentos del flujo de Claude Code. Son como los Git hooks, pero para Claude.

**Ejemplo**: Un hook que ejecuta el linter automaticamente cada vez que Claude modifica un archivo:

```json
// .claude/settings.json
{
  "hooks": {
    "afterEdit": {
      "command": "npx eslint --fix ${file}",
      "description": "Ejecutar linter despues de cada edicion"
    }
  }
}
```

**Casos de uso practicos:**
- Ejecutar tests automaticamente despues de cambios en el codigo.
- Formatear archivos recien creados.
- Validar que no se suban secretos antes de un commit.
- Notificar a Slack cuando Claude termina una tarea larga.

---

### Demo 6.2: Agentes personalizados

Puedes crear agentes especializados que tienen un proposito y personalidad definidos. Viven en `.claude/agents/`.

**Ejemplo**: Un agente auditor de seguridad:

```markdown
# Security Auditor Agent

Eres un auditor de seguridad experimentado. Tu trabajo es:

1. Revisar todo el codigo buscando vulnerabilidades OWASP Top 10
2. Verificar que no haya secretos hardcodeados
3. Comprobar que las dependencias no tengan CVEs conocidos
4. Generar un reporte formal con severidad (critica/alta/media/baja)

Siempre sigue el formato SARIF para tus reportes.
Nunca modifiques codigo; solo reporta los hallazgos.
```

Se invoca con:
```bash
claude --agent security-auditor
```

---

### Demo 6.3: Pipes de Unix con Claude Code

Claude Code se integra con pipes de Unix, permitiendo workflows poderosos:

```bash
# Analizar logs en tiempo real
tail -f server.log | claude "Resume los errores que veas"

# Procesar salida de comandos
git log --oneline -20 | claude "Genera release notes de estos commits"

# Transformar datos
cat datos.csv | claude "Convierte esto a JSON y limpia los datos vacios"

# Analizar dependencias
npm audit --json | claude "Explicame las vulnerabilidades criticas y como arreglarlas"
```

---

### Demo 6.4: Conectores de Cowork

Claude Cowork puede conectarse a servicios externos:

**Google Drive:**
- Accede a tus documentos de Drive directamente desde Cowork.
- Pide: "Resume los ultimos 3 documentos en mi carpeta de proyecto X".

**Gmail:**
- Lee y resume hilos de correo.
- Pide: "Resume los emails no leidos de esta semana y dime cuales requieren accion urgente".

**Configuracion:**
1. En Claude Desktop, ve a Configuracion > Conectores.
2. Autoriza los servicios que quieras conectar.
3. Una vez conectados, Cowork puede acceder a esos datos en tus conversaciones.

---

### Tips por rol

#### Para desarrolladores

1. **Usa Plan Mode primero**: Antes de pedirle a Claude que cambie algo, pidele que analice y proponga. Luego decide tu si proceder.
2. **Crea Skills para tareas repetitivas**: Si haces code review siguiendo los mismos criterios siempre, hazlo un Skill.
3. **Combina con tu editor**: Claude Code funciona en paralelo con VS Code o tu editor preferido. Usa Claude para cambios grandes y tu editor para ajustes finos.
4. **Hooks para calidad**: Configura hooks que corran tests y linting automaticamente.
5. **Agentes para auditorias**: Crea agentes especializados en seguridad, performance, accesibilidad.

#### Para product managers

1. **Plan Mode es tu mejor amigo**: Puedes explorar cualquier codebase sin riesgo de romper nada.
2. **Skills de release notes**: Crea un Skill que genere release notes automaticamente desde los PRs.
3. **Cowork para documentacion**: Usa Cowork para mantener specs, roadmaps y reportes actualizados.
4. **Revisa PRs con Claude**: No necesitas entender el codigo. Claude te explica el impacto al usuario.
5. **Proyectos persistentes**: Usa Proyectos en Cowork para mantener contexto entre sesiones.

#### Para power users

1. **Empieza con Cowork**: Es la herramienta mas accesible si no vienes del mundo dev.
2. **Automatiza reportes recurrentes**: Si haces el mismo reporte cada semana, crea un Skill para ello.
3. **Conecta tus fuentes de datos**: Drive, Gmail, archivos locales. Cuantas mas fuentes, mas potente es Cowork.
4. **Combina documentos**: La mayor fortaleza de Cowork es sintetizar informacion dispersa en un solo lugar.
5. **Itera y refina**: Nunca aceptes la primera respuesta. Siempre pide mejoras y ajustes.

---

### Preguntas frecuentes

**P: Claude Code es gratis?**
R: Claude Code usa tu suscripcion de Claude (Pro, Team o Enterprise). No tiene costo adicional, pero consume uso de tu plan.

**P: Mis datos estan seguros?**
R: Claude Code procesa tu codigo localmente y envia solo el contexto necesario a los servidores de Anthropic. Consulta la [politica de privacidad](https://anthropic.com/privacy) para detalles.

**P: Puedo usar Claude Code sin internet?**
R: No. Claude Code necesita conexion a internet para comunicarse con los servidores de Anthropic.

**P: Que diferencia hay entre un Skill y un Agente?**
R: Un Skill es un conjunto de instrucciones para una tarea especifica. Un Agente es una personalidad/rol completo que define como Claude se comporta en general. Los Skills son mas especificos; los Agentes son mas amplios.

**P: Cowork puede acceder a cualquier archivo de mi computadora?**
R: Solo a los archivos dentro de la carpeta que seleccionas como workspace. Necesita tu permiso explicito.

---

### Recursos finales

| Recurso | Enlace |
|---------|--------|
| Documentacion de Claude Code | [docs.anthropic.com/en/docs/claude-code](https://docs.anthropic.com/en/docs/claude-code) |
| Guia de Cowork | [support.claude.com](https://support.claude.com/en/articles/13345190-get-started-with-cowork) |
| Prompt Engineering | [docs.anthropic.com/en/docs/build-with-claude/prompt-engineering](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering) |
| Claude Code Best Practices | [docs.anthropic.com/en/docs/claude-code/best-practices](https://docs.anthropic.com/en/docs/claude-code/best-practices) |
| Guia rapida del workshop | [guides/quick-reference.md](guides/quick-reference.md) |
| Guia de Skills del workshop | [guides/skills-guide.md](guides/skills-guide.md) |
| Guia de Cowork del workshop | [guides/cowork-guide.md](guides/cowork-guide.md) |
| Soluciones de ejercicios | [solutions/](solutions/) |

---

> **Gracias por participar en el workshop.** Si tienes preguntas despues del evento, revisa los recursos de arriba o consulta con el equipo facilitador.
