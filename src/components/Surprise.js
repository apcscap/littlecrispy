import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import SurpriseButton from "./SurpriseButton";

const Surprise = () => {
    return (
        <>
            <div>
                <ReactPlayer className="rollContainer" url='https://www.youtube.com/watch?v=pUvwleVGVmA'
                        playing={true}
                        muted={true}/>
                <h2 className="rollContainer">Your Val Points</h2>
                <p className="rollContainer">RA-KPH5XJOMAMMAMAMA</p>
            </div>

            
            
            <Link to='/'><SurpriseButton>Go Back</SurpriseButton></Link>
        </>
    )
}

export default Surprise