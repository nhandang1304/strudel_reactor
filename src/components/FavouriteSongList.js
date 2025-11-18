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
        <div className="bodyStrud">
            <h1 className="display-3 fw-bold">Your favourite list</h1>
            <div className="row justify-content-center">
                {favourites.map(song => (
                    <div key={song.id} className="col-3 ml-2">
                        <div className="card" style={{ width: "18rem" }}>
                            <div className="card-body">
                                <h5 className="card-title">{song.name}</h5>
                                <p className="card-text">
                                    {song.melody.length > 100
                                        ? song.melody.substring(0, 100) + "..."
                                        : song.melody}
                                </p>
                                <button
                                    className="btn btn-outline-light fw-bold mt-2"
                                    onClick={() => handleRemove(song.id)}
                                >
                                    Remove
                                </button>
                                <button
                                    className="btn btn-outline-light fw-bold mt-2"
                                    onClick={() => handleShowMelody(song)}
                                >
                                    Show melody
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Popup modal hiển thị melody */}
            {selectedSong && (
                <div
                    className="modal-overlay popupWindow"
                   
                    onClick={handleCloseModal}
                >
                    <div
                        className="modal-content"
                        style={{
                            backgroundColor: "white",
                            padding: "20px",
                            borderRadius: "8px",
                            maxWidth: "90%",
                            maxHeight: "80%",
                            overflowY: "auto",
                        }}
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
                            className="btn btn-outline-secondary mt-3"
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
