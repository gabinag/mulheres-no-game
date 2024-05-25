import styles from '../Login/Login.module.css';
import { Link } from 'react-router-dom';

export const Cadastro = () => {
  return (
    <div className={styles.wrap}>
        <div className={styles.container}>
            <h1>Cadastre-se</h1>
        </div>
        <form>
            <label>
                <span>Nome completo</span>
                <input type="text" name="nome" required placeholder="Insira seu nome"/>
            </label>
            <label>
                <span>E-mail</span>
                <input type="email" name="email" required placeholder="Insira seu e-mail"/>
            </label>
            <label>
            <span>Senha</span>
                <input type="password" name="password" required placeholder="Insira sua senha"/>
            </label>
            <button>Cadastrar-se</button>
            <Link to="/" className={styles.link}>Já possuo uma conta</Link>
        </form>
    </div>
  )
}