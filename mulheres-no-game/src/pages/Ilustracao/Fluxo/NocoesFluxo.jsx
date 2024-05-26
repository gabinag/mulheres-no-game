import {Fluxos} from '../../../components/Fluxos/Fluxos';
import { useNavigate } from "react-router-dom";

export const NocoesFluxo = () => {
  const navigate = useNavigate();
  return (
    <div>
        <Fluxos title="Ilustração - Noções de ilustração" 
        paragraph="Bem-vinda ao nosso curso de Noções de Desenho voltado para o desenvolvimento de jogos! Aqui, você irá explorar o fascinante mundo do desenho e aprender as bases da forma, perspectiva e composição que são essenciais para criar arte visual envolvente para jogos, com professoras incríveis na área."
        nivel1="Como criar o seu portfolio" 
        onNavigateNivel1={() => navigate('/aulaDesenho')}
        nivel2="Ferramentas Auxiliares"
        onNavigateNivel2={() => navigate('/aulaDesenho')}
        nivel3="Teoria Cromática"
        onNavigateNivel3={() => navigate('/aulaDesenho')}
        />
    </div>
  )
}
