// import { HiChevronDown } from "react-icons/hi";
import { HiChevronDoubleRight } from "react-icons/hi";
import { Link } from 'react-router-dom';
// import { AreaEspecifica } from "../../components/AreaEspecifica/AreaEspecifica";
import { Header } from '../../components/Header/Header';
import styles from '../Fluxo/Fluxo.module.css';

export const Fluxo = () => {
  return (
    <div>
        <Header/>
        <div className={styles.wrapHome}>
        <div className={styles.container}>
            <h1>Ilustração - Desenho</h1>
            <p>Bem-vinda ao nosso curso de desenho voltado para o desenvolvimento de jogos! Aqui, você irá explorar o fascinante mundo da arte digital e aprender a criar personagens, cenários e elementos visuais que dão vida aos jogos, com professoras incríveis na área.</p>
            <button>Inscreva-se</button>
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
