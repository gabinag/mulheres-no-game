import {Fluxos} from '../../../components/Fluxos/Fluxos';
import { useNavigate } from "react-router-dom";

export const PinturaFluxo = () => {
  const navigate = useNavigate();
  return (
    <div>
        <Fluxos title="Ilustração - Pintura" 
        paragraph="Bem-vinda ao nosso curso de Pintura Digital voltado para o desenvolvimento de jogos! Aqui, você irá explorar o fascinante mundo da arte digital e aprender a criar ilustrações, conceitos de personagens e cenários que enriquecem a narrativa visual dos jogos, com professoras incríveis na área."
        nivel1="Fundamentos de design" 
        onNavigateNivel1={() => navigate('/aulaDesenho')}
        nivel2="Pintando personagens"
        onNavigateNivel2={() => navigate('/aulaDesenho')}
        nivel3="Photobashing vs Matte Painting."
        onNavigateNivel3={() => navigate('/aulaDesenho')}
        />
    </div>
  )
}
