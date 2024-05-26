import { HiChevronDown } from "react-icons/hi";
import { HiChevronDoubleRight } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { AreaEspecifica } from "../../components/AreaEspecifica/AreaEspecifica";
import { Header } from '../../components/Header/Header';
import styles from '../Fluxo/Fluxo.module.css';

export const Fluxo = () => {
  return (
    <div>
        <Header/>
        <div className={styles.wrap}>
        <div className={styles.container}>
            <h1>Ilustração - Desenho</h1>
            <h2>Como começar?</h2>
            <p>A seguir, apresentamos as etapas para aprender sobre o tópico escolhido:</p>
        </div>
       
        <div className={styles.wrapHome}>
          <Link to="/" className={styles.link}>
            <div className={styles.containerNivel}>
              <span className={styles.nivel}>Nível 1</span>
                <div className={styles.ajustarIcone}>
                  <HiChevronDoubleRight size={60} />
                </div>
              <span className={styles.descricao}>Comece com a base dos desenhos</span>
            </div>
          </Link>
        </div>
    
        <div className={styles.wrapHome}>
          <Link to="/" className={styles.link}>
            <div className={styles.containerNivel}>
              <span className={styles.nivel}>Nível 2</span>
                <div className={styles.ajustarIcone}>
                  <HiChevronDoubleRight size={60} />
                </div>
              <span className={styles.descricao}>Comece com a base dos desenhos</span>
            </div>
          </Link>
        </div>
     
        <div className={styles.wrapHome}>
          <Link to="/" className={styles.link}>
            <div className={styles.containerNivel}>
              <span className={styles.nivel}>Nível 3</span>
              <div className={styles.ajustarIcone}>
                  <HiChevronDoubleRight size={60} />
                </div>
              <span className={styles.descricao}>Comece com a base dos desenhos</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
