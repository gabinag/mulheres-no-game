import {Fluxos} from '../../../components/Fluxos/Fluxos';
import { useNavigate } from "react-router-dom";

export const ProgramacaoFluxo = () => {
  const navigate = useNavigate();
  return (
    <div>
        <Fluxos title="Desenvolvedora - Programação" 
        paragraph="Bem-vinda ao nosso curso de Programação voltado para o desenvolvimento de jogos! Aqui, você irá explorar o fascinante mundo da codificação e aprender a criar mecânicas, sistemas e funcionalidades que tornam os jogos interativos e divertidos, com professoras incríveis na área."
        nivel1="Lógica de programação" 
        onNavigateNivel1={() => navigate('/aulaDesenho')}
        nivel2="Mecânicas na programação"
        nivel3="Jogabilidade e técnicas"
        />
    </div>
  )
}
