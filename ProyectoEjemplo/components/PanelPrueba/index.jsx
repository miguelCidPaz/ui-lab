import styles from './styles.module.css';

export const PanelPrueba = ({ data: { numb, label, className } }) => {

    return (
        <div className={`${styles.background_panel} ${className}`}>
            <h1 className={styles.title}>{label ? label : "Panel"}</h1>
            <p className={styles.text}>{numb}</p>
        </div>
    );
}