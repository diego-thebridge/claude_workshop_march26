---
name: code-review
description: Revisión de código con estándares del equipo — estilo, seguridad, testing y documentación
---

# Code Review

Realiza una revisión de código exhaustiva siguiendo los estándares del equipo.

## Proceso de revisión

1. **Contexto**: Lee el archivo o cambios indicados y entiende su propósito
2. **Estilo**: Verifica convenciones de código
3. **Seguridad**: Busca vulnerabilidades comunes
4. **Testing**: Evalúa cobertura y calidad de tests
5. **Documentación**: Verifica que el código sea comprensible

## Estándares de estilo

- Funciones de máximo 50 líneas
- Responsabilidad única por función
- Nombres descriptivos en camelCase (variables/funciones) y PascalCase (clases)
- Sin código comentado ni console.log de debug
- Manejo consistente de errores (try/catch o callbacks)

## Estándares de seguridad

- Sin secrets hardcodeados (contraseñas, API keys, tokens)
- Validación de todas las entradas de usuario
- Queries parametrizadas (nunca concatenación de strings)
- Verificación de autenticación en endpoints protegidos
- Verificación de autorización (roles y permisos)
- Sin uso de eval(), Function(), o ejecución dinámica de código

## Estándares de testing

- Mínimo 80% de cobertura
- Tests para happy path, edge cases y errores
- Patrón AAA (Arrange, Act, Assert)
- Mocks solo para dependencias externas
- Nombres descriptivos en los tests

## Formato de salida

```
## Revisión de código: [nombre del archivo]

### Pasa
- [Lo que está bien hecho]

### Advertencias
- [Cosas mejorables pero no críticas]

### Debe corregirse
- [Problemas que deben resolverse antes de merge]

### Resumen
- Estilo: X/5
- Seguridad: X/5
- Testing: X/5
- Documentación: X/5
- **Recomendación**: [Aprobar / Aprobar con cambios / Rechazar]

### Sugerencias
- [Ideas de mejora opcionales]
```
