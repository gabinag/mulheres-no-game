import {Fluxos} from '../../../components/Fluxos/Fluxos';
import { useNavigate } from "react-router-dom";

export const DesenhoFluxo = () => {
  const navigate = useNavigate();
  return (
    <div>
        <Fluxos title="Ilustração - Desenho" 
        paragraph="Bem-vinda ao nosso curso de desenho voltado para o desenvolvimento de jogos! Aqui, você irá explorar o fascinante mundo da arte digital e aprender a criar personagens, cenários e elementos visuais que dão vida aos jogos, com professoras incríveis na área."
        nivel1="Comece com a base dos desenhos" 
        onNavigateNivel1={() => navigate('/aulaDesenho')}
        nivel2="Ângulos e dimensões" 
        nivel3="Desenhos mais realistas"
        />
    </div>
  )
}
