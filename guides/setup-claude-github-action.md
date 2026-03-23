# Como configurar Claude Code como revisor automatico de PRs

Esta guia te lleva paso a paso para configurar la GitHub Action oficial de Anthropic
que permite a Claude revisar automaticamente tus Pull Requests.

**Repositorio oficial**: [anthropics/claude-code-action](https://github.com/anthropics/claude-code-action)
**Marketplace**: [Claude Code Action Official](https://github.com/marketplace/actions/claude-code-action-official)

---

## Que hace

Cuando configures esta Action, cada vez que alguien abra un PR o lo actualice:

1. Claude analiza el diff del PR
2. Revisa calidad del codigo, seguridad y buenas practicas
3. Posta comentarios de review directamente en el PR de GitHub
4. Respeta las reglas de tu proyecto si tienes un `CLAUDE.md`

Tambien puede responder a menciones `@claude` en comentarios de PRs e issues.

---

## Paso 1: Obtener tu API key de Anthropic

1. Ve a [console.anthropic.com](https://console.anthropic.com)
2. Inicia sesion o crea una cuenta
3. Ve a **Settings > API Keys**
4. Crea una nueva API key
5. Copia la key (empieza con `sk-ant-...`). **Guardala en un lugar seguro**, no la volveras a ver.

> **Nota**: Necesitas credito en tu cuenta de Anthropic. La API tiene un costo por uso basado en tokens consumidos.

---

## Paso 2: Agregar la API key como secret en GitHub

1. Ve a tu repositorio en GitHub (por ejemplo `diego-thebridge/claude_workshop_march26`)
2. Haz clic en **Settings** (la pestaña de configuracion del repo)
3. En el menu lateral, busca **Secrets and variables > Actions**
4. Haz clic en **New repository secret**
5. Rellena:
   - **Name**: `ANTHROPIC_API_KEY`
   - **Secret**: Pega tu API key (`sk-ant-...`)
6. Haz clic en **Add secret**

> **Seguridad**: La key queda encriptada. Nadie puede verla despues de guardarla, ni siquiera tu.

---

## Paso 3: Crear el archivo de workflow

Crea el directorio y archivo en tu repositorio:

```
.github/
  workflows/
    claude-review.yml
```

### Opcion A: Review automatico en cada PR

Este workflow se activa automaticamente cuando se abre o actualiza un PR:

```yaml
name: Claude Code Review

on:
  pull_request:
    types: [opened, synchronize]

jobs:
  review:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pull-requests: write
      issues: write

    steps:
      - uses: anthropics/claude-code-action@v1
        with:
          anthropic_api_key: ${{ secrets.ANTHROPIC_API_KEY }}
          prompt: |
            Revisa este Pull Request. Analiza el diff y busca:
            1. Problemas de seguridad (OWASP Top 10)
            2. Bugs potenciales o errores de logica
            3. Calidad del codigo y buenas practicas
            4. Sugerencias de mejora

            Responde en espanol. Se constructivo y especifico.
```

### Opcion B: Interactivo (responde a @claude en comentarios)

Este workflow permite que cualquiera mencione `@claude` en un PR o issue para pedirle algo:

```yaml
name: Claude Assistant

on:
  issue_comment:
    types: [created]
  pull_request_review_comment:
    types: [created]

jobs:
  claude:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pull-requests: write
      issues: write

    steps:
      - uses: anthropics/claude-code-action@v1
        with:
          anthropic_api_key: ${{ secrets.ANTHROPIC_API_KEY }}
```

### Opcion C: Ambos combinados (RECOMENDADO)

```yaml
name: Claude Code

on:
  pull_request:
    types: [opened, synchronize]
  issue_comment:
    types: [created]
  pull_request_review_comment:
    types: [created]

jobs:
  claude:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pull-requests: write
      issues: write

    steps:
      - uses: anthropics/claude-code-action@v1
        with:
          anthropic_api_key: ${{ secrets.ANTHROPIC_API_KEY }}
          prompt: |
            Revisa este Pull Request en espanol. Busca problemas de
            seguridad, bugs, y sugiere mejoras. Se constructivo.
          claude_args: "--max-turns 5"
```

---

## Paso 4: Hacer commit y push

```bash
# Desde la raiz de tu repositorio
mkdir -p .github/workflows

# Crea el archivo (o usa tu editor favorito)
# Pega el contenido de la Opcion que elegiste

git add .github/workflows/claude-review.yml
git commit -m "Configurar Claude Code Action para review automatico de PRs"
git push
```

---

## Paso 5: Verificar que funciona

1. Crea un PR de prueba en tu repo (cualquier cambio pequeño sirve)
2. Ve a la pestaña **Actions** de tu repo en GitHub
3. Deberias ver el workflow ejecutandose
4. Cuando termine, ve al PR — Claude habra dejado comentarios de review

---

## Opciones avanzadas

### Elegir modelo

Por defecto usa Sonnet. Para usar Opus (mas potente pero mas caro):

```yaml
claude_args: "--model claude-opus-4-6 --max-turns 5"
```

### Limitar costes

- `--max-turns 5`: Limita las iteraciones de Claude (menos tokens)
- Usa Sonnet en vez de Opus para reviews rutinarios
- Se especifico en el prompt para evitar analisis innecesarios

### Personalizar las reglas de review con CLAUDE.md

Si tu repo tiene un archivo `CLAUDE.md` en la raiz, Claude lo respetara al hacer reviews. Ejemplo:

```markdown
# Reglas de review

## Estilo
- Usamos TypeScript estricto
- Seguimos las reglas de ESLint definidas en .eslintrc

## Seguridad
- Nunca hardcodear secretos
- Validar toda entrada de usuario
- Usar parametros preparados para queries SQL

## Testing
- Cobertura minima de 80%
- Tests obligatorios para funciones publicas
```

---

## Costes estimados

| Concepto | Coste |
|----------|-------|
| GitHub Actions | Gratuito en repos publicos. Repos privados: segun tu plan de GitHub |
| API de Anthropic | ~$0.01-0.10 por review tipico con Sonnet, mas con Opus |

---

## Troubleshooting

**El workflow no se ejecuta:**
- Verifica que el archivo esta en `.github/workflows/` (con el punto al inicio)
- Comprueba que el YAML es valido (sin errores de indentacion)
- Ve a Settings > Actions > General y asegurate de que Actions estan habilitadas

**Claude no deja comentarios:**
- Verifica que el secret `ANTHROPIC_API_KEY` esta bien configurado
- Comprueba los permisos del workflow (`pull-requests: write`)
- Revisa los logs del workflow en la pestaña Actions

**Error de permisos:**
- Ve a Settings > Actions > General > Workflow permissions
- Selecciona "Read and write permissions"

---

## Metodo rapido (alternativa)

Si tienes Claude Code instalado, puedes configurar todo automaticamente:

```bash
claude
/install-github-app
```

Esto automatiza la instalacion de la GitHub App, la configuracion de secrets y la creacion del workflow.
