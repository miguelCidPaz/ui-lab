import { CATEGORIES, STATES } from './generalConfig.js';

export const COMPONENT_REGISTRY = [
    {
        name: "Boton Sumar",
        componentName: 'ButtonPrueba',
        componentPath: '/Proyectos/ProyectoEjemplo2/components/ButtonPrueba/index.jsx',
        propsName: 'propsButtonMasSolitario',
        propsPath: '/Proyectos/ProyectoEjemplo2/utils/props.js',
        type: "Boton sin estilos adicionales",
        state: STATES.completed,
        category: CATEGORIES.components,
        endpoint: "-",
        methodHttp: "-",
        useIn: ["ProyectoEjemplo2"]
    },
    {
        name: "Boton Restar",
        componentName: 'ButtonPrueba',
        componentPath: '/Proyectos/ProyectoEjemplo2/components/ButtonPrueba/index.jsx',
        propsName: 'propsButtonMenosSolitario',
        propsPath: '/Proyectos/ProyectoEjemplo2/utils/props.js',
        type: "Boton sin estilos adicionales",
        state: STATES.completed,
        category: CATEGORIES.components,
        endpoint: "-",
        methodHttp: "-",
        useIn: ["ProyectoEjemplo2"]
    },
    {
        name: "Panel informativo",
        componentName: 'PanelPrueba',
        componentPath: '/Proyectos/ProyectoEjemplo2/components/PanelPrueba/index.jsx',
        propsName: 'propsPanelSolitario',
        propsPath: '/Proyectos/ProyectoEjemplo2/utils/props.js',
        type: "Panel sin estilos adicionales",
        state: STATES.completed,
        category: CATEGORIES.components,
        endpoint: "-",
        methodHttp: "-",
        useIn: ["ProyectoEjemplo2"]
    },
    {
        name: "EmojiDisplay",
        componentName: 'EmojiDisplay',
        componentPath: '/Proyectos/ProyectoEjemplo2/components/EmojiDisplay/index.jsx',
        propsName: 'propsEmojiDisplay',
        propsPath: '/Proyectos/ProyectoEjemplo2/utils/props.js',
        type: "Panel que muestra un emoji segun el valor que le pasemos",
        state: STATES.starter,
        category: CATEGORIES.components,
        endpoint: "-",
        useIn: ["ProyectoEjemplo2"]
    },
    {
        name: "Panel Emoji",
        componentName: 'PanelEmoji',
        componentPath: '/Proyectos/ProyectoEjemplo2/modules/PanelEmoji/index.jsx',
        propsName: 'propsPanelEmoji',
        propsPath: '/Proyectos/ProyectoEjemplo2/utils/props.js',
        type: "Panel que muestra un emoji junto a un panel informativo",
        state: STATES.medium,
        category: CATEGORIES.modules,
        endpoint: "-",
        useIn: ["ProyectoEjemplo2"]
    },
    {
        name: "Panel Operaciones",
        componentName: 'PanelOperaciones',
        componentPath: '/Proyectos/ProyectoEjemplo2/modules/PanelOperaciones/index.jsx',
        propsName: 'propsPanelOperaciones',
        propsPath: '/Proyectos/ProyectoEjemplo2/utils/props.js',
        type: "Panel con informativo y botones sumar/restar",
        state: STATES.medium,
        category: CATEGORIES.modules,
        endpoint: "-",
        methodHttp: "-",
        useIn: ["ProyectoEjemplo2"]
    },
    {
        name: "Pagina de prueba",
        componentName: 'PageEjemplo',
        componentPath: '/Proyectos/ProyectoEjemplo2/pages/PageEjemplo/index.jsx',
        propsName: 'propsPageEjemplo',
        propsPath: '/Proyectos/ProyectoEjemplo2/utils/props.js',
        type: "Pagina que muestra los modulos de operaciones y emoji",
        state: STATES.medium,
        category: CATEGORIES.pages,
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
