import axios from 'axios';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import Custompagination from '../components/Custompagination';
import Genres from '../components/Genres';
import SingleContent from '../components/SingleContent';
import useGenres from '../customHooks/UseGenres';
import styles from '../styles/series.module.css';

const Series = () => {

    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [numOfPages, setNumOfPages] = useState();
    const [selectedMovie, setSelectedMovie] = useState();
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [genres, setGenres] = useState([]);
    const genreforURL = useGenres(selectedGenres);

    const fetchMovies = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=${page}&with_genres=${genreforURL}`
        );
        setContent(data.results);
        setNumOfPages(data.total_pages);
        //console.log(data.results);
    };

    useEffect(() => {
        fetchMovies();
    }, [page, genreforURL]);

    return (
        <>
        <Head>
            <title>Looking For TV Series</title>
        </Head>
            <div className={styles.content}>
                <span className={styles.pageTitle}>
                    TV Series
                </span>

                <Genres type="tv" selectedGenres={selectedGenres}
                    genres={genres} setGenres={setGenres} setSelectedGenres={setSelectedGenres}
                    setPage={setPage} />

                <div className={styles.trendingContainer}>
                    {content && content.map((item, index) =>
                        <SingleContent key={index} id={item.id}
                            poster={item.poster_path} title={item.title || item.name}
                            date={item.first_air_date || item.release_date}
                            media_type="tv" vote_average={item.vote_average}
                            setSelectedMovie={setSelectedMovie} />
                    )}
                </div>
                <Custompagination setPage={setPage} numOfPages={numOfPages} />
            </div>
        </>
    )
}

export default Series;