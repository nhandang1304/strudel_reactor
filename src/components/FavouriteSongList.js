import React, { useState, useEffect } from "react";

function FavouriteSongList() {
    const [favourites, setFavourites] = useState([]);

    useEffect(() => {
        const saved = localStorage.getItem("favourites");
        setFavourites(saved ? JSON.parse(saved) : []);
    }, []);

    function handleRemove(id) {
        const updated = favourites.filter(song => song.id !== id);
        setFavourites(updated);
        localStorage.setItem("favourites", JSON.stringify(updated));
    }

    if (favourites.length === 0) {
        return <p>No favourite songs yet.</p>;
    }

    return (
        <div>
            <h3>Your Favourite Songs</h3>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {favourites.map(song => (
                    <li key={song.id} style={{ marginBottom: '10px', borderBottom: '1px solid #ccc', paddingBottom: '8px' }}>
                        <strong>{song.name}</strong>
                        <button
                            style={{ marginLeft: '10px', color: 'red', cursor: 'pointer' }}
                            onClick={() => handleRemove(song.id)}
                        >
                            Remove
                        </button>
                        <pre style={{ whiteSpace: 'pre-wrap', marginTop: '5px' }}>{song.melody}</pre>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FavouriteSongList;
