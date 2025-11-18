import React, { useState, useEffect } from "react";
import "../css/NewDesign.css";

function FavouriteSongList() {
    const [favourites, setFavourites] = useState([]);
    const [selectedSong, setSelectedSong] = useState(null); // Bài hát được chọn để hiển thị melody

    useEffect(() => {
        const saved = localStorage.getItem("favourites");
        setFavourites(saved ? JSON.parse(saved) : []);
    }, []);

    function handleRemove(id) {
        const updated = favourites.filter(song => song.id !== id);
        setFavourites(updated);
        localStorage.setItem("favourites", JSON.stringify(updated));
    }

    function handleShowMelody(song) {
        setSelectedSong(song);
    }

    function handleCloseModal() {
        setSelectedSong(null);
    }

    return (
        <div>
            <h1 className="display-3 fw-bold mb-5">Your favourite list</h1>
            <div className="row justify-content-center">
                {favourites.map(song => (
                    <div key={song.id} className="col-3 ml-2">
                        <div className="card text-dark mb-5" style={{ border: "2px solid black" }}>
                            <div className="card-body">
                                <div class="card-header">
                                    <h4 className="card-title fw-bold">{song.name}</h4>
                                </div>
                                <p className="card-text">
                                    {song.melody.length > 100
                                        ? song.melody.substring(0, 100) + "..."
                                        : song.melody}
                                </p>
                                <div className="d-flex justify-content-center  align-items-center gap-3">
                                <button
                                    className="btn btn-danger fw-bold mt-2"
                                    onClick={() => handleRemove(song.id)}
                                >
                                    Remove
                                </button>
                                <button
                                    className="btn btn-outline-dark fw-bold mt-2 "
                                    onClick={() => handleShowMelody(song)}
                                >
                                    Show melody
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

          
            {selectedSong && (
                <div
                    className="modal-overlay popupWindow"
                   
                    onClick={handleCloseModal}
                >
                    <div
                        className="modal-content contentWindow"
                        style={{ backgroundColor: "white", padding: "20px", borderRadius: "8px", maxWidth: "90%", maxHeight: "80%", overflowY: "auto", }}
                        
                        onClick={e => e.stopPropagation()} 
                    >
                        <h3>{selectedSong.name}</h3>
                        <pre
                            style={{
                                whiteSpace: "pre-wrap",
                                wordWrap: "break-word",
                                maxHeight: "60vh",
                                overflowY: "auto",
                            }}
                        >
                            {selectedSong.melody}
                        </pre>
                        <button
                            className="btn btn-outline-danger mt-3"
                            onClick={handleCloseModal}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default FavouriteSongList;
