/**
 * Estas son las configuraciones de los colores, estados y fuentes para el catálogo de componentes.
 * Puedes personalizar estos valores según tus necesidades.
 */
export const BASENAME = Object.freeze('ui-lab'); // Nombre base del catalogo, puedes cambiarlo como quieras

/**
 * @description
 * Modo de navegación para el catálogo.
 */
export const NAVIGATION_MODE = 'history'; // 'next' | 'react-router' | 'history'


/**
 * @description
 * Colores basicos para los componentes base del catalogo, puedes cambiarlos como quieras.
 */
export const BASECOLORS = Object.freeze({
  ui_catalog_base_color:'#0f172a',   
  ui_catalog_text_color: '#f1f5f9',  
  ui_catalog_buttons_color: '#1e40af', 
  ui_catalog_buttons_hover_color:'#1d4ed8'
});

/**
 * @description
 * Estados de los componentes del catalogo, puedes cambiarlos como quieras, 
 * añadir mas fases o lo que prefieras, solo cambias lo que aparece en la etiqueta y el color para esa fase.
 */
export const STATES = Object.freeze({
  starter: {
    label: 'En desarrollo',
    color: '#22c55e'
  },
  medium: {
    label: 'En revisión',
    color: '#f59e0b'
  },
  completed: {
    label: 'Finalizado',
    color: '#ef4444'
  }
});

/**
 * @description
 * Categorias para los componentes del catalogo, puedes cambiarlas o añadir lo que quieras.
 */
export const CATEGORIES = Object.freeze({
  components: 'Componentes',
  modules: 'Modulos',
  pages: 'Pages'
});

/**
 * @description
 * Definimos fuentes para el catalogo, puedes cambiar la fuente base y la fuente de codigo para la documentacion de props.
 */
export const FONTS = Object.freeze({
  FontBase: `'Inter', sans-serif`,
  FontCode: `'Fira Code', monospace`
});