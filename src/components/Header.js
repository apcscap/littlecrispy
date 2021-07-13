import { useState } from 'react';

const Header = () => {
    const [mousePos, setMousePos] = useState({left: 0, top: 0})
    
    const handleMouseMove = (e) => {
        setMousePos({left: e.nativeEvent.offsetX, top: e.nativeEvent.offsetY})
        e.currentTarget.style.backgroundPositionX = -150 -(mousePos.left)*0.05 + "px";
        e.currentTarget.style.backgroundPositionY = -100 -(mousePos.top)*0.01 + "px";
    }

    return (
        <>
        <h1 onMouseMove={handleMouseMove} className="sage-title">Courtney "Sage" Wong</h1>
        <h2 className="title-center">THE SMART ONE</h2>
        </>
    )
}

export default Header