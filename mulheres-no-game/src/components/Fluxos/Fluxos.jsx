import { HiChevronDoubleRight } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import styles from './Fluxos.module.css';

// eslint-disable-next-line react/prop-types
export const Fluxos = ({title, paragraph, nivel1, nivel2, nivel3, onNavigateNivel1}) => {
  return (
    <div>
        <Header/>
        <div className={styles.wrapHome}>
        <div className={styles.container}>
            <h1>{title}</h1>
            <p>{paragraph}</p>
            <button>Inscreva-se</button>
            <h2>Como começar?</h2>
            <p>A seguir, apresentamos as etapas para aprender sobre o tópico escolhido:</p>
        </div>
       
        <div className={styles.wrapHome} onClick={onNavigateNivel1}>
          <Link to="/" className={styles.link}>
            <div className={styles.containerNivel}>
              <span className={styles.nivel}>Nível 1</span>
                <div className={styles.ajustarIcone}>
                  <HiChevronDoubleRight size={60} />
                </div>
              <span className={styles.descricao}>{nivel1}</span>
            </div>
          </Link>
        </div>
    
        <div className={styles.wrapHome} onClick={onNavigateNivel1}>
          <Link to="/" className={styles.link}>
            <div className={styles.containerNivel}>
              <span className={styles.nivel}>Nível 2</span>
                <div className={styles.ajustarIcone}>
                  <HiChevronDoubleRight size={60} />
                </div>
              <span className={styles.descricao}>{nivel2}</span>
            </div>
          </Link>
        </div>
     
        <div className={styles.wrapHome} onClick={onNavigateNivel1}>
          <Link to="/" className={styles.link}>
            <div className={styles.containerNivel}>
              <span className={styles.nivel}>Nível 3</span>
              <div className={styles.ajustarIcone}>
                  <HiChevronDoubleRight size={60} />
                </div>
              <span className={styles.descricao}>{nivel3}</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
