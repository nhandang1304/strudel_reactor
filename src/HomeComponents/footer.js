import React from "react";
import { NavLink } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { SiMusicbrainz } from "react-icons/si";
export default function Footer() {
    return (
        <>
                <footer
                    className="text-center text-white"
                    style={{ backgroundColor: "#000000" }}
                >
                  
                    <div className="container">
                       
                        <section className="mt-5">
                          
                            <div className="row text-center d-flex justify-content-center pt-5">
                                <div className="col-md-2">
                                    <h6 className="text-uppercase fw-bold">
                                        <NavLink to="#" className="text-white">
                                        About us
                                        
                                        </NavLink>
                                    </h6>
                                </div>

                                <div className="col-md-2">
                                    <h6 className="text-uppercase fw-bold">
                                        <NavLink to="#" className="text-white">
                                            Products
                                        </NavLink>
                                    </h6>
                                </div>

                                <div className="col-md-2">
                                    <h6 className="text-uppercase fw-bold">
                                        <NavLink to="#" className="text-white">
                                            Awards
                                        </NavLink>
                                    </h6>
                                </div>

                                <div className="col-md-2">
                                    <h6 className="text-uppercase fw-bold">
                                        <NavLink to="#" className="text-white">
                                            Help
                                        </NavLink>
                                    </h6>
                                </div>

                                <div className="col-md-2">
                                    <h6 className="text-uppercase fw-bold">
                                        <NavLink to="#" className="text-white">
                                            Contact
                                        </NavLink>
                                    </h6>
                                </div>
                            </div>
                        </section>

                        <hr className="my-5" />

                        
                        <section className="mb-5">
                            <div className="row">
                            <div className="col-4">
                                <SiMusicbrainz size="100" color="gold" />
                            </div>
                            <div className="col-6">
                               
                                    <h5>
                                    Discover and share the music that moves you. Whether you're listening to your all-time favorites or uploading your own creations, this is where passion meets rhythm.
                                    </h5>
                                </div>
                            </div>
                        </section>

                     
                        <section className="text-center mb-5">
                            <NavLink to="#" className="text-white me-4">
                                <i className="fab fa-facebook-f"></i>
                            </NavLink>
                        <NavLink to="#" className="text-white me-4">
                                <i className="fab fa-twitter"></i>
                            </NavLink>
                        <NavLink to="#" className="text-white me-4">
                                <i className="fab fa-google"></i>
                            </NavLink>
                        <NavLink to="#" className="text-white me-4">
                                <i className="fab fa-instagram"></i>
                            </NavLink>
                        <NavLink to="#" className="text-white me-4">
                                <i className="fab fa-linkedin"></i>
                            </NavLink>
                        <NavLink to="#" className="text-white me-4">
                                <i className="fab fa-github"></i>
                            </NavLink>
                        </section>
                    </div>

                   
                    <div
                        className="text-center p-3"
                        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                    >
                        © 2025 Copyright:
                        <a className="text-white ms-1" href="https://mdbootstrap.com/">
                            MDBootstrap.com
                        </a>
                    </div>
                </footer>
            
        </>
    );
}
      
