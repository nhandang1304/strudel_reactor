function addFavourite(song, favourites, setFavourites) {
    if (!song.melody) {
        alert("Please enter a melody before adding!");
        return;
    }

    const exists = favourites.some(fav => fav.melody === song.melody);
    if (exists) {
        alert("This melody is already in your favourites!");
        return;
    }

    const newFavs = [...favourites, song];
    localStorage.setItem("favourites", JSON.stringify(newFavs));
    setFavourites(newFavs);
}
export default addFavourite