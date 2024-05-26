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
import { Fluxo } from './pages/Fluxo/Fluxo';
import { Aula } from './pages/Aula/Aula';

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
        <Route path="/fluxo" element={<Fluxo />} />
        <Route path='/aula' element={<Aula />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
