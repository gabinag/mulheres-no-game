import {Fluxos} from '../../../components/Fluxos/Fluxos';
import { useNavigate } from "react-router-dom";

export const EdicaoAudioFluxo = () => {
  const navigate = useNavigate();
  return (
    <div>
        <Fluxos title="Designer de Som - Edição de Audio" 
        paragraph="Bem-vinda ao nosso curso de Edição de Áudio voltado para o desenvolvimento de jogos! Aqui, você irá explorar o fascinante mundo da produção sonora e aprender a editar e manipular efeitos sonoros e diálogos que enriquecem a imersão nos jogos, com professoras incríveis na área."
        nivel1="Como utilizar editores de música - Logic Pro" 
        onNavigateNivel1={() => navigate('/aulaDesenho')}
        nivel2="Ajustando o áudio com o ambiente" 
        nivel3="Como deixar seu áudio mais agradável"
        />
    </div>
  )
}
