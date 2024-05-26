import { TiArrowSortedDown } from "react-icons/ti";
import AulaElementos from "../../components/AulaElementos/AulaElementos";
import style from "./Aula.module.css";
import { Header } from "../../components/Header/Header";

export const Aula = () => {
    return (
        <>
        <Header />
        <section className={style.container}>
            <AulaElementos
                titulo="Nível 1 - Desenho"
                area="Ilustração"
                introducao="Aprenda técnicas básicas de desenho e como iniciar nos estudos"
                frameLink="https://www.youtube.com/embed/jLTqW353Z6E?si=ArwJ1UpRs7lGJFjw"
                nomeAula="Aula 1: Quais materiais usar"
                tempo="10:00"
                instrutora="Alana Santos"
            />

            <button className={style.btnNext}>
                Next level: nível 2 
                <TiArrowSortedDown />
            </button>
        </section>
        
        </>
    )
}