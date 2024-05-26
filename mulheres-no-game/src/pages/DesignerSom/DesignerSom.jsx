import { AreaEspecifica } from "../../components/AreaEspecifica/AreaEspecifica";
import Card from "../../components/Card/Card";
import styles from "../Ilustracao/Ilustracao.module.css"

export const DesignerSom = () => {
  return (

    <div>
        <AreaEspecifica 
        title="Designer de Som" 
        paragraph="A designer de som de jogos é a profissional responsável por criar os sons e a música de um jogo eletrônico. Ela trabalha em conjunto com os outros membros da equipe de desenvolvimento para garantir que o som esteja integrado à jogabilidade e à narrativa do jogo e transmita as emoções e sensações desejadas."
        item1="Edição de áudio: Logic Pro, Ableton Live, FL Studio"  
        item2="Sound design: Criação de sons e efeitos sonoros" 
        item3="Composição musical: Criação de músicas e trilhas sonoras" 
        item4="Mixagem e masterização: equilibrar os diferentes elementos do som e finalização"/>
        <section className={styles.wrapCards}>
            <Card
                name="Edição de áudio"
                text="Veja sobre Logic Pro, Ableton Live, FL Studio"
                color="#0F9BF2"
            />
            <Card
                name="Composição musical"
                text="Criação de músicas e trilhas sonoras"
                color="#E15CF3"
            />
            <Card
                name="Mixagem e masterização"
                text="equilibrar os elementos do som e finalização"
                color="#BF4142"
            />
        </section>
    </div>
  )
}
