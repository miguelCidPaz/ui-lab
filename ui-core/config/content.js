import { ButtonPrueba } from '../../ProyectoEjemplo/components/ButtonPrueba/index.jsx'
import { EmojiDisplay } from '../../ProyectoEjemplo/components/EmojiDisplay/index.jsx'
import { PanelPrueba } from '../../ProyectoEjemplo/components/PanelPrueba/index.jsx'
import { PanelEmoji } from '../../ProyectoEjemplo/modules/PanelEmoji/index.jsx'
import { PanelOperaciones } from '../../ProyectoEjemplo/modules/PanelOperaciones/index.jsx'
import { PageEjemplo } from '../../ProyectoEjemplo/pages/PageEjemplo/index.jsx'
import { propsButtonMasSolitario, propsButtonMenosSolitario, propsPanelSolitario } from '../../ProyectoEjemplo/utils/props.js'
import { CATEGORIES, STATES } from './generalConfig.js'

/**
 * Agrega aqui los componentes que quieres usar en UI-LAB
 */
export const ALL_COMPONENTS = [
    {
        name: "Boton Sumar", // Nombre del componente
        type: "Boton sin estilos adicionales", // Aqui definimos el tipo de componente que es de forma que lo entendamos facilmente
        state: STATES.completed, // Aqui cambiamos el estado en el que se encuentra el componente
        category: CATEGORIES.components, // Aqui definimos la categoria a la que pertenece el componente
        component: ButtonPrueba, //Aqui exportamos y usamos el componente en cuestion
        props: propsButtonMasSolitario, //Aqui pasamos las props que tiene el componente
        endpoint: "-", //Aqui podemos definir el endpoint de la API que queremos usar, si no lo usamos lo dejamos vacio
        methodHttp: "-", // Aqui definimos el metodo HTTP que queremos usar, si no lo usamos lo dejamos vacio
        useIn: ["Componentes - Modulos - Paginas"] //Aqui definimos en que parte de la web se va a usar el componente
    },
    {
        name: "Boton Restar",
        type: "Boton sin estilos adicionales",
        state: STATES.completed,
        category: CATEGORIES.components,
        component: ButtonPrueba,
        props: propsButtonMenosSolitario,
        endpoint: "-",
        methodHttp: "-",
        useIn: ["Componentes - Modulos - Paginas"]
    },
    {
        name: "Panel informativo",
        type: "Panel sin estilos adicionales",
        state: STATES.completed,
        category: CATEGORIES.components,
        component: PanelPrueba,
        props: propsPanelSolitario,
        endpoint: "-",
        methodHttp: "-",
        useIn: ["Componentes - Modulos - Paginas"]
    },
    {
        name: "EmojiDisplay",
        type: "Panel que muestra un emoji segun el valor que le pasemos",
        state: STATES.starter,
        category: CATEGORIES.components,
        component: EmojiDisplay,
        props: {emoji:0},
        endpoint: "-", 
        useIn: [""]
    },
    {
        name: "Panel Emoji",
        type: "Panel que muestra un emoji segun el valor que le pasemos junto a un panel informativo",
        state: STATES.medium,
        category: CATEGORIES.modules,
        component: PanelEmoji,
        props: {value:0, classname:""},
        endpoint: "-", 
        useIn: [""]
    },
    {
        name: "Panel Operaciones",
        type: "Panel con Panel informativo y Botones sumar/restar",
        state: STATES.medium,
        category: CATEGORIES.modules,
        component: PanelOperaciones,
        props: "",
        endpoint: "-", 
        methodHttp: "-", // Aqui definimos el metodo HTTP que queremos usar, si no lo usamos lo dejamos vacio

        useIn: [""]
    },
    {
        name: "Pagina de prueba",
        type: "Pagina que muestra los modulos de operaciones y emoji",
        state: STATES.medium,
        category: CATEGORIES.pages,
        isPage: true,
        component: PageEjemplo,
        props: "",
        endpoint: "-", 
        methodHttp: "-", // Aqui definimos el metodo HTTP que queremos usar, si no lo usamos lo dejamos vacio

        useIn: [""]
    }

]