import { useState } from "react";

const Card = (props) => {
    const {title, text, children} = props;
    const [isHovered, onHovered] = useState(false)

    return (
        <>
        <div className="card-container">
            <div className="card" onMouseEnter={() => {onHovered(true)}} onMouseLeave={() => onHovered(false)}>
                <h2 className={`${isHovered && 'hide'}`}>{title}</h2>
                <img/>
                <p className={`${!isHovered && 'hide'}`}>{`${isHovered}`}</p>
            </div>
        </div>
        </>
    );
}

export default Card