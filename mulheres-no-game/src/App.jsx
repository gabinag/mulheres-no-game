import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import { Home } from './pages/Home/Home';
import { Login } from './pages/Login/Login';
import { Cadastro } from './pages/Cadastro/Cadastro';
import { Ilustracao } from './pages/Ilustracao/Ilustracao';
import { Comecar } from './pages/Comecar/Comecar';
import { Modelagem } from './pages/Modelagem/Modelagem';
import { Desenvolvedora } from './pages/Desenvolvedora/Desenvolvedora';
import { DesignerSom } from './pages/DesignerSom/DesignerSom';
import { AulaDesenho } from './pages/Ilustracao/AulaElementos/AulaDesenho';
import { DesenhoFluxo } from './pages/Ilustracao/Fluxo/DesenhoFluxo';
import { NocoesFluxo } from './pages/Ilustracao/Fluxo/NocoesFluxo';
import { PinturaFluxo } from './pages/Ilustracao/Fluxo/PinturaFluxo';
import { AnimacaoFluxo } from './pages/Modelagem/Fluxo/AnimacaoFluxo';
import { Modelagem3dFluxo } from './pages/Modelagem/Fluxo/Modelagem3dFluxo';
import { TexturizacaoFluxo } from './pages/Modelagem/Fluxo/TexturizacaoFluxo';
import { ProgramacaoFluxo } from './pages/Desenvolvedora/Fluxo/ProgramcaoFluxo';
import { DesignJogosFluxo } from './pages/Desenvolvedora/Fluxo/DesignJogosFluxo';
import { ResolucaoProbFluxo } from './pages/Desenvolvedora/Fluxo/ResolucaoProbFluxo';
import { ComposicaoMusical } from './pages/DesignerSom/Fluxo/ComposicaoMusicalFluxo';
import { EdicaoAudioFluxo } from './pages/DesignerSom/Fluxo/EdicaoAudioFluxo';
import { MixagemFluxo } from './pages/DesignerSom/Fluxo/MixagemFluxo';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path='/comecar' element={<Comecar />} />
        <Route path="/ilustracao" element={<Ilustracao />} />
        <Route path="/modelagem" element={<Modelagem />} />
        <Route path="/desenvolvedora" element={<Desenvolvedora />} />
        <Route path="/designerSom" element={<DesignerSom />} />
        <Route path='/aulaDesenho' element={<AulaDesenho />} />
        <Route path='/desenhoFluxo' element={<DesenhoFluxo />}/>
        <Route path='/pinturaFluxo' element={<PinturaFluxo />}/>
        <Route path='/nocoesFluxo' element={<NocoesFluxo />}/>
        <Route path='/modelagemFluxo' element={<Modelagem3dFluxo />}/>
        <Route path='/animacaoFluxo' element={<AnimacaoFluxo />}/>
        <Route path='/texturizacaoFluxo' element={<TexturizacaoFluxo />}/>
        <Route path='/programacaoFLuxo' element={<ProgramacaoFluxo />}/>
        <Route path='/designJogosFluxo' element={<DesignJogosFluxo />}/>
        <Route path='/resolucaoProbFluxo' element={<ResolucaoProbFluxo />}/>
        <Route path='/composicaoMusicalFluxo' element={<ComposicaoMusical />}/>
        <Route path='/edicaoAudioFluxo' element={<EdicaoAudioFluxo />}/>
        <Route path='/mixagemFluxo' element={<MixagemFluxo />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
