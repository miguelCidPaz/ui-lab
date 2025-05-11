import styles from './styles.module.css';
import { CATEGORIES, BASENAME } from '../../config/generalConfig.js';

export const HeaderCatalog = ({ navigate, setCatalogo }) => {

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
                    {categories.map((category) => (
                        <button
                            className={styles.buttonCatalog}
                            onClick={() => setLayout(category)}
                            key={category}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};