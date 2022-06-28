import { Badge } from '@mui/material';
import React from 'react';
import styles from '../styles/singleContent.module.css'
import StarIcon from '@mui/icons-material/Star';
import { img_300, unavailable } from './Config';

const SingleContent = ({ id, poster, title, date, media_type, vote_average }) => {
    return (
        <div className={styles.media}>
            <div className={styles.mui}>
                    <StarIcon className={styles.starIcon}/>
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

        </div>
    )
}

export default SingleContent;