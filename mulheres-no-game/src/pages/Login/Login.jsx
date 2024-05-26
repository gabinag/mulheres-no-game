import styles from './Login.module.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.wrap}>
        <div className={styles.container}>
            <h1>Logar</h1>
        </div>
        <form>
            <label>
                <span>E-mail</span>
                <input type="email" name="email" required placeholder="Insira seu e-mail"/>
            </label>
            <label>
            <span>Senha</span>
                <input type="password" name="password" required placeholder="Insira sua senha"/>
            </label>
            <button className={styles.btnForm} onClick={() => navigate('/comecar')}>Login</button>
            <Link to="/cadastro" className={styles.link}>Não possuo uma conta</Link>
        </form>
    </div>
  )
}
