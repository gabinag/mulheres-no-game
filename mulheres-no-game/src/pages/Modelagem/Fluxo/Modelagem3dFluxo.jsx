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
            <h1>Modeladora - Modelagem 3D</h1>
            <p>Bem-vinda ao nosso curso de Modelagem 3D voltado para o desenvolvimento de jogos! Aqui, você irá explorar o fascinante mundo da modelagem tridimensional e aprender a criar personagens, cenários e objetos detalhados que dão vida aos jogos, com professoras incríveis na área.</p>
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
              <span className={styles.descricao}>Fundamentos da modelagem 3D</span>
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
              <span className={styles.descricao}>Mapas e texturização</span>
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
              <span className={styles.descricao}>Configuração de cena</span>
            </div>
          </Link>
        </div>
        <div className={styles.wrapHome}>
          <Link to="/" className={styles.link}>
            <div className={styles.containerNivel}>
              <span className={styles.nivel}>Nível 4</span>
              <div className={styles.ajustarIcone}>
                  <HiChevronDoubleRight size={60} />
                </div>
              <span className={styles.descricao}>Finalização</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
