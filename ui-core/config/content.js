import { CATEGORIES, STATES } from './generalConfig.js';

export const COMPONENT_REGISTRY = [
{
  name: "Boton Sumar",
  componentName: "ButtonPrueba",
  componentPath: "/Proyectos/ProyectoEjemplo/components/ButtonPrueba/index.jsx",
  propsName: "propsButtonMasSolitario",
  propsPath: "/Proyectos/ProyectoEjemplo/utils/props.js",
  type: "Boton sin estilos adicionales",
  category: "Componentes",
  state: { label: "Finalizado", color: "#43a047" },
  endpoint: "-",
  methodHttp: "-",
  useIn: ["ProyectoEjemplo"]
},
{
  name: "Boton Restar",
  componentName: "ButtonPrueba",
  componentPath: "/Proyectos/ProyectoEjemplo/components/ButtonPrueba/index.jsx",
  propsName: "propsButtonMenosSolitario",
  propsPath: "/Proyectos/ProyectoEjemplo/utils/props.js",
  type: "Boton sin estilos adicionales",
  category: "Componentes",
  state: { label: "Finalizado", color: "#43a047" },
  endpoint: "-",
  methodHttp: "-",
  useIn: ["ProyectoEjemplo"]
},
{
  name: "Panel informativo",
  componentName: "PanelPrueba",
  componentPath: "/Proyectos/ProyectoEjemplo/components/PanelPrueba/index.jsx",
  propsName: "propsPanelSolitario",
  propsPath: "/Proyectos/ProyectoEjemplo/utils/props.js",
  type: "Panel sin estilos adicionales",
  category: "Componentes",
  state: { label: "Finalizado", color: "#43a047" },
  endpoint: "-",
  methodHttp: "-",
  useIn: ["ProyectoEjemplo"]
},
{
  name: "EmojiDisplay",
  componentName: "EmojiDisplay",
  componentPath: "/Proyectos/ProyectoEjemplo/components/EmojiDisplay/index.jsx",
  propsName: "propsEmojiDisplay",
  propsPath: "/Proyectos/ProyectoEjemplo/utils/props.js",
  type: "Panel que muestra un emoji segun el valor que le pasemos",
  category: "Componentes",
  state: { label: "En desarrollo", color: "#e53935" },
  endpoint: "-",
  methodHttp: "-",
  useIn: ["ProyectoEjemplo"]
},
{
  name: "Panel Emoji",
  componentName: "PanelEmoji",
  componentPath: "/Proyectos/ProyectoEjemplo/modules/PanelEmoji/index.jsx",
  propsName: "propsPanelEmoji",
  propsPath: "/Proyectos/ProyectoEjemplo/utils/props.js",
  type: "Panel que muestra un emoji junto a un panel informativo",
  category: "Modulos",
  state: { label: "En revisión", color: "#fb8c00" },
  endpoint: "-",
  methodHttp: "-",
  useIn: ["ProyectoEjemplo"]
},
{
  name: "Panel Operaciones",
  componentName: "PanelOperaciones",
  componentPath: "/Proyectos/ProyectoEjemplo/modules/PanelOperaciones/index.jsx",
  propsName: "propsPanelOperaciones",
  propsPath: "/Proyectos/ProyectoEjemplo/utils/props.js",
  type: "Panel con informativo y botones sumar/restar",
  category: "Modulos",
  state: { label: "En revisión", color: "#fb8c00" },
  endpoint: "-",
  methodHttp: "-",
  useIn: ["ProyectoEjemplo"]
},
{
  name: "Pagina de prueba",
  componentName: "PageEjemplo",
  componentPath: "/Proyectos/ProyectoEjemplo/pages/PageEjemplo/index.jsx",
  propsName: "propsPageEjemplo",
  propsPath: "/Proyectos/ProyectoEjemplo/utils/props.js",
  type: "Pagina que muestra los modulos de operaciones y emoji",
  category: "Paginas",
  state: { label: "En revisión", color: "#fb8c00" },
  endpoint: "-",
  methodHttp: "-",
  useIn: ["ProyectoEjemplo"]
},
{
  name: "Boton Sumar",
  componentName: "ButtonPrueba",
  componentPath: "/Proyectos/ProyectoEjemplo2/components/ButtonPrueba/index.jsx",
  propsName: "propsButtonMasSolitario",
  propsPath: "/Proyectos/ProyectoEjemplo2/utils/props.js",
  type: "Boton sin estilos adicionales",
  category: "Componentes",
  state: { label: "Finalizado", color: "#43a047" },
  endpoint: "-",
  methodHttp: "-",
  useIn: ["ProyectoEjemplo2"]
},
{
  name: "Boton Restar",
  componentName: "ButtonPrueba",
  componentPath: "/Proyectos/ProyectoEjemplo2/components/ButtonPrueba/index.jsx",
  propsName: "propsButtonMenosSolitario",
  propsPath: "/Proyectos/ProyectoEjemplo2/utils/props.js",
  type: "Boton sin estilos adicionales",
  category: "Componentes",
  state: { label: "Finalizado", color: "#43a047" },
  endpoint: "-",
  methodHttp: "-",
  useIn: ["ProyectoEjemplo2"]
},
{
  name: "Panel informativo",
  componentName: "PanelPrueba",
  componentPath: "/Proyectos/ProyectoEjemplo2/components/PanelPrueba/index.jsx",
  propsName: "propsPanelSolitario",
  propsPath: "/Proyectos/ProyectoEjemplo2/utils/props.js",
  type: "Panel sin estilos adicionales",
  category: "Componentes",
  state: { label: "Finalizado", color: "#43a047" },
  endpoint: "-",
  methodHttp: "-",
  useIn: ["ProyectoEjemplo2"]
},
{
  name: "EmojiDisplay",
  componentName: "EmojiDisplay",
  componentPath: "/Proyectos/ProyectoEjemplo2/components/EmojiDisplay/index.jsx",
  propsName: "propsEmojiDisplay",
  propsPath: "/Proyectos/ProyectoEjemplo2/utils/props.js",
  type: "Panel que muestra un emoji segun el valor que le pasemos",
  category: "Componentes",
  state: { label: "En desarrollo", color: "#e53935" },
  endpoint: "-",
  methodHttp: "-",
  useIn: ["ProyectoEjemplo2"]
},
{
  name: "Panel Emoji",
  componentName: "PanelEmoji",
  componentPath: "/Proyectos/ProyectoEjemplo2/modules/PanelEmoji/index.jsx",
  propsName: "propsPanelEmoji",
  propsPath: "/Proyectos/ProyectoEjemplo2/utils/props.js",
  type: "Panel que muestra un emoji junto a un panel informativo",
  category: "Modulos",
  state: { label: "En revisión", color: "#fb8c00" },
  endpoint: "-",
  methodHttp: "-",
  useIn: ["ProyectoEjemplo2"]
},
{
  name: "Panel Operaciones",
  componentName: "PanelOperaciones",
  componentPath: "/Proyectos/ProyectoEjemplo2/modules/PanelOperaciones/index.jsx",
  propsName: "propsPanelOperaciones",
  propsPath: "/Proyectos/ProyectoEjemplo2/utils/props.js",
  type: "Panel con informativo y botones sumar/restar",
  category: "Modulos",
  state: { label: "En revisión", color: "#fb8c00" },
  endpoint: "-",
  methodHttp: "-",
  useIn: ["ProyectoEjemplo2"]
},
{
  name: "Pagina de prueba",
  componentName: "PageEjemplo",
  componentPath: "/Proyectos/ProyectoEjemplo2/pages/PageEjemplo/index.jsx",
  propsName: "propsPageEjemplo",
  propsPath: "/Proyectos/ProyectoEjemplo2/utils/props.js",
  type: "Pagina que muestra los modulos de operaciones y emoji",
  category: "Paginas",
  state: { label: "En revisión", color: "#fb8c00" },
  endpoint: "-",
  methodHttp: "-",
  useIn: ["ProyectoEjemplo2"]
}
];


// Cache interno (opcional)
const COMPONENT_CACHE = {};

// Montamos ALL_COMPONENTS listo para uso dinámico
export const ALL_COMPONENTS = COMPONENT_REGISTRY.map(entry => ({
    ...entry,
    loader: async () => {
        const projectKey = entry.useIn && entry.useIn.length > 0
            ? entry.useIn.sort().join('_')
            : 'general';
        const cacheKey = `${entry.name}_${projectKey}`;

        if (COMPONENT_CACHE[cacheKey]) {
            return COMPONENT_CACHE[cacheKey];
        }

        const module = await import(/* @vite-ignore */ entry.componentPath);
        const component = module.default || module[entry.componentName];
        COMPONENT_CACHE[cacheKey] = component;
        return component;
    }
}));
