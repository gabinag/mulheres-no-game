import { AreaEspecifica } from "../../components/AreaEspecifica/AreaEspecifica";
import Card from "../../components/Card/Card";
import styles from "../Ilustracao/Ilustracao.module.css"
import { useNavigate } from "react-router-dom";

export const Desenvolvedora = () => {
    const navigate = useNavigate();
  return (

    <div>
        <AreaEspecifica 
        title="Desenvolvedora de Jogos" 
        paragraph="A desenvolvedora de jogos é a profissional responsável por criar e dar vida aos jogos eletrônicos. Ela atua em todas as etapas do desenvolvimento, desde a concepção da ideia até o lançamento final do produto." 
        item1="Programação: C++, C#, Java, Python, JavaScript" 
        item2="Design de jogos: Mecânicas de jogo, narrativa, design de níveis, experiência do usuário" 
        item3="Matemática: Algoritmos, trigonometria, física" 
        item4="Resolução de problemas: Lógica, capacidade de trabalhar em equipe"/>
        <section className={styles.wrapCards}>
            <Card
                name="Programação"
                text="Aprenda a linguagem mais utilizada no mercado"
                color="#0F9BF2"
                onNavigate={() => navigate('/programacaoFLuxo')}
            />
            <Card
                name="Design de jogos"
                text="Veja sobre os princípios do design de jogos"
                color="#E15CF3"
                onNavigate={() => navigate('/designJogosFluxo')}
            />
            <Card
                name="Resolução de problemas"
                text="Pratique e desenvolva projetos para o seu portfólio"
                color="#BF4142"
                onNavigate={() => navigate('/resolucaoProbFluxo')}
            />
        </section>
    </div>
  )
}
