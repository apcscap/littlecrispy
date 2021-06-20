import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

const Surprise = () => {
    return (
        <>
            <ReactPlayer url='https://www.youtube.com/watch?v=pUvwleVGVmA'
                        playing={true}
                        muted={true}/>
            <Link to='/'>Go back</Link>
        </>
    )
}

export default Surprise