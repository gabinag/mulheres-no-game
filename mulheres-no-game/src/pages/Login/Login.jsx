import React from 'react';
import styles from './Login.module.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logocompleta.png'; // Caminho relativo correto

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    return console.log(user);
  }

  console.log(styles);

  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <h1>
          {/* <img src={logo} alt="Logo" className={styles.logo} /> */}
        </h1>
      </div>

      <form className={styles.form}>
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
        <button onClick={handleSignIn} className={styles.btnForm}>
          Login
        </button>
        <Link to="/cadastro" className={styles.link}>
          Não possuo uma conta
        </Link>
        <Link to="/" className={styles.backButton}>
          Voltar para a Home
        </Link>
      </form>
    </div>
  );
};
