import { CATEGORIES, STATES } from './generalConfig.js';

const COMPONENT_REGISTRY = [
    {
        name: "Boton Sumar",
        componentName: 'ButtonPrueba',
        componentPath: '../../Proyectos/ProyectoEjemplo/components/ButtonPrueba/index.jsx',
        propsName: 'propsButtonMasSolitario',
        propsPath: '../../Proyectos/ProyectoEjemplo/utils/props.js',
        type: "Boton sin estilos adicionales",
        state: STATES.completed,
        category: CATEGORIES.components,
        endpoint: "-",
        methodHttp: "-",
        useIn: ["ProyectoEjemplo"]
    },
    {
        name: "Boton Restar",
        componentName: 'ButtonPrueba',
        componentPath: '../../Proyectos/ProyectoEjemplo/components/ButtonPrueba/index.jsx',
        propsName: 'propsButtonMenosSolitario',
        propsPath: '../../Proyectos/ProyectoEjemplo/utils/props.js',
        type: "Boton sin estilos adicionales",
        state: STATES.completed,
        category: CATEGORIES.components,
        endpoint: "-",
        methodHttp: "-",
        useIn: ["ProyectoEjemplo"]
    },
    {
        name: "Panel informativo",
        componentName: 'PanelPrueba',
        componentPath: '../../Proyectos/ProyectoEjemplo/components/PanelPrueba/index.jsx',
        propsName: 'propsPanelSolitario',
        propsPath: '../../Proyectos/ProyectoEjemplo/utils/props.js',
        type: "Panel sin estilos adicionales",
        state: STATES.completed,
        category: CATEGORIES.components,
        endpoint: "-",
        methodHttp: "-",
        useIn: ["ProyectoEjemplo"]
    },
    {
        name: "EmojiDisplay",
        componentName: 'EmojiDisplay',
        componentPath: '../../Proyectos/ProyectoEjemplo/components/EmojiDisplay/index.jsx',
        propsName: 'propsEmojiDisplay',
        propsPath: '../../Proyectos/ProyectoEjemplo/utils/props.js',
        type: "Panel que muestra un emoji segun el valor que le pasemos",
        state: STATES.starter,
        category: CATEGORIES.components,
        endpoint: "-",
        useIn: ["ProyectoEjemplo"]
    },
    {
        name: "Panel Emoji",
        componentName: 'PanelEmoji',
        componentPath: '../../Proyectos/ProyectoEjemplo/modules/PanelEmoji/index.jsx',
        propsName: 'propsPanelEmoji',
        propsPath: '../../Proyectos/ProyectoEjemplo/utils/props.js',
        type: "Panel que muestra un emoji junto a un panel informativo",
        state: STATES.medium,
        category: CATEGORIES.modules,
        endpoint: "-",
        useIn: ["ProyectoEjemplo"]
    },
    {
        name: "Panel Operaciones",
        componentName: 'PanelOperaciones',
        componentPath: '../../Proyectos/ProyectoEjemplo/modules/PanelOperaciones/index.jsx',
        propsName: 'propsPanelOperaciones',
        propsPath: '../../Proyectos/ProyectoEjemplo/utils/props.js',
        type: "Panel con informativo y botones sumar/restar",
        state: STATES.medium,
        category: CATEGORIES.modules,
        endpoint: "-",
        methodHttp: "-",
        useIn: ["ProyectoEjemplo"]
    },
    {
        name: "Pagina de prueba",
        componentName: 'PageEjemplo',
        componentPath: '../../Proyectos/ProyectoEjemplo/pages/PageEjemplo/index.jsx',
        propsName: 'propsPageEjemplo',
        propsPath: '../../Proyectos/ProyectoEjemplo/utils/props.js',
        type: "Pagina que muestra los modulos de operaciones y emoji",
        state: STATES.medium,
        category: CATEGORIES.pages,
        endpoint: "-",
        methodHttp: "-",
        useIn: ["ProyectoEjemplo"]
    }
];







// Cache interno (opcional)
const COMPONENT_CACHE = {};

// Montamos ALL_COMPONENTS listo para uso dinámico
export const ALL_COMPONENTS = COMPONENT_REGISTRY.map(entry => ({
    ...entry,
    loader: async () => {
        if (COMPONENT_CACHE[entry.componentName]) {
            return COMPONENT_CACHE[entry.componentName];
        }

        const module = await import(/* @vite-ignore */ entry.componentPath);
        const component = module.default || module[entry.componentName];
        COMPONENT_CACHE[entry.componentName] = component;
        return component;
    }
}));