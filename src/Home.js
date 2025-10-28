import { useRef, useEffect } from "react";
import "../src/css/NewDesign.css";

function Home() {
    const videoRef = useRef(null);
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.5; 
        }
    }, []);
    return (
        <header>
            
            <div className="overlay"></div>

          
            <video ref={videoRef} className="video-background" playsInline autoPlay muted loop>
                <source src="/videoHeader.mp4" type="video/mp4" />

            </video>

            
            <div className="container h-100">
                <div className="d-flex h-100 text-center align-items-center">
                    <div className="w-100 text-white">
                        <h1 className="display-3">Video Header</h1>
                        <p className="lead mb-0">Using HTML5 Video and Bootstrap</p>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Home;
