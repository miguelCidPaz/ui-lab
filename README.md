# UI Lab – Catálogo de Componentes React

**UI Lab** es un entorno ligero, limpio y desacoplado para visualizar, probar y documentar tus componentes React.

Funciona como un *sandbox visual* que te permite trabajar directamente con componentes sin necesidad de montar una app real, sin lógica de navegación compleja y sin dependencias externas.

Es útil tanto para piezas atómicas (como botones o inputs) como para estructuras más complejas (módulos, layouts, páginas…).

> El foco está en **ver tus componentes en acción**, con los props que tú decidas, de forma rápida y controlada.

---

## 🧩 ¿Cómo funciona?

Solo tienes que registrar tus componentes en `config/content.js`, asignándoles:

- Un nombre identificativo  
- Una categoría (ej. Buttons, Layouts…)  
- Las props que recibe  
- Su estado actual (`starter`, `in progress`, `completed`, etc.)

Una vez hecho esto, UI Lab los mostrará automáticamente en la interfaz.  
Podrás navegar entre ellos, ver cómo se renderizan y validar su comportamiento al vuelo.

También puedes:

- Agrupar componentes por categoría  
- Anidar componentes dentro de otros  
- Registrar varios proyectos independientes sin conflictos  

Los componentes de prueba incluidos están en la carpeta `ProyectoEjemplo`.

---

## 🛠️ Integración con tus propios componentes

Para usar UI Lab con tu código real:

1. Sustituye `ProyectoEjemplo` por el nombre de tu proyecto
2. Coloca tus componentes dentro  
3. Mockea los props que usarías en contexto real  
4. Crea carpetas auxiliares para funciones, mocks o constantes si las necesitas

> UI Lab **no impone arquitectura ni estructura interna**: tú decides cómo organizar tus componentes y cómo cargarlos.

---

## ⚙️ Personalización

Puedes adaptar el catálogo desde `config/generalConfig.js`:

- Categorías disponibles  
- Colores base de la interfaz  
- Fuente tipográfica del código y del texto  
- Estados de los componentes  
- Modo de navegación: `'history'`, `'next'` o `'react-router'`  

Todo está centralizado y se puede modificar sin romper nada.

---

## 🧭 Navegación

La navegación se gestiona con `navigateTo(path, router?)`.

Por defecto, UI Lab usa el modo `'history'`, que no requiere librerías externas.

Si usas Next.js o React Router, solo tienes que:

1. Cambiar el modo en `generalConfig.js`  
2. Adaptar la función `navigateTo()` a tu sistema

---

## 🧪 Test de estabilidad

El catálogo incluye un test de humo (`test/CatalogSmokeTest.test.jsx`) que:

- Recorre todos los componentes registrados
- Intenta renderizarlos con los props definidos

Esto permite detectar errores básicos de render o props mal configurados sin escribir test manuales.

Puedes ejecutarlo con:

```bash
npm test
```
o
```bash
npx vitest run
```

### 📄 Licencia

Este proyecto se distribuye bajo la licencia [Apache 2.0](./LICENSE).  
Puedes usarlo, modificarlo y adaptarlo libremente en tus propios proyectos, tanto personales como comerciales, siempre que respetes los términos de dicha licencia.
