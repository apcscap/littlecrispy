import { useState } from "react";

const Card = (props) => {
    const {title, text, children, imgPath} = props;
    const [isHovered, onHovered] = useState(false)

    return (
        <>
        <div className="card-container">
            <div className="card" onMouseEnter={() => {onHovered(true)}} onMouseLeave={() => onHovered(false)}>
                <div className={`img-container ${isHovered && 'no-opacity'}`}>
                    <img alt="none" className={`card-img`} src={imgPath}/>
                </div>
                <p className={`letter ${!isHovered ? 'hide' : 'full-opacity'}`}>{`${isHovered}`}</p>
            </div>
        </div>
        </>
    );
}

export default Card