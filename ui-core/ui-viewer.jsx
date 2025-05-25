import { HeaderCatalog } from './components/HeaderCatalog/index.jsx';
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
export default function App() {
    const [catalogo, setCatalogo] = useCatalogRouting(CATEGORIES);
    const [proyectSelected, setProyectSelected] = useState(null);
    const componentData = useActiveComponent(ALL_COMPONENTS, proyectSelected);
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
    const allProjects = [...new Set(ALL_COMPONENTS.flatMap(c => c.useIn))];
    const allCategories = [...new Set(ALL_COMPONENTS.map(c => c.category))];

    const handleProyectSelected = (proyect) => {
        setProyectSelected(proyect);
    }

    return (
        // Estructura de la aplicacion
        <div>
            <button className={style.closeButton} onClick={() => setShowHeader(!showHeader)}>X</button>
            {showHeader && <HeaderCatalog
                navigate={handleNavigation}
                setCatalogo={setCatalogo}
                projects={allProjects}
                handleProyectSelected={handleProyectSelected}
                allCategories={allCategories} />}
            {!selectedComponentView && (
                <BodyCatalog navigate={handleNavigation} catalogo={ALL_COMPONENTS.filter(comp => comp.category === catalogo)} />
            )}
            {selectedComponentView && <ComponentCatalog componentData={componentData} />}
        </div>
    );
}