# GrowUp – Frontend (Angular + Tailwind CSS + PrimeNG)

Plataforma digital para aprendizaje, proyectos y progreso personal/profesional. Este repositorio contiene el **frontend** del MVP de GrowUp.

---

## 🧱 Stack
- **Angular 19** (standalone components, routing, signals)
- **TypeScript** estricto
- **Tailwind CSS v4** (utilidades + tema personalizado)
- **PrimeNG** + **PrimeIcons** (componentes de UI ricos)
- **ESLint** / Prettier
- **Git Flow simple** (main, develop, feature/*) y **Conventional Commits**

## 📋 Requisitos
- Node.js ≥ 18 LTS
- npm ≥ 9
- Angular CLI (recomendado): `npm i -g @angular/cli`

## 🚀 Puesta en marcha
```bash
npm install
ng serve -o
```

## 📦 Scripts
```bash
# Desarrollo
ng serve -o

# Produccion
ng build --configuration production

# Lint
ng lint

# Tests (si estan configurados)
ng test
```

## 🧭 Arquitectura Frontend
El frontend se organiza por **capas** y **features**:

```
src/
├─ app/
│  ├─ core/                # Servicios globales, guards, interceptores, config
│  ├─ layout/              # Shell: header, sidebar, main
│  ├─ shared/              # Reutilizables (componentes, pipes, directivas)
│  ├─ features/            # Dominios: landing, auth, dashboard, courses, profile
│  ├─ theme/               # Tokens CSS, helpers de Tailwind, dark mode
│  ├─ app.routes.ts        # Arbol de rutas
│  └─ app.component.ts     # Bootstrap (router-outlet)
├─ assets/                 # Imagenes, iconos, fuentes
├─ styles.scss             # Tailwind + estilos globales
└─ main.ts                 # bootstrapApplication()
```

- **core/**: `AuthService` (mock -> JWT despues), `authGuard`, `http.service`, interceptores.
- **shared/**: UI reutilizable (cards, avatar, loaders), pipes comunes, utilidades.
- **features/**: paginas autocontenidas (standalone) con sus servicios y modelos.
- **theme/**: variables CSS (tokens), integracion paleta + Tailwind, modo oscuro.

## 🗺️ Rutas (MVP)
- Publico: `/landing`, `/auth/login`
- Privado (con `authGuard`): `/dashboard`, `/courses`, `/profile`

## 🔐 Autenticacion (mock -> real)
- **MVP**: estado simulado con `signals` y guard de rutas.
- **Evolucion**: JWT + refresh tokens; interceptor para `Authorization: Bearer`.

## 🎨 Tema
- Paleta y tipografias definidas en `theme/tokens.css` y `tailwind.config.js`.
- Helpers (`.bg-surface`, `.text-on-surface`, etc.) en `styles.scss`.
- **Dark Mode** con clase `.dark` en `<html>` o `<body>`.

## 🧩 UI (PrimeNG + Tailwind)
- PrimeNG para componentes complejos (tabla, dialogo, datepicker, file upload).
- Tailwind para layout, spacing, tipografia y color utilitario.
- Importar **solo** los modulos de PrimeNG usados por pagina para cuidar el bundle.

## 🗃️ Estado y datos
- Servicios por feature; datos **mock** en el MVP.
- Posteriormente: integracion REST con backend (`/api/v1/...`).

## ✅ Calidad
- Convenciones: **Conventional Commits** (`feat:`, `fix:`, `docs:`, `chore:`...)
- Lint obligatorio en PRs.
- Tests unitarios en features criticas (auth guard, servicios).

## 🌿 Flujo Git recomendado
- `main` -> estable.
- `develop` -> integracion.
- `feature/*` -> cada historia/tarea.
- Releases: `release/x.y.z` + tag `vX.Y.Z`.

## 🤖 CI (GitHub Actions)
Workflow minimo: `npm ci` -> `ng lint` -> `ng build --configuration production` en cada PR a `develop`/`main`.

## 🗺️ Roadmap (resumen)
- **Sprint 1**: Layout + Routing + Auth mock.
- **Sprint 2**: Cursos (tabla + dialogo CRUD mock) y Perfil.
- **Sprint 3**: Tema (tokens/dark) y Accesibilidad base.

## 📄 Licencia
MIT
=======
# Growup

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.1.0.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
