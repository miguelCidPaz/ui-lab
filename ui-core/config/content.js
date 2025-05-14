import Button from '../../ProyectoEjemplo/components/button.jsx' // Aqui importamos el componente que queremos usar
import { Elementoultraalto } from '../../ProyectoEjemplo/modules/Elementoultraalto.jsx'
import { CATEGORIES, STATES } from './generalConfig.js'

/**
 * Agrega aqui los componentes que quieres usar en UI-LAB
 */
export const ALL_COMPONENTS = [
    {
        name: "Catalogo de Botones", // Nombre del componente
        type: "Boton estandar", // Aqui definimos el tipo de componente que es de forma que lo entendamos facilmente
        state: STATES.completed, // Aqui cambiamos el estado en el que se encuentra el componente
        category: CATEGORIES.components, // Aqui definimos la categoria a la que pertenece el componente
        component: Button, //Aqui exportamos y usamos el componente en cuestion
        props: { "name": "Botón Primario", "slug": "boton-primario", "category": "Buttons", "component": "PrimaryButton", "props": { "label": "Haz clic", "onClick": "handleClick" }, "content": null, "state": { "label": "Finalizado", "color": "#43a047" } }, //Aqui pasamos las props que tiene el componente
        endpoint: "http://localhost:5173/componentes/pruebaComponente", //Aqui podemos definir el endpoint de la API que queremos usar, si no lo usamos lo dejamos vacio
        methodHttp: "GET", // Aqui definimos el metodo HTTP que queremos usar, si no lo usamos lo dejamos vacio
        useIn: [" - Usados en diferentes partes web"] //Aqui definimos en que parte de la web se va a usar el componente
    },
    {
        name: "HOME",
        type: "Pagina inicial",
        state: STATES.medium,
        category: CATEGORIES.pages,
        full:true,
        component: Button,
        props: "",
        endpoint: "http://localhost:5173/componentes/pruebaComponente", 
        methodHttp: "GET", // Aqui definimos el metodo HTTP que queremos usar, si no lo usamos lo dejamos vacio

        useIn: [""]
    },
    {
        name: "ultralto",
        type: "ultralto",
        state: STATES.starter,
        category: CATEGORIES.modules,
        component: Elementoultraalto,
        props: "",
        endpoint: "http://localhost:5173/componentes/pruebaComponente", 
        useIn: [""]
    }

]