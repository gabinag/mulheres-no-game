import { AreaEspecifica } from "../../components/AreaEspecifica/AreaEspecifica";
import Card from "../../components/Card/Card";
import styles from "../Ilustracao/Ilustracao.module.css"

export const Modelagem = () => {
  return (

    <div>
        <AreaEspecifica 
        title="Modeladora de Jogos" 
        paragraph="A modeladora de jogos é a profissional responsável por criar os modelos 3D dos personagens, ambientes e objetos que compõem um jogo eletrônico. Ela trabalha em conjunto com os outros membros da equipe de desenvolvimento para garantir que os modelos sejam compatíveis com o motor de jogo e atendam às expectativas." 
        item1="Modelagem 3D: Blender, Maya, 3ds Max" 
        item2="Texturização: Photoshop, Substance Painter" 
        item3="Animação: Maya, 3ds Max" 
        item4="Conhecimento de motores de jogo: Unity, Unreal Engine, Godot"/>
        <section className={styles.wrapCards}>
            <Card
                name="Modelagem 3D"
                text="Veja sobre Blender e Maya"
                color="#0F9BF2"
            />
            <Card
                name="Texturização"
                text="Aprenda a utilizar o Photoshop"
                color="#E15CF3"
            />
            <Card
                name="Animação"
                text="Veja sobre Maya, 3ds Max"
                color="#BF4142"
            />
        </section>
    </div>
  )
}
