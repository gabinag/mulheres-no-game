import React from 'react';
import styles from './Login.module.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logocompleta.png'; // Caminho relativo correto

export const Login = () => {
  console.log(styles); // Verifique se os estilos estão sendo importados corretamente

  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <h1>
          <img src={logo} alt="Logo" className={styles.logo} />
        </h1>
      </div>

      <form className={styles.form}>
        <label>
          <span>E-mail</span>
          <input type="email" name="email" required placeholder="Insira seu e-mail"/>
        </label>
        <label>
          <span>Senha</span>
          <input type="password" name="password" required placeholder="Insira sua senha"/>
        </label>
        <button className={styles.btnForm}>Login</button>
        <Link to="/cadastro" className={styles.link}>Não possuo uma conta</Link>
        <Link to="/" className={styles.backButton}>Voltar para a Home</Link>
      </form>
    </div>
  );
};
