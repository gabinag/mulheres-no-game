import {Fluxos} from '../../../components/Fluxos/Fluxos';
import { useNavigate } from "react-router-dom";

export const AnimacaoFluxo = () => {
  const navigate = useNavigate();
  return (
    <div>
        <Fluxos title="Modeladora - Animação" 
        paragraph="Bem-vinda ao nosso curso de Animação voltado para o desenvolvimento de jogos! Aqui, você irá explorar o fascinante mundo da animação digital e aprender a dar movimento e vida aos personagens e elementos visuais dos jogos, com professoras incríveis na área."
        nivel1="Introdução ao Maya e animações individuais" 
        onNavigateNivel1={() => navigate('/aulaDesenho')}
        nivel2="Animação dos elementos da interface do usuário (IU)"
        nivel3="Exercícios práticos de animação"
        />
    </div>
  )
}
