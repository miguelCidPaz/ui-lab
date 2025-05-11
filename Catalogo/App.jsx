import { HeaderCatalog } from './components/HeaderCatalog';
import { ComponentCatalog } from './components/ComponentCatalog/index.jsx';
import { applyBaseColors } from './theme/applyBaseColors.js';
import { BASECOLORS, CATEGORIES } from './config/generalConfig.js';
import { ALL_COMPONENTS } from './config/content.js';
import { navigateTo } from './utils/navigate.js';
import { useCatalogRouting } from './utils/hooks/useCatalogRouting.js';
import { useActiveComponent } from './utils/hooks/useActiveComponent.js';
import { useEffect, useState } from 'react';
import './theme/default-vars.css';
import './theme/reset.css';
import style from './theme/closeButton.module.css';
import BodyCatalog from './components/BodyCatalog/index.jsx';

export default function App() {
    const [catalogo, setCatalogo] = useCatalogRouting(CATEGORIES);
    const componentData = useActiveComponent(ALL_COMPONENTS);
    const [showHeader, setShowHeader] = useState(true);

    // Aplicar colores base
    useEffect(() => {
        applyBaseColors(BASECOLORS);
    }, []);

    const handleNavigation = (path) => {
        // Navegar a la ruta deseada
        navigateTo(path);
    };

    // Determinar si estamos en la vista de un componente o no
    const selectedComponentView = componentData !== null;

    return (
        // Estructura de la aplicacion
        <div>
            <button className={style.closeButton}  onClick={() => setShowHeader(!showHeader)}>X</button>
            {showHeader && <HeaderCatalog navigate={handleNavigation} setCatalogo={setCatalogo} />}
            {!selectedComponentView && (
                <BodyCatalog navigate={handleNavigation} catalogo={ ALL_COMPONENTS.filter(comp => comp.category === catalogo)} />
            )}
            {selectedComponentView && <ComponentCatalog componentData={componentData} />}
        </div>
    );
}