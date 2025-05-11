import { HeaderCatalog } from './components/HeaderCatalog';
import { ComponentCatalog } from './components/ComponentCatalog/index.jsx';
import { applyBaseColors } from './theme/applyBaseColors.js';
import { BASECOLORS, CATEGORIES } from './config/generalConfig.js';
import { ALL_COMPONENTS } from './config/content.js';
import { navigateTo } from './utils/navigate.js';
import { useCatalogRouting } from './utils/useCatalogRouting.js';
import { useRouteListener } from './utils/useRouteListener.js';
import { useEffect, useState } from 'react';
import './theme/default-vars.css';
import './theme/reset.css';
import BodyCatalog from './components/BodyCatalog/index.jsx';

export default function App() {
    const [catalogo, setCatalogo] = useCatalogRouting(CATEGORIES);
    const [selectedComponentView, setSelectedComponentView] = useState(false);
    const [componentData, setComponentData] = useState(null);

    useRouteListener(() => {
        const pathParts = window.location.pathname.split('/');
        setSelectedComponentView(pathParts.length >= 3);
    });

    const elementosFiltrados = ALL_COMPONENTS.filter(comp => comp.category === catalogo); // Filtrar los componentes según la categoría seleccionada

    // Aplicar colores base
    useEffect(() => {
        applyBaseColors(BASECOLORS);

        const pathname = window.location.pathname.replace(/^\/+|\/+$/g, '');
        const [category, componentSlug] = pathname.split('/');

        if (!category || !componentSlug) {
            setComponentData(null);
            return;
        }

        console.log('category:', category);
        console.log('componentSlug:', componentSlug);
        

        // Aquí podrías buscar el componente en tu base de datos estática
        ALL_COMPONENTS.forEach((component) => {
            if (component.name === decodeURIComponent(componentSlug)) {
                setComponentData(component);;
            }
        });

        if(!componentData) {
            setSelectedComponentView(true);
            return;
        }
        
    }, []);

    const handleNavigation = (path) => {
        // Navegar a la ruta deseada
        navigateTo(path);
    };


    return (
        // Estructura de la aplicacion
        <div>
            <HeaderCatalog navigate={handleNavigation} setCatalogo={setCatalogo} />
            {!selectedComponentView && (
                <BodyCatalog navigate={handleNavigation} catalogo={elementosFiltrados} />
            )}
            {selectedComponentView && <ComponentCatalog />}

        </div>
    );
}