import styles from './styles.module.css';

export const NotFoundCatalog = () => {
    return (
        <div className={styles.background_catalog_component}>
            <div className={styles.background_catalog_container}>
                <h1>404</h1>
                <h2>Componente no encontrado</h2>
                <p>El componente que buscas no existe o no se encuentra disponible.</p>
            </div>
        </div>
    );
};