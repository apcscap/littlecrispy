import { useState } from "react";
import sage from '../sage-wallpaper.png'
const Card = (props) => {
    const {title, text, children} = props;
    const [isHovered, onHovered] = useState(false)

    return (
        <>
        <div className="card-container">
            <div className="card" onMouseEnter={() => {onHovered(true)}} onMouseLeave={() => onHovered(false)}>
                <div className={`img-container ${isHovered && 'no-opacity'}`}>
                    <img className={`card-img`} src={sage}/>
                </div>
                <p className={`letter ${!isHovered ? 'hide' : 'full-opacity'}`}>{`${isHovered}`}</p>
            </div>
        </div>
        </>
    );
}

export default Card