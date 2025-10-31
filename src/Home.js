import { useRef, useEffect } from "react";
import "../src/css/NewDesign.css";
import { GrCloudUpload } from "react-icons/gr";
import { NavLink} from "react-router-dom";
import { GiMusicalScore } from "react-icons/gi";
import { MdFavorite } from "react-icons/md";
function Home() {
    const videoRef = useRef(null);
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.5; 
        }
    }, []);
    return (
        <>
            <header>
                <div className="overlay"></div>
                <video ref={videoRef} className="video-background" playsInline autoPlay muted loop>
                    <source src="/soundWave.mp4" type="video/mp4" />
                </video>
                <div className="container h-100">
                    <div className="d-flex h-100 text-center align-items-center">
                        <div className="w-100 text-white">
                            <h1 className="display-3 fw-bold gradient-text">Live Music Coding</h1>
                            <p className="lead fw-bold gradient-text ">React-powered live music coding platform integrating Strudel.cc REPL. Features interactive controls, real-time preprocessing, JSON handling, and D3 visualizations.</p>
                            <div className="text-center mt-5">
                                <NavLink id="createButton" to="/create" className="fw-bold btn btn-warning btn-rounded display-2 fs-4" data-mdb-ripple-init>
                                    Create your own song
                                </NavLink>

                            </div>
                        </div>

                    </div>

                </div>
            </header>
            <body>
               
                <div className="row justify-content-center">
                    
                    <h1 className="text-center mt-5 mb-5 gradient-text">What is your next move?</h1>
                    
                    <div className="col-5">
                        <div className="card cardCustom" style={{ width: "35rem" }} >

                            <div className="card-body ">

                                <div className="d-flex">
                                    <GiMusicalScore color="#4DEFF7" size="130" />
                                    <MdFavorite color="#4DEFF7" size="30"/>
                                    <div className="col-7 ms-5">
                                        <div className="card" >
                                            <h2 className="card-title gradient-text text-center">Your favorite song</h2>
                                        </div>
                                        <h5 className="text-center cardDescription mt-3">Explore your personal collection, replay the tracks you love</h5>

                                        <NavLink to="/Favourite"className="fw-bold btn btn-warning btn-rounded display-2 fs-4 gradient-btn">Your Favourite Song</NavLink>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-5">
                        <div className="card cardCustom" style={{ width: "35rem" }} >
                            
                            <div className="card-body ">
                                
                                <div className="d-flex">
                                    <GrCloudUpload color="#4DEFF7" size="120" />
                                    <div className="col-7 ms-5">
                                        <div className="card" >
                                        <h2 className="card-title gradient-text text-center">Upload your song</h2>
                                        </div>
                                        <h5 className="text-center cardDescription mt-3 mb-3">Got a beat? Drop your song here and make the world vibe to your tune!</h5>
                                        
                                        <NavLink to="/Favourite" className="fw-bold btn btn-warning btn-rounded display-2 fs-4 gradient-btn">Import your song here</NavLink>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </>
        
    );
}

export default Home;
