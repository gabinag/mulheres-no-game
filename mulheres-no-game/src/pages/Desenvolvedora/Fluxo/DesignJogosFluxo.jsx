import {Fluxos} from '../../../components/Fluxos/Fluxos';
import { useNavigate } from "react-router-dom";

export const DesignJogosFluxo = () => {
  const navigate = useNavigate();
  return (
    <div>
        <Fluxos title="Desenvolvedora - Design de Jogos" 
        paragraph="Bem-vinda ao nosso curso de Design de Jogos! Aqui, você irá explorar o fascinante mundo do design e aprender a criar regras, níveis e experiências de jogo que capturam a imaginação dos jogadores, com professoras incríveis na área"
        nivel1="Introdução ao mercado de jogos" 
        onNavigateNivel1={() => navigate('/aulaDesenho')}
        nivel2="Jogabilidade e mecância" 
        nivel3="Design de níveis e narrativa"
        />
    </div>
  )
}
