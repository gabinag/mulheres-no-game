import {Fluxos} from '../../../components/Fluxos/Fluxos';
import { useNavigate } from "react-router-dom";

export const TexturizacaoFluxo = () => {
  const navigate = useNavigate();
  return (
    <div>
        <Fluxos 
        title="Modeladora - Texturização" 
        paragraph="Bem-vindo ao nosso curso de Texturização voltado para o desenvolvimento de jogos! Aqui, você irá explorar o fascinante mundo das texturas digitais e aprender a criar superfícies realistas e estilizadas que adicionam profundidade e detalhe aos modelos 3D, com professoras incríveis na área." nivel1="Faça personagens realistas" 
        onNavigateNivel1={() => navigate('/aulaDesenho')}
        nivel2="Aplique texturas"
        onNavigateNivel2={() => navigate('/aulaDesenho')}
        nivel3="Criando criaturas"
        onNavigateNivel3={() => navigate('/aulaDesenho')}
        />
    </div>
  )
}
