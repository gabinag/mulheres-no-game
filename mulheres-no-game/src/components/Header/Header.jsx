import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <div className={styles.header}>
        <p>Academy of Goddesses</p>
        <div className={styles.wrapBtn}>
            <Link to="/login"><button className={styles.btnHome}>Login</button></Link>
            <Link to="/cadastro"><button className={styles.btnHome}>Cadastre-se</button></Link>
        </div>
    </div>
  )
}
