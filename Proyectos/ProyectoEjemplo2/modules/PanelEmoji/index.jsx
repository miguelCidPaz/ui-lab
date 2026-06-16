import { EmojiDisplay } from '../../components/EmojiDisplay';
import { PanelPrueba } from '../../components/PanelPrueba';
import styles from './styles.module.css';

export const PanelEmoji = ({ value, classname }) => {

    return (
        <div className={`${styles.background_panel} ${classname}`}>
            <EmojiDisplay emoji={value} className={styles.emoji} />
            <PanelPrueba numb={value} className={styles.number_panel} label={`Valor actual: ${value}`} />
        </div>
    )
}