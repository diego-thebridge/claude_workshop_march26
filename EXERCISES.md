# Ejercicios del Workshop: Claude Code — De Analizar a Enviar

> **Duracion total**: 120 minutos
> **Audiencia**: Desarrolladores, Product Managers, Power Users
> **Requisitos previos**: Ver [README.md](README.md) para setup completo

---

## Tabla de Contenidos

- [Bloque 0: Bienvenida y Setup (10 min)](#bloque-0-bienvenida-y-setup)
- [Bloque 1: Plan Mode — Auditoria de Seguridad (20 min)](#bloque-1-plan-mode--auditoria-de-seguridad)
- [Bloque 2: Trabajo Complejo — Security Hardening (25 min)](#bloque-2-trabajo-complejo--security-hardening)
- [Bloque 3: Crear un Pull Request (15 min)](#bloque-3-crear-un-pull-request)
- [Bloque 4: Skills — La Nueva Gran Evolucion (30 min)](#bloque-4-skills--la-nueva-gran-evolucion)
- [Bloque 5: Cowork — Mas Alla del Codigo (15 min)](#bloque-5-cowork--mas-alla-del-codigo)
- [Bloque 6: Tips Avanzados y Cierre (5 min)](#bloque-6-tips-avanzados-y-cierre)

---

## Bloque 0: Bienvenida y Setup

**Duracion**: 10 minutos
**Audiencia**: Todos los participantes

### El ecosistema Claude: tres herramientas, un mismo cerebro

| Herramienta | Que es | Para quien | Donde se usa |
|-------------|--------|------------|--------------|
| **Claude Chat** | Conversacion con IA en el navegador | Todos | [claude.ai](https://claude.ai) |
| **Claude Code** | Agente de programacion en la terminal | Desarrolladores | Terminal / CLI |
| **Claude Cowork** | Asistente de trabajo integrado con archivos locales | Toda la organizacion | Claude Desktop |

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

---

### Ejercicio 0.1: Verifica tu setup

**Tiempo**: 5 minutos

#### Track Desarrolladores (Claude Code)

1. Abre tu terminal.

2. Verifica que Claude Code esta instalado:
   ```bash
   claude --version
   ```

3. Verifica que el repositorio esta clonado y el proyecto funciona:
   ```bash
   cd claude_workshop_march26/sample-project
   npm install
   npm test
   ```

4. Inicia Claude Code en el directorio del workshop:
   ```bash
   cd ..
   claude
   ```

5. Escribe un saludo simple para confirmar que funciona:
   ```
   Hola, dime en que directorio estamos trabajando
   ```

#### Track Producto / Power Users (Claude Cowork)

1. Abre **Claude Desktop** en tu computadora.

2. Verifica que tienes acceso a Cowork:
   - Busca la opcion para abrir una carpeta o workspace.
   - Si ves la opcion "Cowork" o "Open folder", tu plan lo soporta.

3. Selecciona la carpeta `claude_workshop_march26/cowork-workspace/` como tu carpeta de trabajo.

4. Escribe un saludo:
   ```
   Hola, que archivos puedes ver en esta carpeta?
   ```

#### Problemas comunes

- **"claude: command not found"**: Instala Claude Code con `npm install -g @anthropic-ai/claude-code` o sigue la [guia de instalacion](https://docs.anthropic.com/en/docs/claude-code/getting-started).
- **"npm test" falla**: Asegurate de tener Node.js 18+ (`node --version`).
- **Cowork no aparece**: Verifica que tienes un plan Pro, Team o Enterprise. Actualiza Claude Desktop a la ultima version.

---

## Bloque 1: Plan Mode — Auditoria de Seguridad

**Duracion**: 20 minutos (10 min demo + 10 min ejercicio)
**Dificultad**: ⭐⭐
**Audiencia**: Desarrolladores (producto observa y aprende)

### Contexto: Que es Plan Mode

Plan Mode es un modo de operacion de Claude Code en el que el agente **analiza y planifica sin ejecutar cambios**. Es como pedirle a un consultor que revise tu proyecto y te de un informe, sin que toque nada.

Para activar Plan Mode:
- Usa `Shift+Tab` dentro de Claude Code para alternar entre modo normal y Plan Mode.
- Veras el indicador cambiando de `>` a `plan>` en el prompt.
- En Plan Mode, Claude puede leer archivos, analizar codigo y generar recomendaciones, pero **no modificara ningun archivo**.

Esto es especialmente util para:
- Entender un proyecto nuevo o heredado.
- Hacer auditorias de seguridad sin riesgo.
- Que personas no tecnicas comprendan la arquitectura de un codebase.

---

### Demo del instructor (10 min)

El instructor abrira Claude Code en `sample-project/` y activara Plan Mode con `Shift+Tab`. Usara este prompt:

```
Analiza la arquitectura completa de este proyecto. Quiero:
1. Estructura de archivos y endpoints de la API
2. Como maneja la autenticacion
3. Identifica TODAS las vulnerabilidades de seguridad, clasificadas por severidad (Critica, Alta, Media)
4. Para cada vulnerabilidad: archivo, linea, que es el problema, que podria hacer un atacante

No modifiques ningun archivo.
```

**Observa como Claude**:
- Lee los archivos del proyecto uno por uno.
- Construye un mapa mental de la arquitectura.
- Identifica patrones y problemas sin tocar nada.

---

### Ejercicio 1.1: Tu propia auditoria de seguridad

**Objetivo**: Usar Plan Mode para analizar el proyecto `sample-project/` e identificar vulnerabilidades.

**Tiempo**: 10 minutos

#### Instrucciones

1. Abre Claude Code en el directorio del proyecto de ejemplo:
   ```bash
   cd claude_workshop_march26/sample-project
   claude
   ```

2. Activa Plan Mode presionando `Shift+Tab`. El prompt debe cambiar a `plan>`.

3. Escribe el siguiente prompt:
   ```
   Analiza la arquitectura completa de este proyecto. Quiero entender:
   1. Cual es la estructura de archivos y carpetas
   2. Que endpoints tiene la API y que hace cada uno
   3. Como maneja la autenticacion
   4. Identifica TODAS las vulnerabilidades de seguridad con su severidad
   5. Para cada vulnerabilidad: archivo, linea, problema, riesgo

   No modifiques ningun archivo. Solo analiza y reporta.
   ```

4. Revisa el informe. Deberia identificar al menos estas vulnerabilidades:
   - **Critica**: JWT secret hardcodeado (`super-secret-key-12345`)
   - **Critica**: Code injection via `new Function()` en busqueda de productos
   - **Alta**: Passwords almacenados en texto plano
   - **Alta**: Endpoint DELETE de productos sin autenticacion
   - **Alta**: Passwords expuestos en respuestas de la API
   - **Media**: Falta de validacion de input en POST de productos
   - **Media**: GET de usuarios sin control de acceso
   - **Media**: No se verifica stock al crear pedidos

#### Para personas de producto

Aunque no escribas codigo, este ejercicio muestra algo poderoso: puedes pedirle a Claude que te explique cualquier proyecto. Prueba esta variante:

```
Explicame este proyecto como si fuera un product manager que necesita
entender que hace para escribir la documentacion del producto.
```

#### Problemas comunes

- **Claude intenta modificar archivos**: Asegurate de estar en Plan Mode (`plan>`). Presiona `Shift+Tab` si no lo esta.
- **El analisis es muy superficial**: Se especifico en tu prompt. Pide que mire archivos concretos.
- **Claude pide permiso para ejecutar comandos**: En Plan Mode no deberia necesitarlo. Di "no" y reformula.

---

## Bloque 2: Trabajo Complejo — Security Hardening

**Duracion**: 25 minutos (demo live)
**Dificultad**: ⭐⭐⭐⭐
**Audiencia**: Todos (el instructor conduce, participantes siguen u observan)

### Contexto: De analisis a accion

En el bloque anterior identificamos 8-9 vulnerabilidades de seguridad. Ahora vamos a arreglarlas todas en una sola sesion con Claude Code. Esto demuestra la capacidad de Claude para hacer **trabajo complejo multi-archivo** de forma coordinada.

---

### Demo en vivo: Arreglar todas las vulnerabilidades

**Importante**: Sal de Plan Mode (`Shift+Tab`) para volver al modo normal. Ahora Claude SI puede modificar archivos.

#### El prompt (un solo prompt comprehensivo)

```
Basandote en el analisis de seguridad que acabamos de hacer, arregla las
siguientes vulnerabilidades criticas y altas en este proyecto:

1. CRITICA - JWT Secret hardcodeado: Mueve el secret a una variable de
   entorno. Crea un archivo .env con el secret y actualiza auth.js y
   users.js para leerlo de process.env.

2. CRITICA - Code injection en busqueda: En products.js, el endpoint de
   busqueda usa new Function() que permite inyeccion de codigo. Reemplazalo
   con un filtro seguro usando .filter() y .includes().

3. ALTA - Passwords en texto plano: Usa bcrypt para hashear passwords
   al registrar usuarios y para verificarlos en el login. Instala bcrypt
   si hace falta.

4. ALTA - DELETE sin autenticacion: Anade el middleware de autenticacion
   al endpoint DELETE /api/products/:id.

5. ALTA - Passwords en respuestas: Filtra el campo password de todas
   las respuestas que devuelvan datos de usuario.

6. MEDIA - Sin validacion de input: Anade validacion al POST /api/products:
   nombre requerido, precio debe ser numero positivo, stock debe ser entero >= 0.

7. MEDIA - GET usuarios sin autorizacion: Anade verificacion de que solo
   usuarios admin pueden listar todos los usuarios.

8. MEDIA - Sin verificacion de stock: Al crear un pedido, verifica que
   haya suficiente stock del producto antes de confirmarlo.

Ademas:
- Actualiza los tests existentes para que funcionen con los cambios
- Anade tests nuevos para la validacion de input y el hasheo de passwords
- Asegurate de que npm test pase al final

Hazlo paso a paso. Despues de cada archivo, explicame brevemente que cambiaste.
```

#### Que veras durante la demo

- Claude leyendo los archivos afectados para entender el contexto
- Instalando dependencias (`bcrypt`, `dotenv`) pidiendo permiso
- Modificando 4-5 archivos de forma coordinada
- Creando el archivo `.env` con el secret
- Actualizando tests existentes y creando nuevos
- Ejecutando `npm test` para verificar que todo pasa

#### Archivos que se modifican

| Archivo | Cambios |
|---------|---------|
| `src/middleware/auth.js` | Leer JWT secret de env var en vez de hardcoded |
| `src/routes/users.js` | Hashear passwords con bcrypt, filtrar passwords de respuestas |
| `src/routes/products.js` | Eliminar `new Function()`, agregar validacion, proteger DELETE |
| `src/routes/orders.js` | Verificar stock antes de crear pedido |
| `.env` | Nuevo archivo con JWT_SECRET |
| `tests/products.test.js` | Actualizar tests existentes + nuevos tests de validacion |

#### Puntos clave para observar

- **Un solo prompt, multiples archivos**: Claude trabaja de forma sistematica a traves del codebase.
- **Pide permiso**: Observa como Claude pide permiso para instalar dependencias con npm.
- **Contexto cruzado**: Claude entiende que cambiar `auth.js` afecta a los archivos que lo importan.
- **Tests al final**: La verificacion automatica confirma que nada se rompio.

#### Ejercicio para participantes (si hay tiempo)

Si quieres seguir la demo en tu propia maquina:
1. Asegurate de estar en `sample-project/` con Claude Code en modo normal (no Plan Mode).
2. Copia el prompt de arriba.
3. Deja que Claude trabaje. Si pide permiso para instalar paquetes, acepta.
4. Al final, verifica con `npm test`.

**Nota**: Si Claude tarda demasiado o se atasca, no te preocupes. El instructor tiene los cambios pre-preparados.

#### Problemas comunes

- **Claude hace demasiados cambios**: Se especifico. Si modifica archivos que no deberia, dile: "Solo modifica los archivos que te indique."
- **npm test falla despues de los cambios**: Pidele a Claude que lea el error y lo arregle: "Los tests fallan con este error: [error]. Arreglalo."
- **bcrypt no se instala**: En algunos sistemas, bcrypt requiere herramientas de compilacion. Alternativa: usa `bcryptjs` en lugar de `bcrypt`.

---

## Bloque 3: Crear un Pull Request

**Duracion**: 15 minutos (5 min demo + 10 min ejercicio)
**Dificultad**: ⭐⭐
**Audiencia**: Todos los participantes

### Contexto: Claude Code y Git

Claude Code tiene integracion nativa con Git y GitHub. Puede:

- Crear ramas, hacer commits y pushear cambios.
- Crear Pull Requests con titulo y descripcion formateada.
- Revisar PRs existentes y dar feedback.
- Explicar cambios en un PR en lenguaje no tecnico.

---

### Demo del instructor (5 min)

Despues del security hardening, el instructor pedira a Claude que empaquete todo el trabajo en un PR:

```
Crea una nueva rama llamada security/hardening-workshop.
Haz commit de todos los cambios con un mensaje descriptivo en espanol.
Luego crea un Pull Request hacia la rama principal con:
- Un titulo claro y conciso
- Una descripcion que explique las 8 vulnerabilidades que se arreglaron
- Una seccion "Como probar" con instrucciones paso a paso
- Una seccion "Para revisores no tecnicos" que explique el impacto en lenguaje llano

Pushea y crea el PR.
```

**Observa como Claude**:
1. Crea la rama con `git checkout -b`
2. Hace `git add` de los archivos modificados
3. Escribe un commit message descriptivo
4. Pushea con `git push -u origin`
5. Crea el PR con `gh pr create` y una descripcion rica en Markdown

El instructor abrira la URL del PR en el navegador para mostrar el resultado.

---

### Ejercicio 3.1: Crea tu propio PR

**Objetivo**: Crear una rama, hacer un cambio, commitear y crear un PR usando Claude Code.

**Tiempo**: 10 minutos

#### Instrucciones

1. Asegurate de estar en el directorio raiz del workshop:
   ```bash
   cd claude_workshop_march26
   claude
   ```

2. Pide a Claude que cree una rama de trabajo:
   ```
   Crea una nueva rama llamada feature/workshop-[tu-nombre]
   a partir de la rama principal
   ```

3. Pide un cambio concreto. Elige una opcion:

   **Opcion A** (si seguiste el Bloque 2):
   ```
   Haz commit de los cambios del security hardening y crea un PR
   con titulo y descripcion descriptivos en espanol.
   ```

   **Opcion B** (cambio mas sencillo):
   ```
   En sample-project/src/routes/products.js, anade validacion de entrada
   para el endpoint POST: el nombre no debe estar vacio y el precio debe
   ser un numero positivo. Luego haz commit y crea un PR.
   ```

4. Revisa el PR creado en GitHub (Claude te dara la URL).

#### Para personas de producto

Aunque no necesites crear PRs, observa lo facil que es el flujo. Prueba esto despues:
```
Muestrame los ultimos PRs y explicame cada uno como si fuera para
las release notes del producto.
```

O pide a Claude que revise el PR de un companero:
```
Revisa el Pull Request #[numero] y explicamelo como si fuera un
product manager. Dime que cambia para el usuario final y si hay riesgo.
```

#### Problemas comunes

- **"No tienes permiso para pushear"**: Necesitas acceso de escritura al repositorio. Verifica tu configuracion SSH/HTTPS con GitHub.
- **"La rama ya existe"**: Usa un nombre unico: `feature/workshop-[tu-nombre]-[timestamp]`.
- **Claude modifica archivos que no deberia**: Se especifico: "Solo modifica el archivo X."

---

## Bloque 4: Skills — La Nueva Gran Evolucion

**Duracion**: 30 minutos (5 min concepto + 5 min demo + 15 min hands-on + 5 min revelacion)
**Dificultad**: ⭐⭐⭐
**Audiencia**: Todos los participantes

### El problema

Acabamos de gastar 25 minutos haciendo un security audit y hardening. Fue impresionante. Pero preguntate: **que pasa la proxima semana cuando otro desarrollador suba codigo?** Hace el mismo analisis? Sigue los mismos criterios? Probablemente no.

Los Skills resuelven esto.

### Que son los Skills

Los Skills son **instrucciones reutilizables** que le dicen a Claude como hacer una tarea especifica. Piensa en ellos como recetas o plantillas de comportamiento.

Un Skill es simplemente un archivo Markdown guardado en `.claude/skills/` de tu proyecto:

```
.claude/skills/
  nombre-del-skill/
    SKILL.md          # Las instrucciones que Claude seguira
```

**Por que son importantes:**

- **Consistencia**: Todo el equipo obtiene el mismo resultado para la misma tarea.
- **Reutilizacion**: Escribes las instrucciones una vez, las usas para siempre.
- **Compartibilidad**: Viven en el repo, cualquiera del equipo puede usarlos via Git.
- **No requieren codigo**: Cualquier persona puede crear un Skill escribiendo instrucciones en lenguaje natural.

**Como invocar un Skill:**

Dentro de Claude Code, usa el comando:
```
/nombre-del-skill
```

O referencialo en tu prompt:
```
Usa el skill de code-review para revisar el archivo src/routes/orders.js
```

---

### Demo: Skills en accion (5 min)

#### 1. Explorar los Skills existentes

```
Muestrame que skills hay disponibles en .claude/skills/ y explicame
que hace cada uno en una tabla.
```

El repositorio incluye 4 Skills:
- **code-review**: Revisa codigo buscando bugs, seguridad y buenas practicas.
- **product-spec**: Genera especificaciones de producto a partir de una idea.
- **meeting-prep**: Prepara agendas y materiales para reuniones.
- **release-notes**: Genera release notes para usuarios finales.

#### 2. Usar el Skill de code-review

```
Usa el skill de code-review para revisar sample-project/src/routes/orders.js
```

Observa la salida estructurada: secciones de Pasa/Advertencias/Debe corregir, puntuaciones, formato consistente.

#### 3. Usar un Skill no-tecnico

```
Usa el skill de meeting-prep para preparar una reunion sobre prioridades
de producto del Q2 basandote en cowork-workspace/notas/reunion-producto-15mar.txt
```

Observa como genera una agenda estructurada con bloques de tiempo y puntos de discusion. **Un PM podria escribir y usar esto sin saber programar.**

---

### Ejercicio 4.1: Crea tu propio Skill (EJERCICIO PRINCIPAL)

**Objetivo**: Cada participante crea un Skill adaptado a su perfil profesional.

**Tiempo**: 15 minutos

Elige la pista que mejor se ajuste a tu rol:

---

#### Pista A: Desarrolladores — Skill de generacion de tests

**Objetivo**: Crear un Skill que genere tests automatizados para cualquier archivo.

##### Instrucciones

1. Pide a Claude que cree el Skill:
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

2. Verifica que se creo:
   ```
   Muestrame el contenido de .claude/skills/test-generator/SKILL.md
   ```

3. Pruebalo:
   ```
   Usa el skill test-generator para generar tests de
   sample-project/src/routes/products.js
   ```

4. Ejecuta los tests:
   ```
   Ejecuta los tests que acabas de generar
   ```

---

#### Pista B: Product Managers — Skill de release notes

**Objetivo**: Crear un Skill que genere release notes en lenguaje no tecnico.

##### Instrucciones

1. Pide a Claude que cree el Skill:
   ```
   Crea un skill en .claude/skills/release-notes/SKILL.md con las siguientes
   caracteristicas:

   - Nombre: Release Notes Generator
   - Proposito: Generar release notes en lenguaje no tecnico
   - El skill debe:
     1. Revisar los commits recientes o el diff de un PR
     2. Clasificar cambios en: Nuevas funcionalidades, Mejoras,
        Correcciones de bugs, Cambios internos
     3. Escribir descripciones que un usuario final entienda
     4. Ignorar cambios puramente tecnicos (refactoring, dependencias)
     5. Sugerir un titulo llamativo para la release
   - Formato: Markdown con secciones por categoria
   - Tono: Profesional pero accesible
   - Incluye un ejemplo de salida con 3-4 cambios ficticios
   ```

2. Pruebalo:
   ```
   Usa el skill release-notes para generar notas de lanzamiento
   basandote en los archivos del sample-project/. Imagina que esta
   es la version 1.0.0.
   ```

---

#### Pista C: Power Users — Skill de resumen de documentos

**Objetivo**: Crear un Skill que resuma documentos y extraiga action items.

##### Instrucciones

1. Pide a Claude que cree el Skill:
   ```
   Crea un skill en .claude/skills/doc-summarizer/SKILL.md con las siguientes
   caracteristicas:

   - Nombre: Document Summarizer
   - Proposito: Resumir documentos y extraer action items
   - El skill debe:
     1. Leer los documentos proporcionados
     2. Generar resumen ejecutivo (maximo 5 oraciones)
     3. Extraer puntos clave (bullet points)
     4. Identificar decisiones tomadas
     5. Listar action items con responsables
     6. Senalar preguntas abiertas
     7. Sugerir proximos pasos
   - Formato: Markdown estructurado
   - Tono: Profesional y conciso
   - Incluye un ejemplo basado en un acta de reunion ficticia
   ```

2. Pruebalo:
   ```
   Usa el skill doc-summarizer para resumir las notas en
   cowork-workspace/notas/reunion-producto-15mar.txt
   ```

---

### Verificacion (todas las pistas)

- El archivo `SKILL.md` existe en `.claude/skills/[nombre]/SKILL.md`.
- Las instrucciones son claras y no ambiguas.
- El Skill produce salida consistente cada vez que lo invocas.
- Otra persona podria usarlo sin explicacion adicional.

### Ejercicio 4.2: Itera y mejora tu Skill

**Tiempo**: 5 minutos

1. Revisa la salida de tu Skill. Identifica algo que mejorar.
2. Pidele a Claude que lo refine:
   ```
   Mejora el skill [nombre] para que tambien incluya [lo que falta].
   Actualiza el archivo SKILL.md.
   ```
3. Vuelve a probar y compara.

---

### La revelacion: por que esto cambia todo (5 min)

Los Skills viven en `.claude/skills/` — que esta **dentro de tu repositorio Git**.

Esto significa:

1. **Cuando haces push**, todo el equipo obtiene tus Skills.
2. **Cuando alguien nuevo se une**, hereda la experiencia acumulada del equipo desde el dia 1.
3. **Son versionados**: puedes ver quien creo un Skill, cuando, y como ha evolucionado.
4. **Son revisables**: puedes abrir un PR para proponer un nuevo Skill y el equipo lo revisa.
5. **Son iterables**: si la salida no es perfecta, mejoras las instrucciones y toda la ejecucion futura es mejor.

**El flujo de compartir un Skill:**
1. Alguien crea o mejora un Skill en su rama.
2. Abre un PR — el equipo revisa las instrucciones.
3. Se mergea — todos tienen acceso inmediato.
4. El conocimiento institucional crece con cada iteracion.

**Personal vs Proyecto**: Los Skills en `.claude/skills/` son del proyecto. Tambien puedes crear Skills personales en `~/.claude/skills/` que solo tu usas. Consulta la [guia de Skills](guides/skills-guide.md) para mas detalles.

#### Problemas comunes

- **Claude no encuentra el Skill**: La ruta debe ser exactamente `.claude/skills/nombre/SKILL.md`. El archivo debe llamarse `SKILL.md` en mayusculas.
- **La salida es inconsistente**: Anade mas ejemplos al Skill. Los ejemplos definen el formato esperado.
- **El Skill es demasiado generico**: Se mas especifico. En lugar de "resume el documento", especifica cuantos puntos, que formato, que nivel de detalle.
- **No se como empezar**: Pide ayuda a Claude: "Ayudame a crear un skill para [caso de uso]. Hazme preguntas."

#### Para saber mas

- [Guia completa de Skills](guides/skills-guide.md)
- [Documentacion oficial de Skills](https://docs.anthropic.com/en/docs/claude-code/skills)

---

## Bloque 5: Cowork — Mas Alla del Codigo

**Duracion**: 15 minutos (10 min demos + 5 min exploracion)
**Dificultad**: ⭐⭐
**Audiencia**: Todos (foco en producto y power users)

### Contexto: Que es Claude Cowork

Claude Cowork es Claude con superpoderes de escritorio. A diferencia de Claude Chat (que solo conversa), Cowork puede:

- **Leer y escribir archivos** en carpetas de tu computadora.
- **Organizar informacion** dispersa en documentos estructurados.
- **Procesar datos** de hojas de calculo y archivos CSV.
- **Generar reportes** a partir de datos crudos.
- **Trabajar con proyectos persistentes** que recuerdan el contexto.

| Aspecto | Claude Code | Claude Cowork |
|---------|-------------|---------------|
| Interfaz | Terminal (CLI) | Claude Desktop (GUI) |
| Publico principal | Desarrolladores | Toda la organizacion |
| Ejecuta codigo | Si | No directamente |
| Git integration | Nativa | No |
| Conectores | No | Google Drive, Gmail, etc. |

**Para este bloque**: Necesitas Claude Desktop con Cowork o, si eres dev, puedes usar Claude Code sobre la misma carpeta.

---

### Demo 1: Organizar notas caoticas (4 min)

La carpeta `cowork-workspace/notas/` contiene notas desordenadas de la empresa ficticia ClaroPago: actas de reunion, feedback de clientes, ideas de app movil, una llamada con inversores, y una lista personal de pendientes.

```
Lee todas las notas en la carpeta notas/. Crea un documento
notas/RESUMEN-NOTAS.md que:
1. Agrupe la informacion por tema
2. Extraiga todos los action items pendientes con responsable
3. Identifique decisiones tomadas
4. Senale informacion potencialmente desactualizada
```

**Observa**: Cowork lee 5 archivos con formatos dispares, informacion mezclada entre personal y profesional, y produce un documento estructurado.

---

### Demo 2: Completar informe trimestral con datos reales (4 min)

El archivo `informes/borrador-informe-trimestral.md` es un borrador con 11 marcadores `[TODO]` que necesitan datos reales. Esos datos estan dispersos en el CSV de gastos, el analisis de competencia, las notas de reunion, y la llamada con inversores.

```
Usando TODA la informacion disponible en esta carpeta (notas, gastos, informes),
completa el borrador de informe trimestral en informes/borrador-informe-trimestral.md.
Rellena todos los [TODO] con datos reales extraidos de los otros archivos.
Incluye:
- Resumen ejecutivo
- Metricas completadas con datos reales
- Analisis de gastos del CSV de marzo
- Analisis competitivo basado en las notas
- Riesgos identificados
```

**Este es el momento "wow"**: Claude cruza datos de multiples fuentes y formatos para producir un informe completo.

---

### Demo 3: Conectores (2 min)

Mencion rapida de los conectores disponibles:

| Conector | Que permite |
|----------|-------------|
| **Google Drive** | Acceder a documentos de Drive desde Cowork |
| **Gmail** | Leer y resumir hilos de correo |
| **DocuSign** | Gestionar documentos firmados |

Configuracion: Claude Desktop > Configuracion > Conectores > Autorizar servicios.

---

### Ejercicio para participantes (5 min)

Elige uno de estos:

**Opcion A — Reporte de gastos:**
```
Con los datos de la carpeta gastos/, crea un reporte profesional en
gastos/REPORTE-GASTOS.md con: resumen ejecutivo, desglose por categoria,
top 5 gastos mas grandes, y recomendaciones para reducir gastos.
```

**Opcion B — Resumen ejecutivo:**
```
Usando toda la informacion en informes/, crea un resumen ejecutivo de
maximo 800 palabras en informes/RESUMEN-EJECUTIVO.md para el equipo directivo.
```

#### Con Claude Code (alternativa para devs)

```bash
cd claude_workshop_march26/cowork-workspace
claude
```
Usa los mismos prompts. Claude Code accede a los archivos igual que Cowork.

#### Problemas comunes

- **Cowork no ve los archivos**: Verifica que seleccionaste `cowork-workspace/`, no la raiz del repo.
- **Los numeros no cuadran**: Pidele que verifique: "Suma todos los gastos y confirma que el total es correcto."
- **El tono es demasiado tecnico**: Pidele: "Reescribelo como si fuera para el CEO."

---

## Bloque 6: Tips Avanzados y Cierre

**Duracion**: 5 minutos (solo demos, sin ejercicio)
**Audiencia**: Todos

### Este bloque es demostrativo. Observa, toma notas y pregunta.

---

### 1. Hooks — Automatiza acciones (1 min)

Los Hooks son acciones automaticas que se disparan durante el flujo de Claude Code:

```json
// .claude/settings.json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write|Edit",
        "hooks": [
          {
            "type": "command",
            "command": "echo '[$(date)] Modified: $FILE_PATH' >> .claude/audit.log"
          }
        ]
      }
    ]
  }
}
```

**Casos de uso**: Ejecutar tests despues de cada cambio, formatear archivos, validar que no se suban secretos, notificar a Slack.

---

### 2. Permisos por directorio (1 min)

Puedes configurar que Claude tenga diferentes niveles de acceso segun el directorio:

```json
{
  "permissions": {
    "rules": [
      {
        "working_directory": "src/core/**",
        "defaultMode": "plan",
        "reason": "Logica de negocio critica: solo analisis"
      },
      {
        "working_directory": "tests/**",
        "defaultMode": "acceptEdits",
        "reason": "Tests son seguros de modificar"
      }
    ]
  }
}
```

Esto protege el codigo critico mientras da libertad en areas seguras.

---

### 3. Pipes de Unix (1 min)

Claude Code se integra con pipes para workflows poderosos:

```bash
# Release notes desde commits
git log --oneline -20 | claude "Genera release notes de estos commits"

# Transformar datos
cat datos.csv | claude "Convierte esto a JSON y limpia datos vacios"

# Analizar dependencias
npm audit --json | claude "Explicame las vulnerabilidades criticas"
```

---

### Recapitulacion: El arco completo (2 min)

Hoy recorrimos un flujo completo de trabajo con IA:

| Paso | Que hicimos | Herramienta |
|------|-------------|-------------|
| **Analizar** | Auditoria de seguridad sin tocar nada | Plan Mode |
| **Ejecutar** | Arreglar 8 vulnerabilidades multi-archivo | Claude Code |
| **Enviar** | Crear rama, commit y PR desde terminal | Claude Code + Git |
| **Automatizar** | Crear Skills reutilizables para el equipo | Skills |
| **Expandir** | Organizar datos y generar informes de negocio | Cowork |

Claude trabaja donde tu trabajas: en la terminal, en el escritorio, y en tu flujo de Git.

---

### Recursos finales

| Recurso | Enlace |
|---------|--------|
| Documentacion Claude Code | [docs.anthropic.com](https://docs.anthropic.com/en/docs/claude-code) |
| Guia de Cowork | [support.claude.com](https://support.claude.com/en/articles/13345190-get-started-with-cowork) |
| Guia de Skills del workshop | [guides/skills-guide.md](guides/skills-guide.md) |
| Guia de Cowork del workshop | [guides/cowork-guide.md](guides/cowork-guide.md) |
| Referencia rapida | [guides/quick-reference.md](guides/quick-reference.md) |
| Soluciones de ejercicios | [solutions/](solutions/) |
| Skills de ejemplo | [.claude/skills/](.claude/skills/) |

### Preguntas frecuentes

**P: Claude Code es gratis?**
R: Claude Code usa tu suscripcion de Claude (Pro, Team o Enterprise). No tiene costo adicional, pero consume uso de tu plan.

**P: Mis datos estan seguros?**
R: Claude Code procesa tu codigo localmente y envia solo el contexto necesario a los servidores de Anthropic. Consulta la [politica de privacidad](https://anthropic.com/privacy).

**P: Que diferencia hay entre un Skill y un Agente?**
R: Un Skill es un conjunto de instrucciones para una tarea especifica. Un Agente es un rol completo que define como Claude se comporta en general. Los Skills son mas especificos; los Agentes son mas amplios.

**P: Cowork puede acceder a cualquier archivo?**
R: Solo a los archivos dentro de la carpeta que seleccionas como workspace. Necesita tu permiso explicito.
