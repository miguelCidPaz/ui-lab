# UI Lab — Arquitectura v2

## Qué es

Catálogo visual de componentes React. Permite registrar, organizar y previsualizar componentes de uno o varios proyectos. Diseñado para desarrollo aislado: no depende de ningún router externo, no tiene backend propio significativo.

---

## Stack

| Capa | Tecnología |
|---|---|
| UI | React 18, CSS Modules |
| Build | Vite 5 |
| Tests | Vitest + @testing-library/react + jsdom |
| Dev server | Node.js HTTP (puerto 3000, corre `syncComponents` al arrancar) |
| Navegación | History API nativa (no React Router, no Next.js) |

Comando dev: `npm run dev` → lanza ambos servidores en paralelo con `concurrently`.

---

## Estructura de directorios

```
ui-lab/
├── index.html                  # entry HTML
├── index.jsx                   # monta ReactDOM → App (ui-viewer)
├── vite.config.js              # alias @proyectos → ./Proyectos
├── package.json
│
├── ui-core/                    # motor del catálogo (no tocar salvo que cambies el motor)
│   ├── ui-viewer.jsx           # componente raíz App
│   ├── config/
│   │   ├── generalConfig.js    # constantes globales (BASENAME, NAVIGATION_MODE, BASECOLORS, STATES, CATEGORIES, FONTS)
│   │   └── content.js          # COMPONENT_REGISTRY + ALL_COMPONENTS (con loader dinámico)
│   ├── components/
│   │   ├── HeaderCatalog/      # barra de nav + selector de proyecto
│   │   ├── BodyCatalog/        # grid de tarjetas
│   │   ├── OptionCatalog/      # tarjeta individual de componente
│   │   ├── ComponentCatalog/   # vista detalle: renderiza componente + Info
│   │   ├── ProjectSelector/    # <select> de proyectos
│   │   └── NotFoundCatalog/    # estado 404
│   ├── utils/
│   │   ├── navigate.js         # navigateTo() — abstracción de navegación
│   │   ├── getComponentFromPath.js  # resuelve componente desde pathname
│   │   └── hooks/
│   │       ├── useCatalogRouting.js   # sincroniza categoría activa con URL
│   │       ├── useActiveComponent.js  # resuelve componente activo desde URL
│   │       ├── useDynamicComponent.js # carga componente + props con import dinámico
│   │       └── useRouteListener.js    # listener genérico de popstate
│   ├── theme/
│   │   ├── applyBaseColors.js  # inyecta CSS custom properties en :root
│   │   ├── default-vars.css
│   │   ├── reset.css
│   │   └── closeButton.module.css
│   ├── server/
│   │   ├── index.js            # HTTP server puerto 3000
│   │   └── scripts/
│   │       └── syncComponents.js  # genera components.json por proyecto al arrancar
│   └── test/
│       └── CatalogSmokeTest.test.jsx  # smoke test: renderiza todos los componentes
│
└── Proyectos/                  # proyectos registrados (uno por carpeta)
    └── ProyectoEjemplo2/
        ├── components.json     # generado por syncComponents (no editar a mano)
        ├── utils/props.js      # props de ejemplo por componente
        ├── components/
        │   ├── ButtonPrueba/
        │   ├── EmojiDisplay/
        │   └── PanelPrueba/
        ├── modules/
        │   ├── PanelEmoji/
        │   └── PanelOperaciones/
        └── pages/
            └── PageEjemplo/
```

---

## Configuración global — `ui-core/config/generalConfig.js`

| Constante | Uso |
|---|---|
| `BASENAME` | Nombre del catálogo (aparece en header) |
| `NAVIGATION_MODE` | `'history'` \| `'next'` \| `'react-router'` |
| `BASECOLORS` | Colores CSS del motor del catálogo |
| `STATES` | Fases de desarrollo: `starter` / `medium` / `completed` — cada una con `label` y `color` |
| `CATEGORIES` | Categorías de componentes: `components` / `modules` / `pages` |
| `FONTS` | `FontBase` (Inter) y `FontCode` (Fira Code) |

---

## Registro de componentes — `ui-core/config/content.js`

`COMPONENT_REGISTRY` es el array que el usuario edita para registrar componentes. Cada entrada:

```js
{
  name: string,           // nombre visible en el catálogo
  componentName: string,  // nombre del export del componente
  componentPath: string,  // ruta absoluta desde raíz del proyecto
  propsName: string,      // nombre del export de props en el archivo de props
  propsPath: string,      // ruta al archivo de props
  type: string,           // descripción breve
  state: STATES.*,        // estado de desarrollo
  category: CATEGORIES.*, // categoría
  endpoint: string,       // endpoint relacionado (o "-")
  methodHttp: string,     // método HTTP (o "-")
  useIn: string[]         // nombre(s) de proyecto(s) que usan este componente
}
```

`ALL_COMPONENTS` = `COMPONENT_REGISTRY` + función `loader` (import dinámico con caché interno).

---

## Sistema de navegación

**Modo por defecto: `history`** (History API del browser, sin dependencias).

### URL patterns

| URL | Vista |
|---|---|
| `/{category}` | Lista de componentes de esa categoría |
| `/{category}/{componentName}\|{projectName}` | Detalle del componente |

El separador `|` en el slug une nombre del componente con proyecto. Ejemplo: `/componentes/Boton%20Sumar|ProyectoEjemplo2`.

### Flujo de navegación

1. `navigateTo(path)` → `window.history.pushState` + dispara `PopStateEvent`
2. `useCatalogRouting` escucha `popstate` → actualiza categoría activa
3. `useActiveComponent` escucha `popstate` → llama `getComponentFromPath` → resuelve entrada del registro
4. Si hay componente resuelto → renderiza `ComponentCatalog`; si no → renderiza `BodyCatalog`

### `getComponentFromPath`

Parsea `/{category}/{slug}|{project}` y busca en `ALL_COMPONENTS` por `category`, `name`/`slug`, y `useIn`.

---

## Carga dinámica de componentes

`useDynamicComponent(componentData)`:
1. `import(componentData.componentPath)` → extrae `module[componentName]`
2. `import(componentData.propsPath)` → extrae `module[propsName]`
3. Devuelve `{ LoadedComponent, LoadedProps }`

Vite requiere `/* @vite-ignore */` en los imports dinámicos con rutas variables para suprimir warnings de análisis estático.

El `loader` en `ALL_COMPONENTS` tiene caché interna por `name + useIn` para evitar re-imports.

---

## Servidor Node — `ui-core/server/`

Puerto `3000`. Al arrancar ejecuta `syncComponents()`.

### `syncComponents`

Lee `COMPONENT_REGISTRY`, para cada proyecto en `useIn` genera `Proyectos/{project}/components.json` con los componentes filtrados + estado resuelto a string. **No sobrescribe si ya existe.**

El `components.json` es un snapshot del registro filtrado por proyecto. Útil para integración externa; el catálogo no lo consume en runtime.

---

## Componentes del motor (ui-core)

### `App` (`ui-viewer.jsx`)
- Estado: `catalogo` (categoría activa), `proyectSelected`, `showHeader`
- Deriva: `allProjects`, `allCategories` desde `ALL_COMPONENTS`
- Filtra `ALL_COMPONENTS` por categoría + proyecto antes de pasar a `BodyCatalog`
- Botón X togglea visibilidad del header

### `HeaderCatalog`
- Botones por categoría → `navigateTo`
- `ProjectSelector` → filtra por proyecto

### `BodyCatalog`
- Grid de `OptionCatalog` con los componentes filtrados

### `OptionCatalog`
- Muestra nombre, tipo, estado (color dinámico via CSS custom property), proyectos
- Botón "Ir a elemento" → `navigate(/{category}/{name}|{useIn})`

### `ComponentCatalog`
- Usa `useDynamicComponent` para cargar el componente
- Renderiza el componente con sus props
- Si `componentData.content` → renderiza hijos (composición)
- Si `!componentData.isPage` → muestra panel `Info`
- Responsive: detecta viewport > 1100px → layout desktop

### `Info`
- Muestra metadata del componente (nombre, useIn, endpoint, método HTTP)
- Muestra props serializadas como JSON

---

## Proyectos — `Proyectos/`

Cada proyecto es una carpeta con la estructura:

```
Proyectos/{NombreProyecto}/
├── components.json     # generado automáticamente
├── utils/props.js      # exports de props para cada componente
├── components/         # componentes atómicos
├── modules/            # composiciones de componentes
└── pages/              # páginas completas
```

Para añadir un nuevo proyecto: crear carpeta + registrar componentes en `content.js` con `useIn: ['NombreProyecto']`.

### ProyectoEjemplo2 — componentes registrados

| Nombre | Tipo | Categoría | Estado |
|---|---|---|---|
| Boton Sumar | ButtonPrueba | Componentes | Finalizado |
| Boton Restar | ButtonPrueba | Componentes | Finalizado |
| Panel informativo | PanelPrueba | Componentes | Finalizado |
| EmojiDisplay | EmojiDisplay | Componentes | En desarrollo |
| Panel Emoji | PanelEmoji | Módulos | En revisión |
| Panel Operaciones | PanelOperaciones | Módulos | En revisión |
| Pagina de prueba | PageEjemplo | Páginas | En revisión |

---

## Tests

`ui-core/test/CatalogSmokeTest.test.jsx` — itera `ALL_COMPONENTS` y verifica que cada componente renderiza sin lanzar excepciones. Detecta imports rotos o crashes básicos.

Ejecutar: `npm test`

---

## Alias Vite

`@proyectos` → `./Proyectos` (configurado en `vite.config.js`).

---

## Notas de diseño

- Sin React Router: la navegación se resuelve con History API para máxima portabilidad.
- `NAVIGATION_MODE` permite adaptar a Next.js o React Router sin cambiar los componentes: solo se actualiza `navigateTo`.
- El catálogo es un entorno de testeo visual aislado, no una app de producción.
- `useCatalogRouting` parchea `window.history.pushState` para capturar navegaciones programáticas además de `popstate`.
- Los colores del catálogo (motor) están separados de los colores de los componentes del proyecto.
