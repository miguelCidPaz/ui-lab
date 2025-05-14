import styles from './styles.module.css';

export const ButtonPrueba = ({ data: {operation, onclick, className} }) => {

    return (
        <button className={`${styles.btn} ${className}`} onClick={() => onclick(operation)}>
            {operation === 'sum' ? '+' : '-'}
        </button>
    );
}