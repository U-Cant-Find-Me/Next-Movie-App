import axios from 'axios'
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import Custompagination from '../components/Custompagination';
import SingleContent from '../components/SingleContent';
import styles from '../styles/trending.module.css';

const trending = () => {

    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState();
    const [numOfPages, setNumOfPages] = useState();

    const fetchTrending = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&page=${page}`
        );
        //console.log(data);
        setContent(data.results);
        setNumOfPages(data.total_pages);
    };

    useEffect(() => {
        fetchTrending();
    }, [page]);

    return (
        <>
        <Head>
            <title>WhatsHot - Trending</title>
        </Head>
            <div className={styles.content}>
                <span className={styles.pageTitle}>Trending</span>
                <div className={styles.trendingContainer}>
                    {content && content.map((item, index) =>
                        <SingleContent key={index} id={item.id}
                            poster={item.poster_path} title={item.title || item.name}
                            date={item.first_air_date || item.release_date}
                            media_type={item.media_type} vote_average={item.vote_average}
                            setSelectedMovie={setSelectedMovie} />
                    )}
                </div>

                <Custompagination setPage={setPage} numOfPages={numOfPages} />
            </div>
        </>
    )
}

export default trending;