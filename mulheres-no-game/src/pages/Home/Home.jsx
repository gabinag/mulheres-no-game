import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
      <header>
        <p>GameHer</p>
        <Link to="/login"><button>Login</button></Link>
        <Link to="/cadastro"><button>Cadastre-se</button></Link>
      </header>
      <section>
        <h1>Empoderando Mulheres no Mundo dos Jogos</h1>
        <p>Bem-vinda à nossa plataforma, onde empoderamos mulheres a iniciarem sua jornada no emocionante universo do desenvolvimento de jogos.</p>
      </section>
      <section>
        <h2>Nossa motivação</h2>
        <p>A indústria dos jogos é um campo dinâmico e em rápido crescimento, repleto de possibilidades infinitas. No entanto, historicamente, tem sido dominada por homens, e as mulheres frequentemente enfrentam desafios únicos ao ingressarem nesse setor.</p>
        <p>Nossa missão é mudar essa narrativa, proporcionando às mulheres as ferramentas, o conhecimento e o suporte necessários para alcançarem o sucesso.</p>
        <h2>O que é a plataforma?</h2>
        <p>Nossos cursos introdutórios são projetados para quebrar barreiras e criar um ambiente acolhedor e inclusivo para mulheres interessadas no desenvolvimento de jogos.</p>
        <p>Seja você uma iniciante completa ou alguém com alguma experiência, nossos cursos abrangem uma ampla variedade de tópicos, incluindo design de jogos, programação, narrativa e design gráfico. Você aprenderá com profissionais experientes e se conectará com uma comunidade de mulheres que compartilham sua paixão por jogos.</p>
      </section>
      <section>
        <h3>Vamos começar uma nova carreira!</h3>
        <p>Clique para logar e começar os cursos e dar um start na sua carreira!</p>
        <button>Cadastre-se</button>
      </section>
      <section>
        <h4>Ao se inscrever em nossos cursos, você ganhará:</h4>
        <ul>
          <li>Conhecimento Abrangente: Aprenda os fundamentos do desenvolvimento de jogos do zero, incluindo as tecnologias mais recentes e os padrões da indústria.</li>
          <li>Habilidades Práticas: Envolva-se em projetos práticos que permitem aplicar o que você aprendeu e construir seu portfólio.</li>
          <li>Oportunidades de Networking: Conecte-se com outras mulheres na indústria, forme relacionamentos valiosos e encontre oportunidades de mentoria.</li>
          <li>Orientação de Carreira: Receba conselhos e suporte sobre como navegar na indústria dos jogos, desde a busca por empregos até o avanço na carreira.</li>
        </ul>
      </section>
    </div>
  )
}
