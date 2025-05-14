import styles from './styles.module.css';

export const ButtonPrueba = ({ operation, onclick, className }) => {
    console.log(`Boton ${operation} renderizado`);

    
    

    return (
        <button className={`${styles.btn} ${className}`} onClick={() => onclick(operation)}>
            {operation === 'sum' ? '+' : '-'}
        </button>
    );
}