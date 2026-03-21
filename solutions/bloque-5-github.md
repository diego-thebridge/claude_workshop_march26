# Solución — Bloque 5: GitHub Integration

## Ejercicio 5.1: Flujo completo Git + PR

### Pasos ejecutados en Claude Code

```
1. "Crea una rama llamada fix/input-validation"

2. "En sample-project/src/routes/products.js, añade validación
    de entrada en el POST para que name sea string obligatorio,
    price sea número positivo y stock sea entero no negativo"

3. "Haz commit con un mensaje descriptivo"

4. "Crea un PR con título y descripción del cambio"
```

### Resultado esperado

**Rama creada**: `fix/input-validation`

**Cambios en `src/routes/products.js`**:
```javascript
// Antes (sin validación)
router.post('/', authenticate, (req, res) => {
  const products = readData('products');
  const newProduct = { id: products.length + 1, ...req.body };
  // ...
});

// Después (con validación)
router.post('/', authenticate, (req, res) => {
  const { name, price, stock, description, category } = req.body;

  if (!name || typeof name !== 'string') {
    return res.status(400).json({ error: 'name es obligatorio y debe ser texto' });
  }
  if (price === undefined || typeof price !== 'number' || price <= 0) {
    return res.status(400).json({ error: 'price debe ser un número positivo' });
  }
  if (stock !== undefined && (!Number.isInteger(stock) || stock < 0)) {
    return res.status(400).json({ error: 'stock debe ser un entero no negativo' });
  }

  const products = readData('products');
  const newProduct = { id: products.length + 1, name, price, stock: stock || 0, description, category };
  // ...
});
```

**PR creado** con:
- Título: "Add input validation for product creation endpoint"
- Descripción con resumen del cambio, motivación y testing

### Notas para el instructor
- Los participantes NO necesitan hacer push real (a menos que sea su propio fork)
- Para la demo, tú puedes hacer push y mostrar el PR en GitHub
- Enfatizar que Claude genera commits y PRs con formato profesional

---

## Ejercicio 5.2: Review de PR

### Para desarrolladores
```
Revisa el PR que acabamos de crear. Analiza:
- ¿La validación es completa?
- ¿Hay edge cases que falten?
- ¿Se necesitan tests adicionales?
```

### Para producto
```
Explícame qué hace este PR en lenguaje no técnico.
¿Qué problema resuelve? ¿Cómo afecta al usuario final?
```

### Resultado esperado — Review técnica
- Identificar que falta validación en PUT (solo se añadió en POST)
- Sugerir tests para los nuevos casos de validación
- Posiblemente sugerir un middleware de validación reutilizable

### Resultado esperado — Explicación para producto
Algo como:
> "Este cambio añade comprobaciones cuando se crean productos nuevos en la API.
> Antes, se podía crear un producto sin nombre o con precio negativo, lo que podía
> causar errores en la aplicación. Ahora el sistema verifica que los datos sean
> correctos antes de guardarlos. Impacto al usuario: los productos en el catálogo
> siempre tendrán información válida."
