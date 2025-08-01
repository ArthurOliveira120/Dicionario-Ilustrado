import styles from "./Main.module.css";

import { Header } from "./Header";

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
        <>
            <div className={styles.container}>
                <Header text="Biologia" msg="true" />
                <h2>Dicionário Ilustrado</h2>
                <h4>Índice</h4>
                <div className={styles.contentList}>
                    <ul>
                        {termosCompletos.map((item, index) => (
                            <Link key={index} to={item.path} className={styles.link}>
                                <li>{item.nome}</li>
                            </Link>
                        ))}
                    </ul>
                </div>
                <footer className={styles.footerAlunos}>
                    <div className={styles.aluno}>
                        <div className={styles.imgContainer}>
                            <img src="src/assets/reco.jpg"></img>
                        </div>
                        <h4>Arthur Oliveira Marinho</h4>
                    </div>
                    <div className={styles.aluno}>
                        <div className={styles.imgContainer}>
                            <img src="src/assets/joao.jpg"></img>
                        </div>
                        <h4>Joao maria de lima pereira neto</h4>
                    </div>
                    <div className={styles.aluno}>
                        <div className={styles.imgContainer}>
                            <img src="src/assets/yurai.jpg"></img>
                        </div>
                        <h4>Yuri Santos Gonçalves</h4>
                    </div>
                </footer>
            </div>
        </>
    )
}