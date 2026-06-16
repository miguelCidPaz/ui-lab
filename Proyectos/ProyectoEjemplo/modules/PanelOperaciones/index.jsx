import { ButtonPrueba } from "../../components/ButtonPrueba"
import { PanelPrueba } from "../../components/PanelPrueba"
import styles from './styles.module.css';
import { useState } from 'react';

export const PanelOperaciones = ({ value, setValue }) => {
    const [numb, setNumb] = useState(value ? value : 0);

    // Usamos los props si existen, si no usamos estado local
    const currentValue = value ?? numb;
    const updateValue = setValue ?? setNumb;

    const handleClick = (operation) => {
        if (operation === 'sum') {
            updateValue(currentValue + 1);
        } else if (operation === 'rest') {
            updateValue(currentValue - 1);
        }
    };

    return (
        <div className={styles.background_panel}>
            <PanelPrueba numb={currentValue} className={styles.number_panel} label="Operaciones" />
            <div className={styles.background_panel_buttons}>
                <ButtonPrueba operation="sum" onclick={handleClick} className={styles.btn_panel} />
                <ButtonPrueba operation="rest" onclick={handleClick} className={styles.btn_panel} />
            </div>
        </div>
    )
}