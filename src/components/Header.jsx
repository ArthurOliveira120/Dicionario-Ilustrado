import styles from "./Header.module.css";

export function Header({ text, msg = false }) {
    return (
        <header className={styles.headerContainer}>
            {text}
            {msg && <p>com tia Malu</p>}
        </header>
    )
}