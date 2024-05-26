import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../../assets/logonome.png'; 

export const Header = () => {
  return (
    <div className={styles.header}>
        <Link to="/"><img src={logo} alt="Logotipo" /></Link>
        <div className={styles.wrapBtn}>
            <Link to="/login"><button className={styles.btnHome}>Login</button></Link>
            <Link to="/cadastro"><button className={styles.btnHome}>Cadastre-se</button></Link>
        </div>
    </div>
  )
}
