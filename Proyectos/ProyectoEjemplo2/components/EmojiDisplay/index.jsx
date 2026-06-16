import styles from './styles.module.css';

export const EmojiDisplay = ({ emoji, className }) => {
    const emojiMap = ['😐', '🙂', '😃', '😁', '🤩', '🚀'];

    const getEmoji = (value) => {
        if (value < 0) return '❌';
        if (value > 5) return '💥';
        const index = Math.min(value, emojiMap.length - 1);
        return emojiMap[index];
    };

    return (
        <div className={styles.background_emoji}>
            <span role="img" aria-label="emoji" className={`${styles.span_emoji} ${className}`}>
                <p>{getEmoji(emoji)}</p>
            </span>
        </div>
    );
}