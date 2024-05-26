import styles from './AreaEspecifica.module.css';
import {Header} from '../../components/Header/Header';

// eslint-disable-next-line react/prop-types
export const AreaEspecifica = ({title, paragraph, item1, item2, item3, item4}) => {
  return (
    <div>
        <Header/>
        <div className={styles.container}>
            <h1>{title}</h1>
            <p>{paragraph}</p>
            <button>Inscreva-se</button>
            <div className={styles.wrapHabilidades}>
                <h2>Habilidades que você irá adquirir</h2>
                <ul>
                    <li>{item1}</li>
                    <li>{item2}</li>
                    <li>{item3}</li>
                    <li>{item4}</li>
                </ul>
            </div>
        </div>
    </div>
  )
}
