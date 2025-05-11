# UI Lab – Catálogo de Componentes React

Este proyecto es un catálogo de componentes React pensado como entorno de trabajo ligero, limpio y desacoplado.  
Su objetivo es permitir a cualquier desarrollador visualizar, probar y documentar sus componentes de forma rápida, sin necesidad de montar una app real ni depender de frameworks externos.

Funciona como una especie de "sandbox visual", donde puedes navegar entre componentes, ver cómo se renderizan con sus props, y validar su apariencia y comportamiento. Es útil tanto para elementos simples (como botones o inputs) como para agrupaciones más complejas o layouts enteros.

No gestiona datos reales ni flujo de navegación completo. No tiene lógica de SSR ni espera que montes una arquitectura de páginas. El foco está en trabajar con componentes de forma directa, usando los datos que tú definas, en un entorno controlado.

### 🧩 ¿Cómo funciona?

Para utilizarlo, solo tienes que registrar tus componentes en el archivo `config/content.js`, asignándoles:
- un nombre identificativo
- una categoría (ej: Buttons, Layouts…)
- los props que quieres que reciba
- su estado actual (en desarrollo, finalizado, etc.)

Una vez definidos, el catálogo los mostrará automáticamente en la interfaz, permitiéndote navegar entre ellos y ver su resultado al vuelo. Puedes agruparlos, anidar contenidos o montar proyectos de ejemplo como el que ya viene incluido (`ProyectoEjemplo`).

De hecho, puedes tener **varios proyectos dentro del mismo catálogo** sin problema: todos los componentes registrados se gestionan de forma unificada.

### 🧭 Navegación

La navegación está centralizada mediante la función `navigateTo(path, router?)`.  
Por defecto, se usa el modo `'history'`, que no requiere ninguna dependencia adicional.

Si quieres integrarlo en una app con Next.js o React Router, puedes cambiar el modo en `config/generalConfig.js` y adaptar la navegación a tu stack.  
El catálogo no se acopla a ningún framework concreto: solo ofrece el esqueleto para que lo adaptes si lo necesitas.

---

Este repositorio **no es una aplicación ni una solución final**. Es una herramienta pensada para ayudarte a revisar, validar y mostrar tus componentes sin complicaciones.  
Úsala como base para trabajar mejor, no como sustituto de tu sistema real.
