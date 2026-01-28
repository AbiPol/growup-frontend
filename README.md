# GrowUp – Frontend Híbrido (Angular + React)

Plataforma digital para aprendizaje, proyectos y progreso personal/profesional. Este repositorio utiliza una arquitectura de micro-frontends permitiendo la convivencia de Angular y React en un mismo Shell.

---

## 🧱 Stack Tecnológico

### Core & Shell (Angular)
- **Angular 21** (Standalone components, Signals, Router)
- **PrimeNG** + **PrimeIcons** (UI Angular)
- **Tailwind CSS v4** (Estilos globales compartidos)

### Módulos Funcionales (React)
- **React 19** + **Vite 6** (Módulo Formador)
- **PrimeReact** (UI React equilibrada con PrimeNG)
- **React Router 7** (Navegación interna)

---

## 🚀 Arquitectura Híbrida

El proyecto utiliza un sistema de **Micro-frontend Bridge**:
1. **Shell (Angular)**: Actúa como orquestador, gestionando el Layout global y la autenticación.
2. **React Bridge**: Un componente Angular dinámico que "monta" aplicaciones de React en contenedores específicos.
3. **Sincronización de Rutas**: Los enrutadores de Angular y React se comunican mediante eventos `popstate` para mantener la URL sincronizada.
4. **Metadatos Compartidos**: Las rutas y menús se definen en TypeScript puro (`shared/`) para que ambos frameworks los consuman sin dependencias cruzadas.

---

## 🧭 Estructura del Workspace

```
growup/
├─ projects/
│  ├─ shell/               # Orquestador Angular (Puerto 4200)
│  ├─ student/             # Módulo Alumno (Angular - Puerto 4201)
│  └─ teacher/             # Módulo Formador (React - Puerto 4202)
├─ shared/                 # Estilos, metadatos y lógica compartida
├─ package.json            # Dependencias raíz (React + Angular)
└─ tsconfig.json           # Alias globales (@teacher, @shared)
```

---

## 🛠️ Puesta en marcha

### Instalación
Desde la raíz (importante para las dependencias híbridas):
```bash
npm install
```

### Ejecutar Shell
```bash
npx ng serve shell
```
*El Shell cargará dinámicamente el módulo de Alumno (Angular) o Formador (React) según el rol del usuario.*

### Ejecutar Módulo Teacher (Independiente)
```bash
cd projects/teacher
npm run dev
```

---

## 🗺️ Roadmap de Integración
- [x] Shell Angular 21 con Tailwind 4.
- [x] Integración de Módulo Alumno (Angular).
- [x] Integración de Módulo Formador (React).
- [x] Sincronización de estilos mediante archivos CSS compartidos.
- [ ] Implementación de State Management compartido (opcional).

---

## 📄 Licencia
MIT
