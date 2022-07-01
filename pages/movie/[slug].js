import axios from 'axios';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import { img_500, unavailable, unavailableLandscape } from '../../components/Config';
// import Carousel from '../../components/Carousel';
import styles from '../../styles/sidebar.module.css';
import YouTubeIcon from '@mui/icons-material/YouTube';


const Slug = ({ id }) => {
    const router = useRouter()
    const { slug } = router.query;

    const media_type = "movie"

    // console.log(slug);
    // console.log(typeof (slug));
    const ids = parseInt(slug);
    // console.log(ids);
    // console.log(typeof (ids));

    const [content, setContent] = useState();
    const [video, setVideo] = useState();
    const [title, setTitle] = useState();
    const [image, setImage] = useState();
    const [imageDrop, setImageDrop] = useState();
    const [tagline, setTagline] = useState();
    const [overview, setoverview] = useState();

    const fetchData = async () => {
        let urlData = "https://api.themoviedb.org/3/movie/" + ids + "?api_key=" + process.env.NEXT_PUBLIC_TMDB_API_KEY + "&language=en-US"
        const { data } = await axios.get(urlData);

        // console.log(urlData);
        // console.log(data);
        setContent(data);
        setTitle(data.title);
        setImage(data.poster_path);
        setTagline(data.tagline);
        setImageDrop(data.backdrop_path);
        setoverview(data.overview);
        // console.log(data.title);
    };

    const fetchVideo = async () => {
        let urlVdo = "https://api.themoviedb.org/3/movie/" + ids + "/videos?api_key=" + process.env.NEXT_PUBLIC_TMDB_API_KEY + "&language=en-US"
        const { data } = await axios.get(urlVdo);

        // console.log(urlVdo);
        // console.log(data);
        setVideo(data.results[0]?.key);
    };

    useEffect(() => {
        fetchData();
        fetchVideo();
    }, []);


    return (
        <>
            <div className={styles.content}>
                <div className={styles.pageContent}>
                    {
                        <img className={styles.imagePortrait} src={image
                            ? `${img_500}${image}`
                            : unavailable
                        } alt={title} />
                    }

                    <img className={styles.imageLandscape} src={image
                        ? `${img_500}${imageDrop}`
                        : unavailableLandscape
                    } alt={title} />

                    <div className={styles.contentAbout}>
                        <span className={styles.title}>
                            {title} (
                            {
                                content?.release_date?.substring(0, 4)}
                            )
                        </span>
                        {
                            (
                                <i className={styles.tagline}>{tagline}</i>
                            )
                        }
                    </div>

                    <span className={styles.desc}>
                        {overview}
                    </span>

                    <div className={styles.btn}>
                        <button className={styles.button}>
                            <a className={styles.aTag} href={`https://www.youtube.com/watch?v=${video}`} target="_blank" rel="noopener noreferrer">
                                <YouTubeIcon className={styles.youTubeIcon} />Watch The Trailer
                            </a>
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Slug;