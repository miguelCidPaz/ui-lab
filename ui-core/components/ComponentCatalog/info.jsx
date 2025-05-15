import styles from './styles.module.css';

export const Info = ({ data }) => {

    if (data === null || data === undefined) {
        return <div>cargando...</div>
    }

    return (
        <div className={styles.background_catalog_description}>
            <p><strong>Nombre:</strong> {data.name}</p>
            <p><strong>Usado en:</strong> {data.useIn}</p>


            <div className={styles.section}>
                <p className={styles.sectionTitle}>EndPoint</p>
                <p><strong>URL:</strong> {data.endpoint}</p>
                <p><strong>Método HTTP:</strong> {data.methodHttp}</p>
            </div>

            <div className={styles.section}>
                <p className={styles.sectionTitle}>Ejemplo JSON de respuesta</p>
                <p className={styles.code_reference}>{JSON.stringify(Object.keys(data.props).length === 0 ? data.propsNoDefinidas : data.props, null, 2)}</p>
            </div>
        </div>

    )
}