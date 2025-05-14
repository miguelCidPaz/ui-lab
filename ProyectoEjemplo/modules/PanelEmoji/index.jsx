import { EmojiDisplay } from '../../components/EmojiDisplay';
import { PanelPrueba } from '../../components/PanelPrueba';
import styles from './styles.module.css';

export const PanelEmoji = ({data:{value, classname}}) => {

    return(
        <div className={`${styles.background_panel} ${classname}`}>
            <EmojiDisplay data={{emoji: value, className: styles.emoji}} />
            <PanelPrueba data={{numb: value, className: styles.number_panel, label: `Valor actual: ${value}`}} />
        </div>
    )
}