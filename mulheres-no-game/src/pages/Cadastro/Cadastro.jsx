import styles from '../Cadastro/Cadastro.module.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logocompleta.png'; 
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../services/firebaseConfig';

export const Cadastro = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();

  function handleSignUp(e) { 
    e.preventDefault();
    createUserWithEmailAndPassword(email, password)
      .then(() => {
        // Redireciona para a página de login após o cadastro ser concluído
        navigate('/login');
      })
      .catch(error => {
        console.error('Erro ao criar usuário:', error);
      });
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
          <img src={logo} alt="Logo" className={styles.logo} />
      </div>
      <form className={styles.form}>
      <h1>Cadastro</h1>
        <label>
          <span>Nome completo</span>
          <input
            type="text"
            name="nome"
            required
            placeholder="Insira seu nome"
          />
        </label>
        <label>
          <span>E-mail</span>
          <input
            type="email"
            name="email"
            required
            placeholder="Insira seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>Senha</span>
          <input
            type="password"
            name="password"
            required
            placeholder="Insira sua senha"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button onClick={handleSignUp} className={styles.btnForm}>Cadastrar-se</button>

        {/* Aplicando a mesma classe do botão de login */}
        <Link to="/login" className={styles.link}>
          Já possuo uma conta
        </Link>
        {/* Botão de voltar para a home */}
        <Link to="/" className={styles.backButton}>
          Voltar para home
        </Link>
      </form>
    </div>
  );
};
