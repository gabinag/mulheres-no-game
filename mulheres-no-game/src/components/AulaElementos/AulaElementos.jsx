import style from "./AulaElementos.module.css";

function AulaElementos({ titulo, area, introducao, frameLink, nomeAula, tempo, instrutora }) {
    return (
        <>
            <h1 className={style.title}>{titulo}</h1>
            <h3 className={style.subtitle}>{area}</h3>

            <p className={style.introduction}>{introducao}</p>

            <div className={style.frame}>
                <iframe
                    width="100%"
                    height="315"
                    src={frameLink}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen>
                </iframe>

                <h6 className={style.videoName}>{nomeAula}</h6>
                <div className={style.description}>
                    <small>Tempo de contaúdo:{tempo}</small>
                    <small>Instrutora:{instrutora}</small>
                </div>
            </div>
        </>
    );
}

export default AulaElementos;