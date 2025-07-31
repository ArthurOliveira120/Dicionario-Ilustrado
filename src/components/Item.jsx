import styles from "./Main.module.css";

export function Item({ title, description, img }) {
    return (
        <div>
            <h1>{title}</h1>
            <span>{description}</span>
            <img src={img}></img>
        </div>
    )
}