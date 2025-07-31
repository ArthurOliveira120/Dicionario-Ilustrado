import styles from "./Main.module.css";

import { Link } from "react-router";
export function Main({ title, description, img }) {

    const termosCompletos = [
        { path: "/mitose", nome: "Mitose" },
        { path: "/meiose", nome: "Meiose" },
        { path: "/carioteca", nome: "Carioteca" },
        { path: "/cromatina", nome: "Cromatina" },
        { path: "/cromossomo", nome: "Cromossomo" },
        { path: "/cromossomos-homologos", nome: "Cromossomos Homólogos" },
        { path: "/cromatide", nome: "Cromátide" },
        { path: "/cromatides-irmas", nome: "Cromátides Irmãs" },
        { path: "/centromero", nome: "Centrômero" },
        { path: "/centrossomo", nome: "Centrossomo" },
        { path: "/fuso-mitotico-meiotico", nome: "Fuso Mitótico ou Meiótico" },
        { path: "/profase", nome: "Prófase" },
        { path: "/metafase", nome: "Metáfase" },
        { path: "/anafase", nome: "Anáfase" },
        { path: "/telofase", nome: "Telófase" },
        { path: "/citocinese", nome: "Citocinese" }
    ];
    
    return (
        <div>
            <h1>BIOLOGIA</h1>
            <ul>
                {termosCompletos.map((item, index) => (
                    <Link to={item.path} >
                        <li key={index}>{item.nome}</li>
                    </Link>
                ))}
            </ul>
        </div>
    )
}