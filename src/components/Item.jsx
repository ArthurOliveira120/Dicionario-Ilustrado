import styles from "./Item.module.css";

import { Header } from "./Header";
import { Link } from "react-router";

export function Item({ title, description, img }) {
    return (
        <div className={styles.container}>
            <Header text={title} />
            <div className={styles.content}>
                <p>{description}</p>
                <div className={styles.imgContainer}>
                    <img src={img}></img>
                </div>
            </div>

            <Link to="/">
                <button className={styles.returnButton}>Voltar</button>
            </Link>
        </div>
    )
}