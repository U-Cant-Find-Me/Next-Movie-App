import React, { useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/genres.module.css';
import { Chip } from '@mui/material';

const Genres = ({
    selectedGenres,
    setSelectedGenres,
    genres,
    setGenres,
    type,
    setPage
}) => {

    const handleAdd = (genre) => {
        setSelectedGenres([...selectedGenres, genre]);
        setGenres(genres.filter(item => item.id !== genre.id));
    }

    const handleRemove = (genre) => {
        setSelectedGenres(
            selectedGenres.filter(item => item.id !== genre.id));
        setGenres([...genres, genre]);
    }

    const fetchGenres = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US`
        );
        setGenres(data.genres);
    };

    // console.log(genres);

    useEffect(() => {
        fetchGenres();

        return () => {
            setGenres({});
        }
    }, []);

    return (
        <div className={styles.content}>
            {
                selectedGenres && selectedGenres.map((item, index) => {
                    return (
                        <Chip key={index} label={item.name} className={styles.chips}
                            clickable onDelete={() => handleRemove(item)} color="primary" />
                    )
                }
                )
            }

            {
                genres && genres.map((item, index) => {
                    return (
                        <Chip key={index} label={item.name} className={styles.chip}
                            clickable onClick={() => handleAdd(item)} />
                    )
                }
                )
            }
        </div>
    )
}

export default Genres;