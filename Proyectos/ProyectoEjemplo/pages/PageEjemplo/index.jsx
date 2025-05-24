import { useState } from 'react';
import { PanelOperaciones } from '../../modules/PanelOperaciones';
import { PanelEmoji } from '../../modules/PanelEmoji';
import styles from './styles.module.css';

export const PageEjemplo = ({ }) => {
    const [valor, setValor] = useState(0);

    return (
        <div className={styles.page_wrapper}>
            <h1 className={styles.page_title}>Demo de Componentes & Módulos formando pagina</h1>
            <div className={styles.modules_container}>
                <PanelOperaciones value={valor} setValue={setValor} classname={styles.panel_contador} />
                <PanelEmoji value={valor} classname={styles.panel_emoji} />
            </div>
        </div>

    );
};
