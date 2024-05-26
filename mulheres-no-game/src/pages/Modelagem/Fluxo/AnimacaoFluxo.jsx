import { HiChevronDoubleRight } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { Header } from '../../../components/Header/Header';
import styles from '../../Fluxo/Fluxo.module.css';

export const Fluxo = () => {

  return (
    <div>
        <Header/>
        <div className={styles.wrapHome}>
        <div className={styles.container}>
            <h1>Modeladora - Animação</h1>
            <p>Bem-vinda ao nosso curso de Animação voltado para o desenvolvimento de jogos! Aqui, você irá explorar o fascinante mundo da animação digital e aprender a dar movimento e vida aos personagens e elementos visuais dos jogos, com professoras incríveis na área.</p>
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
              <span className={styles.descricao}>Introdução ao Maya e animações individuais</span>
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
              <span className={styles.descricao}>Animação dos elementos da interface do usuário (IU)</span>
            </div>
          </Link>
        </div>
     
        
      </div>
    </div>
  )
}
