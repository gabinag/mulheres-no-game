import styles from './AreaEspecifica.module.css';
import {HeaderLogado} from '../../components/HeaderLogado/HeaderLogado';

// eslint-disable-next-line react/prop-types
export const AreaEspecifica = ({title, paragraph, item1, item2, item3, item4}) => {
  return (
    <div>
        <HeaderLogado/>
        <div className={styles.container}>
            <h1>{title}</h1>
            <p>{paragraph}</p>
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
