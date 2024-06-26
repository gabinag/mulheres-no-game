import {Fluxos} from '../../../components/Fluxos/Fluxos';
import { useNavigate } from "react-router-dom";

export const MixagemFluxo = () => {
  const navigate = useNavigate();
  return (
    <div>
        <Fluxos title="Designer de Som - Mixagem " 
        paragraph="Bem-vinda ao nosso curso de Mixagem e Masterização voltado para o desenvolvimento de jogos! Aqui, você irá explorar o fascinante mundo da pós-produção de áudio e aprender a misturar e masterizar trilhas sonoras e efeitos sonoros para criar uma experiência auditiva equilibrada e imersiva, com professoras incríveis na área."
        nivel1="Fundamentos da mixagem" 
        onNavigateNivel1={() => navigate('/aulaDesenho')}
        nivel2="Mixers para se inspirar"
        nivel3="Como padrizar o mix com o ambiente"
        />
    </div>
  )
}
