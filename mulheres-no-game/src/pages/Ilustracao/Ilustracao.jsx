import { AreaEspecifica } from "../../components/AreaEspecifica/AreaEspecifica";
import Card from "../../components/Card/Card";
import style from "./Ilustracao.module.css";

export const Ilustracao = () => {
  return (
    <div>
        <AreaEspecifica 
        title="Ilustração" 
        paragraph="A ilustradora é a artista responsável por criar ilustrações finalizadas que serão usadas para promover o jogo no mercado, como pôsteres, arte de capa, wallpapers, banners e até mesmo o logo do jogo." 
        item1="Noções de desenho" 
        item2="Noções de cores" 
        item3="Pintura Digital" 
        item4="Ferramentas de ilustração"/>
        <section className={style.wrapCards}>
            <Card
                name="Desenho"
                text="Veja sobre o início de uma desenhista"
                color="#0F9BF2"
            />
            <Card
                name="Pintura"
                text="Veja sobre pintura digital "
                color="#E15CF3"
            />
            <Card
                name="Noções"
                text="Veja sobre conceitos básico da ilustração"
                color="#BF4142"
            />
        </section>
    </div>
  )
}
