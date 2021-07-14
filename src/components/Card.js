import { useState } from "react";

const Card = (props) => {
    const {title, text, children, imgPath, video} = props;
    const [isHovered, onHovered] = useState(false)

    return (
        <>
        <div className="card-container">
            <div className="card" onMouseEnter={() => {onHovered(true)}} onMouseLeave={() => onHovered(false)}>
                <div className={`img-container ${isHovered && 'no-opacity'}`}>
                    { video===false ?
                        (<img alt="none" className={`card-img`} src={imgPath}/>) :
                        (<video className="song-vid" autoplay="autoplay" muted="muted" loop="loop">
                            <source src={imgPath} type="video/mp4"></source>
                        </video>)
                    }
                </div>
                <div className={`letter ${!isHovered ? 'hide' : 'full-opacity'}`}>
                    {`${isHovered}`}
                    <h1>Jo Mamma</h1>
                </div>
            </div>
        </div>
        </>
    );
}

export default Card