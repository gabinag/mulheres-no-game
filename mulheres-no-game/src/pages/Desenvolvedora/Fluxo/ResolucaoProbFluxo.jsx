import {Fluxos} from '../../../components/Fluxos/Fluxos';
import { useNavigate } from "react-router-dom";

export const ResolucaoProbFluxo = () => {
  const navigate = useNavigate();
  return (
    <div>
        <Fluxos title="Desenvolvedora - Resolução de problemas" 
        paragraph="Bem-vinda ao nosso curso de Resolução de Problemas voltado para o desenvolvimento de jogos! Aqui, você irá explorar técnicas e estratégias para identificar e solucionar desafios que surgem no processo de criação de jogos, garantindo uma experiência de jogo fluida e sem falhas, com professoras incríveis na área."
        nivel1="Fundamentos da resolução" 
        onNavigateNivel1={() => navigate('/aulaDesenho')}
        nivel2="Garantia de qualidade"
        onNavigateNivel2={() => navigate('/aulaDesenho')}
        nivel3="Correções de bugs"
        onNavigateNivel3={() => navigate('/aulaDesenho')}
        />
    </div>
  )
}
