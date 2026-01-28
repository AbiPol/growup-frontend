---
name: Creador de Habilidades
description: Una habilidad para crear nuevas habilidades en el workspace, asegurando que sigan la estructura de Antigravity y hablen en español.
---

# Creador de Habilidades

Esta habilidad te permite crear nuevas "habilidades" (skills) dentro del workspace. Una habilidad es un conjunto de instrucciones y recursos que me permiten realizar tareas complejas de manera autónoma.

## Estructura de una Habilidad

Cada habilidad debe residir en su propia carpeta dentro de `habilidades/` y debe tener, como mínimo, un archivo `SKILL.md`.

La estructura recomendada es:
- `habilidades/<nombre-habilidad>/SKILL.md` (Obligatorio)
- `habilidades/<nombre-habilidad>/scripts/` (Opcional: scripts de ayuda)
- `habilidades/<nombre-habilidad>/examples/` (Opcional: ejemplos de uso)
- `habilidades/<nombre-habilidad>/resources/` (Opcional: plantillas o docs)

## Flujo de Trabajo para Crear una Habilidad

Sigue estos pasos rigurosamente cuando un usuario pida crear una nueva habilidad:

1.  **Entender el Propósito**: Pregunta o analiza qué debe hacer la habilidad y qué idioma o tono debe usar (por defecto será español).
2.  **Definir el Nombre**: El nombre de la carpeta debe ser en minúsculas y usar guiones (`ejemplo-de-habilidad`).
3.  **Crear el Archivo SKILL.md**:
    *   Debe comenzar con un frontmatter YAML que incluya `name` y `description`.
    *   Debe contener una sección de "Propósito" clara.
    *   Debe detallar las herramientas que la habilidad debe usar (si aplica).
    *   Debe incluir instrucciones paso a paso para el agente.
4.  **Organizar Archivos Adicionales**: Si la habilidad requiere scripts o recursos, créalos en las subcarpetas correspondientes.
5.  **Actualizar el README Central**: Añade la nueva habilidad a la lista en `habilidades/README.md`.

## Ejemplo de SKILL.md (Plantilla)

```markdown
---
name: Nombre de la Habilidad
description: Breve descripción de lo que hace.
---

# Nombre de la Habilidad

## Propósito
Describe aquí el objetivo principal.

## Instrucciones
1.  Paso uno...
2.  Paso dos...

## Herramientas Sugeridas
- [tool_name]
```

## Reglas de Oro
- Todo el contenido de la habilidad debe estar en **español**.
- Los nombres de archivos y carpetas deben ser descriptivos.
- Siempre usa rutas absolutas en los enlaces de archivos.
