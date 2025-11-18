function addFavourite(song, favourites, setFavourites) {
    if (!song.melody) {
        alert("Please enter a melody before adding!");
        return;
    }

    const exists = favourites.some(fav => fav.melody === song.melody);
    // Check if the song has a melody string
    if (exists) {
        alert("This melody is already in your favourites!");
        return;
    }

    const newFavs = [...favourites, song];
    // Save the updated favourites list to localStorage
    localStorage.setItem("favourites", JSON.stringify(newFavs));
    setFavourites(newFavs);
   
}
export default addFavourite