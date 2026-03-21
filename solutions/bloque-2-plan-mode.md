# Solución — Bloque 2: Plan Mode y Exploración

## Ejercicio 2.1: Análisis de arquitectura y seguridad

### Prompt usado
```
/plan
Analiza este proyecto completo. Quiero un informe con:
1. Arquitectura general y stack tecnológico
2. Estructura de archivos y responsabilidad de cada módulo
3. Vulnerabilidades de seguridad que encuentres
4. Recomendaciones de mejora priorizadas
```

### Resultado esperado

Claude debería identificar:

#### Arquitectura
- Express.js con almacenamiento en JSON (sin base de datos)
- Rutas: products, users, orders
- Middleware de autenticación JWT
- Sin capas de servicio (lógica directamente en rutas)

#### Vulnerabilidades encontradas (9 en total)

| # | Severidad | Vulnerabilidad | Archivo |
|---|-----------|---------------|---------|
| 1 | CRÍTICA | JWT secret hardcodeado (`super-secret-key-12345`) | `src/middleware/auth.js`, `src/routes/users.js` |
| 2 | CRÍTICA | Inyección de código via `new Function()` en búsqueda | `src/routes/products.js` |
| 3 | ALTA | Contraseñas almacenadas en texto plano | `src/routes/users.js` |
| 4 | ALTA | Endpoint de perfil expone contraseña | `src/routes/users.js` |
| 5 | ALTA | DELETE de productos sin autenticación | `src/routes/products.js` |
| 6 | ALTA | Cualquier usuario puede ver cualquier orden | `src/routes/orders.js` |
| 7 | MEDIA | No se verifica stock al crear órdenes | `src/routes/orders.js` |
| 8 | MEDIA | Sin validación de entrada en POST/PUT productos | `src/routes/products.js` |
| 9 | MEDIA | Sin verificación de rol admin en listado de usuarios | `src/routes/users.js` |

### Notas para el instructor
- Si algún participante no encuentra las 9, está bien — el objetivo es practicar Plan Mode, no encontrar todas
- Enfatizar que Plan Mode NO modifica archivos — se puede explorar con confianza
- Para producto: pedir que analice el proyecto "como si fueras un PM que necesita entender qué hace esta API"

---

## Ejercicio 2.2: Generación de documentación

### Prompt usado
```
Genera documentación técnica completa de la API de este proyecto:
- Descripción general
- Endpoints disponibles con método, ruta, parámetros y respuestas
- Autenticación
- Modelos de datos
```

### Resultado esperado

Un documento Markdown con:
- Descripción del proyecto
- Tabla de endpoints (6-8 rutas)
- Sección de autenticación (JWT Bearer token)
- Schemas de los modelos (Product, User, Order)
- Ejemplos de request/response
