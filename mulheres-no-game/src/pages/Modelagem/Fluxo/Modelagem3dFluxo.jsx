import {Fluxos} from '../../../components/Fluxos/Fluxos';
import { useNavigate } from "react-router-dom";

export const Modelagem3dFluxo = () => {
  const navigate = useNavigate();
  return (
    <div>
        <Fluxos 
        title="Modeladora - Modelagem 3D" 
        paragraph="Bem-vinda ao nosso curso de Modelagem 3D voltado para o desenvolvimento de jogos! Aqui, você irá explorar o fascinante mundo da modelagem tridimensional e aprender a criar personagens, cenários e objetos detalhados que dão vida aos jogos, com professoras incríveis na área." 
        nivel1="Fundamentos da modelagem 3D" 
        onNavigateNivel1={() => navigate('/aulaDesenho')}
        nivel2="Mapas e texturização"
        nivel3="Configuração de cena"
        />
    </div>
  )
}
