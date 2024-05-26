import style from "./Comecar.module.css";
import Card from "../../components/Card/Card";
import { Header } from '../../components/Header/Header';

export const Comecar = () => {
    return (
        <main>
            <Header/>
            <h1 className={style.title}>Vamos começar?</h1>
            <h3 className={style.subtitle}>Escolha qual área você tem interesse de se aprofundar e dê um start para a aventura!</h3>

            <section className={style.container}>
                <Card
                    name="Modelagem"
                    text="Veja sobre a modelagem de personagens e cenários"
                    color="#0F9BF2"
                />

                <Card
                    name="Ilustração"
                    text="Veja sobre a modelagem de personagens e cenários"
                    color="#E15CF3"
                />

                <Card
                    name="Desenvolvedora"
                    text="Veja sobre a modelagem de personagens e cenários"
                    color="#8B8B8B"
                />

                <Card
                    name="Designer de som"
                    text="Veja sobre a modelagem de personagens e cenários"
                    color="#BF4142"
                />
            </section>
        </main>
    )
}