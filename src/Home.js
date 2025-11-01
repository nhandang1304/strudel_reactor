import { useRef, useEffect } from "react";
import "../src/css/NewDesign.css";
import CardNav from "./HomeComponents/cardNav"
import { NavLink } from "react-router-dom"
import { GiMusicalScore } from "react-icons/gi";
import { MdFavorite } from "react-icons/md";
import { GrCloudUpload } from "react-icons/gr";
import Footer from "./HomeComponents/footer";
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
                            <p className="lead fw-bold gradient-text ">Who needs a guitar when your code can jam? Turn your keyboard into a DJ deck.</p>
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
                <h1 className="text-center mt-5 mb-3 gradient-text">What is your next move?</h1>

                <p className="text-center mb-5 gradient-text fw-bold custom-text">You can jam out to your all-time favorite song,
                    or you can upload your own masterpiece and see if it hits as hard as you think it does.</p>

                <div className="row justify-content-center">

                    <CardNav
                        titleCard="Your favorite song"
                        desCard="Explore your personal collection, replay the tracks you love."
                        buttonCard="Your Favourite Song"
                        icons={[
                            <GiMusicalScore color="#4DEFF7" size="130" />,
                            <MdFavorite color="#f268a9" size="30" />
                        ]}
                    />


                    <CardNav
                        titleCard="Upload your song"
                        desCard="Got a beat? Drop your song here and make the world vibe to your tune!"
                        buttonCard="Import your song here"
                        icons={[
                            <GrCloudUpload color="#4DEFF7" size="120" />
                        ]}
                    />
                    
                </div>
            </body>
            <Footer />
        </>
        
    );
}

export default Home;
