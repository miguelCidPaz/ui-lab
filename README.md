# UI Lab – Catálogo de Componentes React

Este proyecto es un catálogo de componentes React pensado como entorno de trabajo ligero, limpio y desacoplado. 

Su objetivo es permitir a cualquier desarrollador visualizar, probar y documentar sus componentes de forma rápida, sin necesidad de montar una app real ni depender de frameworks externos.

Funciona como una especie de "sandbox visual", donde puedes navegar entre componentes, ver cómo se renderizan con sus props, y validar su apariencia y comportamiento. Es útil tanto para elementos simples (como botones o inputs) como para agrupaciones más complejas o layouts enteros.

No gestiona datos reales ni flujo de navegación completo. No tiene lógica de SSR ni espera que montes una arquitectura de páginas. El foco está en trabajar con componentes de forma directa, usando los datos que tú definas, en un entorno controlado.

---

### 🧩 ¿Cómo funciona?

Para utilizarlo, solo tienes que registrar tus componentes en el archivo `config/content.js`, asignándoles:

- un nombre identificativo  
- una categoría (ej: Buttons, Layouts…)  
- los props que quieres que reciba  
- su estado actual (en desarrollo, finalizado, etc.)

Una vez definidos, el catálogo los mostrará automáticamente en la interfaz, permitiéndote navegar entre ellos y ver su resultado al vuelo.

Puedes:

- Agrupar componentes por categoría  
- Anidar contenidos dentro de un componente principal  
- Montar varios proyectos distintos dentro del mismo catálogo sin conflictos  

Por defecto, los componentes de prueba se encuentran en la carpeta `ProyectoEjemplo`.

Para usarlo con tu código:

- Sustituye `ProyectoEjemplo` por el nombre de tu proyecto  
- Coloca dentro tus componentes reales  
- Mockea los props que usarías en contexto real  
- Si necesitas funciones auxiliares, mocks o constantes, crea tus propias carpetas dentro sin tocar la estructura del catálogo  

Este sistema no impone reglas sobre cómo deben funcionar tus componentes ni qué arquitectura seguir:  
te deja cargarlos como quieras, desacoplados y a tu ritmo.

---

### ⚙️ Personalización

El archivo `config/generalConfig.js` te permite configurar:

- Las categorías disponibles
- Los colores base de la interfaz
- Las fuentes usadas para texto y bloques de código
- Las etiquetas de estado de los componentes
- Y el modo de navegación (`'history'`, `'next'`, `'react-router'`)

Todo está centralizado y puede modificarse sin afectar a la lógica principal del catálogo.

---

### 🧭 Navegación

La navegación está gestionada por la función `navigateTo(path, router?)`.  
Por defecto se usa `'history'`, que no necesita dependencias externas.  
Si quieres integrarlo con Next.js o React Router, cambia el modo en `generalConfig.js` y adapta `navigateTo` a tu entorno.

El catálogo no se acopla a ningún framework específico: tú decides cómo integrarlo.

---

### 🧪 Test de estabilidad

Se incluye un test de humo (`test/CatalogSmokeTest.test.jsx`) que recorre todos los componentes registrados y comprueba que se renderizan correctamente con los props definidos.

Esto ayuda a detectar errores básicos de renderizado o props mal configurados sin necesidad de escribir tests individuales.

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
