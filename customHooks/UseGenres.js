const useGenres = (selectedGenres) => {
    if(selectedGenres.length < 1) {
        return "";
    }

    const genreIDs = selectedGenres.map(item => item.id);
    return genreIDs.reduce((acc, curr) => acc+','+curr);
}

export default useGenres;