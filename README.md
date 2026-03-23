# Workshop: Claude Code — De Analizar a Enviar

## Descripcion

Workshop practico de **120 minutos** donde aprenderas a usar **Claude Code** y **Claude Cowork** para analizar, construir, enviar y automatizar trabajo real. Recorremos un arco completo: auditar seguridad en modo lectura, arreglar vulnerabilidades con trabajo multi-archivo, crear un Pull Request, automatizar tareas con Skills, y expandir el uso de IA mas alla del codigo con Cowork.

## Para quien es este workshop

| Perfil | Que vas a aprender |
|--------|-------------------|
| **Desarrolladores** | Plan Mode, security hardening multi-archivo, PRs automatizados, Skills de codigo |
| **Product Managers** | Analisis de PRs, release notes automatizadas, Skills de producto, Cowork |
| **Power Users** | Cowork para organizar archivos, generar informes, resumir documentos |

## Prerequisitos

### Todos los participantes
- Cuenta en [claude.ai](https://claude.ai) (plan Pro, Team o Enterprise)
- [Git](https://git-scm.com/) instalado (v2.30+)
- Cuenta de [GitHub](https://github.com)
- Familiaridad basica con la terminal

### Track Desarrolladores (adicional)
- [Claude Code CLI](https://docs.anthropic.com/en/docs/claude-code) instalado
- Node.js 18+ (solo para el proyecto de ejemplo)

### Track Producto / Power Users (adicional)
- [Claude Desktop](https://claude.ai/download) con Cowork habilitado

> **Nota**: Este workshop NO requiere Docker, bases de datos ni configuracion de MCPs.

## Setup Pre-Workshop (30 min antes)

### 1. Clonar el repositorio
```bash
git clone https://github.com/diego-thebridge/claude_workshop_march26.git
cd claude_workshop_march26
```

### 2. Track Desarrolladores — Instalar el proyecto de ejemplo
```bash
cd sample-project
npm install
npm test  # Verificar que funciona
cd ..
```

### 3. Track Cowork — Verificar acceso
1. Abrir Claude Desktop
2. Verificar que Cowork esta disponible
3. Seleccionar la carpeta `cowork-workspace/` como carpeta de trabajo

### 4. Verificar Claude Code (desarrolladores)
```bash
claude --version
claude "di hola"
```

## Agenda (120 min)

| Tiempo | Bloque | Contenido | Audiencia |
|--------|--------|-----------|-----------|
| 00:00 - 00:10 | **Bloque 0** | Bienvenida y Setup | Todos |
| 00:10 - 00:30 | **Bloque 1** | Plan Mode — Auditoria de seguridad | Devs (producto observa) |
| 00:30 - 00:55 | **Bloque 2** | Trabajo complejo — Security hardening | Todos |
| 00:55 - 01:10 | **Bloque 3** | Crear un Pull Request | Todos |
| 01:10 - 01:40 | **Bloque 4** | Skills — La nueva gran evolucion | Todos |
| 01:40 - 01:55 | **Bloque 5** | Cowork — Mas alla del codigo | Todos (foco producto) |
| 01:55 - 02:00 | **Bloque 6** | Tips avanzados y cierre | Todos |

### El arco narrativo

```
Analizar → Planificar → Ejecutar → Enviar → Automatizar → Expandir
Plan Mode    Plan Mode    Code       Git/PR    Skills       Cowork
```

## Estructura del Repositorio

```
claude_workshop_march26/
├── README.md                 # Este archivo
├── INDEX.md                  # Navegacion por perfiles
├── EXERCISES.md              # Todos los ejercicios paso a paso
├── INSTRUCTOR-GUIDE.md       # Guia para el instructor
├── .claude/
│   ├── settings.json         # Configuracion de permisos
│   ├── agents/               # Agents de ejemplo
│   │   └── security-auditor.md
│   └── skills/               # Skills de ejemplo
│       ├── code-review/
│       ├── product-spec/
│       ├── meeting-prep/
│       └── release-notes/
├── sample-project/           # API Express.js con vulnerabilidades intencionales
│   ├── package.json
│   ├── src/
│   ├── tests/
│   └── data/
├── cowork-workspace/         # Archivos de empresa ficticia para Cowork
│   ├── notas/
│   ├── gastos/
│   └── informes/
├── guides/
│   ├── quick-reference.md    # Referencia rapida de comandos
│   ├── skills-guide.md       # Guia completa de Skills
│   └── cowork-guide.md       # Guia de Cowork
├── examples/
│   └── settings-advanced.json # Ejemplo avanzado de hooks y permisos
└── solutions/                # Soluciones de los ejercicios
```

## Materiales de Referencia

- [Documentacion oficial de Claude Code](https://docs.anthropic.com/en/docs/claude-code)
- [Guia de Cowork](https://support.claude.com/en/articles/13345190-get-started-with-cowork)
- [Referencia rapida](guides/quick-reference.md)
- [Guia de Skills](guides/skills-guide.md)
- [Guia del instructor](INSTRUCTOR-GUIDE.md)

## Formatos del Workshop

| Formato | Duracion | Contenido |
|---------|----------|-----------|
| **Compacto** | 90 min | Bloques 0, 1, 4 y 5 (Plan Mode + Skills + Cowork) |
| **Estandar** | 120 min | Todos los bloques |
| **Extendido** | 150+ min | Todos los bloques + ejercicios extra + Q&A ampliado |

## Despues del Workshop

1. Revisa las [soluciones](solutions/) de los ejercicios
2. Explora la [guia de Skills](guides/skills-guide.md) para crear los tuyos
3. Lee la [guia de Cowork](guides/cowork-guide.md) para casos avanzados
4. Adapta los Skills de `.claude/skills/` a tu equipo
5. Comparte tus Skills via Git con el equipo
