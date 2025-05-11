import styles from './styles.module.css';

const OptionCatalog = ({ component, navigate }) => {

    const goComponent = () => {
        const base = component.category.toLowerCase(); // ejemplo: 'components'
        const slug = encodeURIComponent(component.name);
        navigate(`/${base}/${slug}`);
    };

    // Estilo dinámico basado en el estado
    const borderColor = { borderColor: component.state.color };

    return (
        <div className={styles.option_body_catalog}>
            <p className={styles.option_title}>
                {component.name}
            </p>
            <p className={styles.option_type}>
                {component.type}
            </p>
            <div className={styles.option_state_wrapper}>
                <p className={styles.option_state}>
                    {component.state.label}
                </p>
                <div
                    className={styles.option_marker}
                    style={{ '--background-color-option': borderColor.borderColor }}
                ></div>
            </div>

            <button className={styles.option_button} onClick={goComponent}>
                Ir a elemento
            </button>
        </div>
    );
};



export default OptionCatalog