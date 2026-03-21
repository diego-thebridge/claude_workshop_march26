# Solución — Bloque 4: Claude Cowork

## Ejercicio 4.1: Organizar notas desordenadas

### Prompt usado en Cowork
```
Lee todas las notas en la carpeta notas/. Necesito que:
1. Analices el contenido de cada archivo
2. Crees un resumen organizado por fecha de cada nota
3. Extraigas todos los action items pendientes en un archivo separado
4. Identifiques temas recurrentes entre las notas
5. Genera los archivos resultantes en la misma carpeta
```

### Resultado esperado

Cowork debería generar:

**notas/resumen-organizado.md**
- Notas ordenadas cronológicamente
- Cada una con título, fecha y resumen de 3-5 líneas

**notas/action-items-pendientes.md**
- Action items extraídos de todas las notas
- Agrupados por área (producto, inversores, clientes, personal)
- Solo los pendientes (excluir los marcados como "hecho")

**notas/temas-recurrentes.md**
- Temas que aparecen en múltiples notas (roadmap Q2, app móvil, métricas, hiring)
- Referencias cruzadas a las notas originales

---

## Ejercicio 4.2: Informe de gastos

### Prompt usado en Cowork
```
En la carpeta gastos/ hay datos de gastos del mes. Necesito que:
1. Leas el CSV de marzo y los recibos pendientes
2. Crees un informe de gastos con:
   - Total gastado en marzo
   - Desglose por categoría (tabla)
   - Top 3 gastos más grandes
   - Comparación con el presupuesto Q2
3. Identifica gastos recurrentes vs puntuales
4. Genera el informe como archivo Markdown
```

### Resultado esperado

**gastos/informe-marzo-2026.md** con:
- Resumen ejecutivo (total, número de transacciones)
- Tabla de gastos por categoría con totales y porcentajes
- Alerta si alguna categoría excede el presupuesto mensual (~145k MXN/mes = 580k/4)
- Lista de suscripciones recurrentes identificadas
- Recibos pendientes que necesitan procesarse

### Notas para el instructor
- El CSV tiene inconsistencias de formato en las fechas (YYYY-MM-DD y MM/DD/YYYY) — Cowork debería manejarlas
- Si participantes usan Claude Code en vez de Cowork, el ejercicio funciona igualmente con prompts similares

---

## Ejercicio 4.3: Resumen ejecutivo

### Prompt usado en Cowork
```
En la carpeta informes/ hay un borrador incompleto de informe trimestral,
métricas de producto de febrero y un análisis de competencia. Necesito que:
1. Leas todos los documentos
2. Completes los [TODO] del borrador con datos reales de las métricas
3. Generes un resumen ejecutivo de 1 página que incluya:
   - Métricas clave del trimestre
   - Posición competitiva
   - Logros principales
   - Áreas de mejora
   - Recomendaciones para Q2
```

### Resultado esperado

**informes/resumen-ejecutivo-q1.md**:
- Datos cuantitativos del archivo de métricas (DAU, MAU, retention, etc.)
- Contexto competitivo del análisis de competencia
- Narrativa coherente que conecte métricas con estrategia
- Recomendaciones accionables basadas en los datos

**informes/borrador-informe-trimestral-completado.md**:
- El borrador original con los [TODO] reemplazados por contenido real
- Datos extraídos de los otros archivos

### Notas para el instructor
- Este ejercicio demuestra el poder de Cowork para sintetizar información de múltiples fuentes
- Enfatizar que el resultado es un borrador — siempre revisar antes de compartir
- Para el formato extendido del workshop, se puede pedir que también genere una presentación en Markdown
