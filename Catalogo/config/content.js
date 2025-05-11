import Button from '../../ProyectoEjemplo/components/button.jsx' // Aqui importamos el componente que queremos usar
import { CATEGORIES, STATES } from './generalConfig.js'

export const ALL_COMPONENTS = [
    {
        name: "Catalogo de Botones", // Nombre del componente
        type: " - Usados en diferentes partes web", // Aqui definimos el tipo de componente que es de forma que lo entendamos facilmente
        state: STATES.completed, // Aqui cambiamos el estado en el que se encuentra el componente
        category: CATEGORIES.components, // Aqui definimos la categoria a la que pertenece el componente
        component: Button, //Aqui exportamos y usamos el componente en cuestion
        props: "", //Aqui pasamos las props que tiene el componente
        endpoint: {}, //Aqui podemos definir el endpoint de la API que queremos usar, si no lo usamos lo dejamos vacio
        useIn: [] //Aqui definimos en que parte de la web se va a usar el componente
    },
    {
        name: "HOME",
        type: "Pagina inicial",
        state: STATES.completed,
        category: CATEGORIES.pages,
        component: Button,
        props:"",
        endpoint: {
            status: "provisional",
            direction: "",
            objeto: "",
        },
        useIn: [""]
    }
    
]