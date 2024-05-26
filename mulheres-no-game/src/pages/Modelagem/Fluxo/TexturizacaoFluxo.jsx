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
            <h1>Modeladora - Texturização</h1>
            <p>Bem-vindo ao nosso curso de Texturização voltado para o desenvolvimento de jogos! Aqui, você irá explorar o fascinante mundo das texturas digitais e aprender a criar superfícies realistas e estilizadas que adicionam profundidade e detalhe aos modelos 3D, com professoras incríveis na área.</p>
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
              <span className={styles.descricao}>Faça personagens realistas</span>
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
              <span className={styles.descricao}>Aplique texturas</span>
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
              <span className={styles.descricao}>Criando criaturas</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
