import { FaPlay } from "react-icons/fa";
import style from "./Card.module.css";

function Card({ name, text, link, color }) {
    const cardStyle = {
        borderColor: color,
        backgroundColor: `${color}33`
    };

    const iconStyle = {
        color: color,
    };

    return (
        <div className={style.card} style={cardStyle}>
            <div>
                <h4 className={style.cardTitle}>{name}</h4>
                <p className={style.cardText}>{text}</p>
            </div>
            <a href={link} className={style.icon} style={iconStyle}><FaPlay /></a>
        </div>
    );
}

export default Card;