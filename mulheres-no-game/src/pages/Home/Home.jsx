import { Link } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import styles from './Home.module.css';

export const Home = () => {
  return (
    <div>
      <Header/>
      <section className={styles.banner}>
        <div className={styles.contentBanner}>
          <h1>Empoderando Mulheres no Mundo dos Jogos</h1>
          <p>Bem-vinda à nossa plataforma, onde empoderamos mulheres a iniciarem sua jornada no emocionante universo do desenvolvimento de jogos.</p>
        </div>
      </section>
      <div className={styles.wrapHome}>
        <section>
          <h2>Nossa motivação</h2>
          <p>A indústria dos jogos é um campo dinâmico e em rápido crescimento, repleto de possibilidades infinitas. No entanto, historicamente, tem sido dominada por homens, e as mulheres frequentemente enfrentam desafios únicos ao ingressarem nesse setor.</p>
          <p className={styles.textMotivacao}>Nossa missão é mudar essa narrativa, proporcionando às mulheres as ferramentas, o conhecimento e o suporte necessários para alcançarem o sucesso.</p>
          <h2>O que é a plataforma?</h2>
          <p className={styles.textPlataforma}>Nossos cursos introdutórios são projetados para quebrar barreiras e criar um ambiente acolhedor e inclusivo para mulheres interessadas no desenvolvimento de jogos.</p>
          <p>Seja você uma iniciante completa ou alguém com alguma experiência, nossos cursos abrangem uma ampla variedade de tópicos, incluindo design de jogos, programação, narrativa e design gráfico. Você aprenderá com profissionais experientes e se conectará com uma comunidade de mulheres que compartilham sua paixão por jogos.</p>
        </section>
      </div>
        <section className={styles.ctaCadastro}>
          <h3>Vamos começar uma <br />nova carreira!</h3>
          <div className={styles.wrapCta}>
            <p>Clique para logar e começar os cursos e dar um start na sua carreira!</p>
            <Link to="/cadastro"><button className={styles.btnHome}>Cadastre-se</button></Link>
          </div>
        </section>
      <div className={styles.wrapHome}>
        <section className={styles.container}>
          <h4>Ao se inscrever em nossos cursos, você ganhará:</h4>
          <ul>
            <li><strong>Conhecimento Abrangente:</strong> Aprenda os fundamentos do desenvolvimento de jogos do zero, incluindo as tecnologias mais recentes e os padrões da indústria.</li>
            <li><strong>Habilidades Práticas:</strong> Envolva-se em projetos práticos que permitem aplicar o que você aprendeu e construir seu portfólio.</li>
            <li><strong>Oportunidades de Networking:</strong> Conecte-se com outras mulheres na indústria, forme relacionamentos valiosos e encontre oportunidades de mentoria.</li>
            <li><strong>Orientação de Carreira:</strong> Receba conselhos e suporte sobre como navegar na indústria dos jogos, desde a busca por empregos até o avanço na carreira.</li>
          </ul>
        </section>
      </div>
    </div>
  )
}
