import { Link } from 'react-router-dom';
import styles from './HeaderLogado.module.css';
import logo from '../../assets/logonome.png'; 

export const HeaderLogado = () => {
  return (
    <div className={styles.header}>
        <img src={logo} alt="Logotipo" />
        <div className={styles.wrapBtn}>
            <Link to="/comecar" className={styles.guia}><p>Guia de Carreira</p></Link>
            <Link to="/"><button className={styles.btnSair}>Sair</button></Link>
        </div>
    </div>
  )
}