import style from './AulaComponente.module.css';
import { HeaderLogado } from "../../components/HeaderLogado/HeaderLogado";
import { TiArrowSortedDown } from "react-icons/ti";

// eslint-disable-next-line react/prop-types
export const AulaComponente = ({ titulo, area, introducao, frameLink, nomeAula, tempo, instrutora }) => {
    return (
        <>
        <HeaderLogado />
        <section className={style.container}>
            <h1 className={style.title}>{titulo}</h1>
            <h3 className={style.subtitle}>{area}</h3>

            <p className={style.introduction}>{introducao}</p>

            <div className={style.frame}>
                <iframe
                    width="100%"
                    height="315"
                    src={frameLink}
                    frameBorder="0"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen>
                </iframe>

                <h6 className={style.videoName}>{nomeAula}</h6>
                <div className={style.description}>
                    <small>Tempo de contaúdo:{tempo}</small>
                    <small>Instrutora:{instrutora}</small>
                </div>
            </div>
            <button className={style.btnNext}>
                Next level: nível 2 
                <TiArrowSortedDown />
            </button>
        </section>
        </>
    );
}
