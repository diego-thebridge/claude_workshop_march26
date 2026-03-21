# Guía de Claude Cowork

## ¿Qué es Cowork?

Claude Cowork es la forma más accesible de trabajar con Claude de forma agéntica. Mientras que Claude Code está diseñado para desarrolladores en la terminal, **Cowork lleva esas mismas capacidades a Claude Desktop para trabajo de conocimiento**.

Con Cowork, le das a Claude acceso a una carpeta de tu ordenador y puede:
- **Leer** archivos existentes
- **Editar** documentos
- **Crear** nuevos archivos
- **Organizar** contenido
- Ejecutar **tareas complejas de múltiples pasos**

## ¿Para quién es Cowork?

Cowork está diseñado para cualquier profesional, no solo desarrolladores:

| Rol | Casos de uso |
|-----|-------------|
| Product Managers | Generar specs, analizar datos, preparar presentaciones |
| Analistas | Procesar datos, crear informes, análisis competitivo |
| Managers | Preparar reuniones, organizar documentación, reportes |
| Marketing | Crear contenido, analizar métricas, email campaigns |
| Cualquiera | Organizar archivos, resumir documentos, automatizar tareas repetitivas |

## Cowork vs Claude Code vs Claude Chat

| Característica | Claude Chat | Claude Cowork | Claude Code |
|---------------|-------------|---------------|-------------|
| Interfaz | Web/App | Desktop (visual) | Terminal (CLI) |
| Acceso a archivos | No | Sí (carpeta local) | Sí (proyecto completo) |
| Ejecución multi-paso | No | Sí | Sí |
| Audiencia principal | Todos | Knowledge workers | Desarrolladores |
| Complejidad | Baja | Media | Alta |
| Autonomía | Baja | Alta | Muy alta |

## Empezar con Cowork

### Requisitos
- Claude Desktop instalado (macOS o Windows)
- Plan Pro, Team o Enterprise
- Una carpeta con archivos sobre los que trabajar

### Primer uso
1. Abre Claude Desktop
2. Inicia una nueva conversación
3. Activa Cowork y selecciona tu carpeta de trabajo
4. Describe lo que necesitas

### Ejemplo de primera tarea
```
Tengo una carpeta con notas desordenadas de reuniones del último mes.
Necesito que:
1. Leas todas las notas
2. Extraigas los action items pendientes
3. Crees un archivo resumen organizado por fecha
4. Identifiques temas recurrentes
```

Claude hará un plan, te lo mostrará, y lo ejecutará paso a paso.

## Casos de uso detallados

### 1. Organizar archivos desordenados

**Prompt**: "Organiza todos los archivos de esta carpeta. Renómbralos con formato YYYY-MM-DD-titulo, clasifícalos en subcarpetas por tema, y genera un índice."

**Lo que hace Cowork**:
- Lee todos los archivos
- Analiza el contenido de cada uno
- Propone una estructura de carpetas
- Renombra y mueve los archivos
- Crea un archivo `INDICE.md` con enlaces a todo

### 2. Generar informes desde datos en bruto

**Prompt**: "A partir de los CSVs de gastos y las notas en esta carpeta, genera un informe trimestral con: resumen ejecutivo, desglose por categoría, tendencias, y recomendaciones."

**Lo que hace Cowork**:
- Lee los CSVs y extrae datos
- Analiza las notas para contexto cualitativo
- Calcula totales, promedios y tendencias
- Genera un informe Markdown estructurado
- Incluye tablas con los datos procesados

### 3. Preparar reuniones

**Prompt**: "Mañana tengo una reunión de revisión trimestral. En esta carpeta están las notas de las últimas 4 reuniones y las métricas del trimestre. Prepárame: agenda, puntos clave a discutir, preguntas que debería hacer, y una plantilla para las notas de mañana."

### 4. Procesar feedback de clientes

**Prompt**: "Estos archivos contienen feedback de clientes de distintas fuentes. Necesito un análisis con: temas más mencionados, sentimiento general, top 5 peticiones de features, y issues críticos que necesitan atención inmediata."

### 5. Crear documentación

**Prompt**: "A partir del código y las notas en esta carpeta, genera documentación para el equipo: guía de onboarding, FAQ, y glosario de términos del proyecto."

## Proyectos en Cowork

Los **Proyectos** son workspaces persistentes que mantienen contexto entre sesiones.

### Crear un Proyecto
1. En Cowork, selecciona "Nuevo Proyecto"
2. Asigna una carpeta local
3. Añade instrucciones personalizadas (opcional)
4. El proyecto recuerda el contexto entre conversaciones

### Cuándo usar Proyectos
- Informes semanales o mensuales recurrentes
- Seguimiento continuo de un área (gastos, métricas, etc.)
- Trabajo que evoluciona a lo largo del tiempo
- Cuando necesitas que Claude recuerde decisiones anteriores

## Conectores

Cowork puede conectarse a servicios externos para ampliar sus capacidades:

| Conector | Qué permite |
|----------|-------------|
| Google Drive | Leer y editar documentos en Drive |
| Gmail | Buscar y gestionar emails |
| DocuSign | Gestionar documentos para firma |
| FactSet | Acceder a datos financieros |

Los conectores se configuran desde las preferencias de Claude Desktop.

## Tips para sacar el máximo partido

1. **Sé específico en el resultado esperado** — "crea un informe" es vago; "crea un informe con resumen ejecutivo, 3 gráficos y recomendaciones" es claro
2. **Deja que planifique primero** — Cowork te muestra su plan antes de ejecutar; revísalo
3. **Itera** — Si el primer resultado no es perfecto, pide ajustes específicos
4. **Usa Proyectos para trabajo recurrente** — Evita re-explicar contexto cada vez
5. **Combina archivos de distintos formatos** — Cowork maneja texto, CSV, Markdown, etc.
6. **Revisa antes de enviar** — Cowork genera borradores excelentes, pero siempre revisa antes de compartir externamente
