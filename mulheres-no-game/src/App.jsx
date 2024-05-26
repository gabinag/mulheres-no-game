import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

//pages
import { Home } from './pages/Home/Home';
import { Login } from './pages/Login/Login';
import { Cadastro } from './pages/Cadastro/Cadastro';
import { Ilustracao } from './pages/Ilustracao/Ilustracao';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/" element={<Ilustracao />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
