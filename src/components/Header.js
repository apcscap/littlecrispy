import { useState } from 'react';

const Header = () => {
    const [mouseChange, setMouseChange] = useState({left: 0, top: 0})
    
    const handleMouseMove = (e) => {
        // update mouseChange with the shift in the mouse
        setMouseChange({left: e.nativeEvent.offsetX, top: e.nativeEvent.offsetY})
        // e.currentTarget is the element that is calling handleMouseMove
        // update the position of the image with a shift based on the mouseChange
        e.currentTarget.style.backgroundPositionX = -150 -(mouseChange.left)*0.05 + "px";
        e.currentTarget.style.backgroundPositionY = -100 -(mouseChange.top)*0.01 + "px";
    }

    return (
        <>
        <h1 onMouseMove={handleMouseMove} className="sage-title">Courtney "Sage" Wong</h1>
        <h2 className="title-center">THE SMART ONE</h2>
        </>
    )
}

export default Header