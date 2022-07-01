import { Badge } from '@mui/material';
import React from 'react';
import styles from '../styles/singleContent.module.css'
import { img_300, unavailable } from './Config';
import Link from 'next/link';

const SingleContent = ({ id, poster, title, date, media_type, vote_average, setSelectedMovie, toggleCart }) => {
    const page = id.toString();
    if ({ media_type } === 'tv') {
        page = `/tv/${id}`;
    } else {
        page = `/movie/${id}`;
    }

    // console.log({media_type});

    // console.log(page);

    return (
        <div className={styles.media} onClick={() => {
            setSelectedMovie(id)
        }}>
            <div className={styles.mui}>
                <Badge className={styles.badge} badgeContent={vote_average ? vote_average : "NA"} color={vote_average > 7 ? "primary" : "secondary"} />
            </div>
            <img className={styles.poster}
                src={poster ? `${img_300}/${poster}` : unavailable}
                alt={title} />

            <b className={styles.title}>
                {title}
            </b>

            <span className={styles.someTitle}>
                {media_type === 'tv' ? "TV Series" : "Movie"}
                <span className={styles.someTitle}>
                    {date ? date : "DD-MM-YYYY"}
                </span>
            </span>

            <button onClick={toggleCart} className={styles.btn}>
                <Link href={page}>
                    <a>
                        Show More
                    </a>
                </Link>
            </button>

        </div>
    )
}

export default SingleContent;