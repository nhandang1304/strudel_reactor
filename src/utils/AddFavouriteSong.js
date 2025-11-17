function addFavourite(song) {
    setFavourites(prevFavourites => {
        const exists = prevFavourites.some(fav => fav.id === song.id);
        if (exists) return prevFavourites;

        const updatedFavourites = [...prevFavourites, song];
        localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
        return updatedFavourites;
    });
}
