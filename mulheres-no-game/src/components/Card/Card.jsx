import { FaPlay } from "react-icons/fa";
import style from "./Card.module.css";

// eslint-disable-next-line react/prop-types
function Card({ name, text, link, color, onNavigate }) {
    const cardStyle = {
        borderColor: color,
        backgroundColor: `${color}33`
    };

    const iconStyle = {
        color: color,
    };

    return (
        <div className={style.card} style={cardStyle} onClick={onNavigate}>
            <div>
                <h4 className={style.cardTitle}>{name}</h4>
                <p className={style.cardText}>{text}</p>
            </div>
            <a href={link} className={style.icon} style={iconStyle}><FaPlay /></a>
        </div>

    );
}

export default Card;