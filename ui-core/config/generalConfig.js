/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * Estas son las configuraciones de los colores, estados y fuentes para el catálogo de componentes.
 * Puedes personalizar estos valores según tus necesidades.
 */
export const BASENAME = Object.freeze('ui-lab'); // Nombre base del catalogo, puedes cambiarlo como quieras

/**
 * @description
 * Modo de navegación para el catálogo.
 * Opciones disponibles: 'history' | 'next' | 'react-router'
 * Este catálogo usa por defecto 'history' por su sencillez y compatibilidad universal.
 * Si necesitas integrarlo con Next.js o React Router, puedes hacerlo sin problema.
 * La lógica de navegación ya está centralizada a través de 'navigateTo', solo debes adaptarla a tu entorno.
 * Este espacio está pensado como entorno aislado para testeo visual, no como app completa.
 */
export const NAVIGATION_MODE = 'history';


/**
 * @description
 * Colores basicos para los componentes base del catalogo, puedes cambiarlos como quieras.
 */
export const BASECOLORS = Object.freeze({
  ui_catalog_base_color: '#0f172a',
  ui_catalog_text_color: '#f1f5f9',
  ui_catalog_buttons_color: '#1e40af',
  ui_catalog_buttons_hover_color: '#1d4ed8'
});

/**
 * @description
 * Estados de los componentes del catalogo, puedes cambiarlos como quieras, 
 * añadir mas fases o lo que prefieras, solo cambias lo que aparece en la etiqueta y el color para esa fase.
 */
export const STATES = Object.freeze({
  starter: {
    label: 'En desarrollo',
    color: '#e53935' // Rojo colorao con garra, pero no neón.
  },
  medium: {
    label: 'En revisión',
    color: '#fb8c00' // Naranja vibrante, pero no te deja ciego.
  },
  completed: {
    label: 'Finalizado',
    color: '#43a047' // Verde calmado, de esos que dan paz interior.
  }
});

/**
 * @description
 * Categorias para los componentes del catalogo, puedes cambiarlas o añadir lo que quieras.
 */
export const CATEGORIES = Object.freeze({
  components: 'Componentes',
  modules: 'Modulos',
  pages: 'Paginas'
});

/**
 * @description
 * Definimos fuentes para el catalogo, puedes cambiar la fuente base y la fuente de codigo para la documentacion de props.
 */
export const FONTS = Object.freeze({
  FontBase: `'Inter', sans-serif`,
  FontCode: `'Fira Code', monospace`
});