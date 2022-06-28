import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Custompagination from '../components/Custompagination';
import SingleContent from '../components/SingleContent';
import styles from '../styles/movies.module.css';

const movies = () => {

    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [numOfPages, setNumOfPages] = useState();

    const fetchMovies = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=${page}`
        );
        setContent(data.results);
        setNumOfPages(data.total_pages);
        console.log(data);
    };

    useEffect(() => {
        fetchMovies();
    }, [page]);

    return (
        <div className={styles.content}>
            <span className={styles.pageTitle}>Discover Movies</span>
            <div className={styles.trendingContainer}>
                {content && content.map((item, index) =>
                    <SingleContent key={index} id={item.id}
                        poster={item.poster_path} title={item.title || item.name}
                        date={item.first_air_date || item.release_date}
                        media_type={item.media_type} vote_average={item.vote_average} />
                )}
            </div>
            {numOfPages > 1 && <Custompagination setPage={setPage} numOfPages="500" />}
        </div>
    )
}

export default movies;