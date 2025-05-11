import { useEffect, useState } from 'react';
import { ALL_COMPONENTS } from '../../config/content';
import { CATEGORIES } from '../../config/generalConfig';
import { Info } from './info';
import styles from './styles.module.css';
import { useRouteListener } from '../../utils/useRouteListener';

export const ComponentCatalog = () => {
    const [componentData, setComponentData] = useState(null);
    const [screenWidth, setScreenWidth] = useState(() =>
        typeof window !== 'undefined' && window.innerWidth > 1100 ? 'desktop' : 'mobile'
    );

    //Extrae el componente de la URL
    const updateComponent = () => {
        const pathParts = window.location.pathname.split('/');

        const validCategories = Object.values(CATEGORIES).map(c => c.toLowerCase());
        const currentCategory = pathParts[1]?.toLowerCase();

        if (validCategories.includes(currentCategory)) {
            const componentName = decodeURIComponent(pathParts[2]);
            const found = ALL_COMPONENTS.find(c => c.name === componentName);
            console.log('Componente encontrado:', pathParts);
            setComponentData(found || null);
        } else {
            setComponentData(null);
        }
    };

    //Hook central para cambios de ruta (solo en modo "history")
    useRouteListener(updateComponent);

    //Primera carga
    useEffect(updateComponent, []);

    //Listener de resize para estilos adaptativos
    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth > 1100 ? 'desktop' : 'mobile');
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    //Si no encuentra componente
    if (!componentData) {
        return <div className={styles.not_found}>Componente no encontrado</div>;
    }

    //Renderizado principal
    return (
        <div className={componentData.category === 'Pages'
            ? styles.background_catalog_component_page
            : styles.background_catalog_component
        }>
            <div className={styles.background_catalog_container}>
                {componentData.content ? (
                    <componentData.component data={componentData.props}>
                        {componentData.content.map((e, i) => (
                            <e.component key={i} data={e.props} />
                        ))}
                    </componentData.component>
                ) : (
                    <componentData.component data={componentData.props} />
                )}
            </div>

            {componentData.category !== 'Layouts' && (
                <div className={`${styles.background_catalog_container} ${styles.background_catalog_description}`}>
                    <Info data={componentData} />
                </div>
            )}
        </div>
    );
};
