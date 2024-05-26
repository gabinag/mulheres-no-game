import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

//pages
import { Home } from './pages/Home/Home';
import { Login } from './pages/Login/Login';
import { Cadastro } from './pages/Cadastro/Cadastro';
<<<<<<< HEAD
import { Ilustracao } from './pages/Ilustracao/Ilustracao';
=======
import { Comecar } from './pages/Comecar/Comecar';
>>>>>>> 4a08d15d8202e40adf9c02865391814ca2940d09

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
<<<<<<< HEAD
        <Route path="/comecar/ilustracao" element={<Ilustracao />} />
=======
        <Route path='/comecar' element={<Comecar />} />
>>>>>>> 4a08d15d8202e40adf9c02865391814ca2940d09
      </Routes>
    </BrowserRouter>
  )
}

export default App
