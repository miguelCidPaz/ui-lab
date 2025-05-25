import styles from './styles.module.css';
import { CATEGORIES, BASENAME } from '../../config/generalConfig.js';
import { ProjectSelector } from '../ProjectSelector/index.jsx';

export const HeaderCatalog = ({ navigate, setCatalogo, projects, handleProyectSelected, allCategories }) => {

    // Función para establecer el layout y navegar
    const setLayout = (category) => {
        navigate(encodeURIComponent(category.toLowerCase(category))); // establece el layout
    };

    const categories = Object.entries(CATEGORIES).map(([_, value]) => value);

    return (
        <div>
            <div className={styles.header_catalog_principal}>
                <div className={styles.title}>{BASENAME}</div>
                <div className={styles.menu}>
                    {allCategories.map((category) => (
                        <button
                            className={styles.buttonCatalog}
                            onClick={() => setLayout(category)}
                            key={category}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                <div className={styles.project_selector}>
                    <span className={styles.project_selector_label}>Proyecto:</span>
                    <ProjectSelector projects={projects} handleProyectSelected={handleProyectSelected} />
                </div>
            </div>
        </div>
    );
};