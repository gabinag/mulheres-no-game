import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

//pages
import { Home } from './pages/Home/Home';
import { Login } from './pages/Login/Login';
import { Cadastro } from './pages/Cadastro/Cadastro';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
