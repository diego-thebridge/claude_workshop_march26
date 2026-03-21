# Workshop: Claude Code & Cowork — De Desarrolladores a Toda la Organización

## Descripción

Workshop práctico de **120 minutos** donde aprenderás a usar **Claude Code** (para desarrollo) y **Claude Cowork** (para trabajo de conocimiento) en tu día a día profesional. Diseñado para una audiencia amplia: desarrolladores, product managers, analistas y cualquier profesional que quiera multiplicar su productividad con IA.

## ¿Para quién es este workshop?

| Perfil | Qué vas a aprender |
|--------|-------------------|
| **Desarrolladores** | Plan Mode, Skills de código, agents, automatización Git/CI |
| **Product Managers** | Análisis de PRs, generación de specs, release notes automatizadas |
| **Power Users** | Cowork para organizar archivos, generar informes, preparar reuniones |

## Prerequisitos

### Todos los participantes
- Cuenta en [claude.ai](https://claude.ai) (plan Pro, Team o Enterprise)
- [Git](https://git-scm.com/) instalado (v2.30+)
- Cuenta de [GitHub](https://github.com)
- Familiaridad básica con la terminal

### Track Desarrolladores (adicional)
- [Claude Code CLI](https://docs.anthropic.com/en/docs/claude-code) instalado
- Node.js 18+ (solo para el proyecto de ejemplo)

### Track Producto / Power Users (adicional)
- [Claude Desktop](https://claude.ai/download) con Cowork habilitado

> **Nota**: Este workshop NO requiere Docker, bases de datos ni configuración de MCPs.

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
2. Verificar que Cowork está disponible en tu plan
3. Seleccionar la carpeta `cowork-workspace/` como carpeta de trabajo

### 4. Verificar Claude Code (desarrolladores)
```bash
claude --version
claude "di hola"
```

## Agenda (120 min)

| Tiempo | Bloque | Audiencia |
|--------|--------|-----------|
| 00:00 - 00:15 | **Bloque 1**: Introducción — El ecosistema Claude | Todos |
| 00:15 - 00:35 | **Bloque 2**: Claude Code — Plan Mode y exploración | Devs (producto observa) |
| 00:35 - 01:05 | **Bloque 3**: Skills — El superpoder compartido | Todos |
| 01:05 - 01:30 | **Bloque 4**: Claude Cowork — Para toda la organización | Todos (foco producto) |
| 01:30 - 01:45 | **Bloque 5**: GitHub Integration | Todos |
| 01:45 - 02:00 | **Bloque 6**: Tips avanzados y cierre | Todos |

## Estructura del Repositorio

```
claude_workshop_march26/
├── README.md                 # Este archivo
├── INDEX.md                  # Navegación por perfiles
├── EXERCISES.md              # Todos los ejercicios paso a paso
├── .claude/
│   ├── settings.json         # Configuración de permisos
│   ├── agents/               # Agents de ejemplo
│   │   └── security-auditor.md
│   └── skills/               # Skills de ejemplo
│       ├── code-review/
│       ├── product-spec/
│       └── meeting-prep/
├── sample-project/           # Proyecto Node.js para ejercicios de Code
│   ├── package.json
│   ├── src/
│   ├── tests/
│   └── data/
├── cowork-workspace/         # Carpeta de trabajo para ejercicios de Cowork
│   ├── notas/
│   ├── gastos/
│   └── informes/
├── guides/
│   ├── quick-reference.md    # Referencia rápida de comandos
│   ├── skills-guide.md       # Guía completa de Skills
│   └── cowork-guide.md       # Guía de Cowork
└── solutions/                # Soluciones de los ejercicios
```

## Materiales de Referencia

- [Documentación oficial de Claude Code](https://docs.anthropic.com/en/docs/claude-code)
- [Guía de Cowork](https://support.claude.com/en/articles/13345190-get-started-with-cowork)
- [Referencia rápida](guides/quick-reference.md)
- [Guía de Skills](guides/skills-guide.md)

## Formatos del Workshop

| Formato | Duración | Contenido |
|---------|----------|-----------|
| **Compacto** | 90 min | Bloques 1, 3, 4 y 5 |
| **Estándar** | 120 min | Todos los bloques |
| **Extendido** | 150+ min | Todos los bloques + ejercicios extra + Q&A ampliado |

## Después del Workshop

1. Revisa las [soluciones](solutions/) de los ejercicios
2. Explora la [guía de Skills](guides/skills-guide.md) para crear los tuyos
3. Lee la [guía de Cowork](guides/cowork-guide.md) para casos de uso avanzados
4. Adapta los Skills del directorio `.claude/skills/` a tu equipo
