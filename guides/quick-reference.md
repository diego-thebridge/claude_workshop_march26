# Referencia Rápida — Claude Code & Cowork

## Claude Code — Comandos Esenciales

### Iniciar sesión
```bash
claude                    # Modo interactivo
claude "tarea"            # Ejecutar tarea directa
claude -c                 # Continuar última conversación
claude -r                 # Continuar en modo resume
```

### Slash Commands dentro de Claude Code
| Comando | Descripción |
|---------|-------------|
| `/help` | Ayuda general |
| `/plan` | Entrar/salir de Plan Mode (solo lectura) |
| `/cost` | Ver coste acumulado de la sesión |
| `/context` | Ver archivos en contexto |
| `/agents` | Listar agents disponibles |
| `/skills` | Listar skills disponibles |
| `/compact` | Comprimir contexto |
| `/clear` | Limpiar conversación |

### Atajos de teclado
| Atajo | Acción |
|-------|--------|
| `Shift+Tab` | Cambiar modo de permisos |
| `Tab` | Autocompletar archivos y comandos |
| `Ctrl+C` | Cancelar operación actual |
| `Ctrl+B` | Enviar tarea a segundo plano |
| `Option+T` / `Alt+T` | Activar pensamiento extendido |

### Modos de permisos
| Modo | Comportamiento |
|------|---------------|
| **default** | Pide confirmación para cada acción |
| **acceptEdits** | Aprueba ediciones automáticamente |
| **plan** | Solo lectura — no puede modificar nada |

### Git desde Claude Code
```
"crea una rama feature/mi-cambio"
"haz commit con mensaje descriptivo"
"crea un PR con resumen de los cambios"
"revisa el PR #123"
```

### Pipes Unix (avanzado)
```bash
cat archivo.log | claude "analiza estos errores"
git diff | claude "revisa estos cambios"
echo "idea de feature" | claude "genera una spec de producto"
```

---

## Claude Cowork — Guía Rápida

### Cómo empezar
1. Abrir Claude Desktop
2. Iniciar una conversación con Cowork
3. Seleccionar una carpeta de trabajo
4. Describir la tarea

### Tareas comunes
| Tarea | Ejemplo de prompt |
|-------|------------------|
| Organizar archivos | "Organiza los archivos de esta carpeta por categoría" |
| Crear informe | "Genera un informe ejecutivo a partir de estas notas" |
| Procesar datos | "Crea un spreadsheet con los gastos del CSV" |
| Resumir documentos | "Resume los puntos clave de todos los documentos" |
| Preparar reunión | "Prepara una agenda estructurada para la reunión de mañana" |

### Proyectos en Cowork
- Los proyectos son workspaces persistentes con su propia memoria
- Cada proyecto tiene sus archivos, instrucciones y contexto
- Útil para trabajo recurrente (informes semanales, seguimiento, etc.)

### Conectores disponibles
- Google Drive
- Gmail
- DocuSign
- FactSet
- (lista en expansión)

---

## Skills — Referencia Rápida

### Estructura de un Skill
```
.claude/skills/nombre-del-skill/
└── SKILL.md         # Instrucciones del skill
```

### Formato de SKILL.md
```markdown
---
name: nombre-del-skill
description: Descripción breve de lo que hace
---

# Instrucciones

[Instrucciones detalladas para Claude sobre cómo ejecutar este skill]
```

### Invocar un Skill
```
/nombre-del-skill              # Desde Claude Code
"usa el skill nombre-del-skill" # Como instrucción
```

### Ubicaciones de Skills
| Ubicación | Alcance |
|-----------|---------|
| `.claude/skills/` | Proyecto (compartido via Git) |
| `~/.claude/skills/` | Personal (solo tu máquina) |

---

## Agents — Referencia Rápida

### Estructura de un Agent
```
.claude/agents/nombre-del-agent.md
```

### Invocar un Agent
```
/agents                           # Listar agents disponibles
"usa el agent security-auditor"   # Invocar directamente
```
