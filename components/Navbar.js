import React from 'react';
import styles from '../styles/navbar.module.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import Link from 'next/link';

export default function SimpleBottomNavigation() {

    return (
        <div className={styles.content}>
            <Link href="/trending">
                <a>
                    <ul className={styles.list}>
                        <li className={styles.listItems}>
                            <WhatshotIcon className={styles.icon} />
                        </li>
                        <li>
                            <p className={styles.text}>Trending</p>
                        </li>
                    </ul>
                </a>
            </Link>

            <Link href="/movies">
                <a>
                    <ul className={styles.list}>
                        <li className={styles.listItems}>
                            <MovieIcon className={styles.icon} />
                        </li>
                        <li>
                            <p className={styles.text}>Movies</p>
                        </li>
                    </ul> </a>
            </Link>

            <Link href="#">
                <a>
                    <ul className={styles.list}>
                        <li className={styles.listItems}>
                            <PlaylistAddIcon className={styles.icon} />
                        </li>
                        <li>
                            <p className={styles.text}>Wishlist</p>
                        </li>
                    </ul> </a>
            </Link>

            <Link href="/">
                <a>
                    <ul className={styles.list}>
                        <li className={styles.listItems}>
                            <HomeIcon className={styles.icon} />
                        </li>
                        <li>
                            <p className={styles.text}>Home</p>
                        </li>
                    </ul> </a>
            </Link>

            <Link href="#">
                <a className={styles.anc}>
                    <ul className={styles.list}>
                        <li className={styles.listItems}>
                            <FavoriteIcon className={styles.icon} />
                        </li>
                        <li>
                            <p className={styles.text}>Favorites</p>
                        </li>
                    </ul>
                </a>
            </Link>

            <Link href="/series">
                <a>
                    <ul className={styles.list}>
                        <li className={styles.listItems}>
                            <TvIcon className={styles.icon} />
                        </li>
                        <li>
                            <p className={styles.text}>TV Series</p>
                        </li>
                    </ul> </a>
            </Link>

            <Link href="/search">
                <a>
                    <ul className={styles.list}>
                        <li className={styles.listItems}>
                            <SearchIcon className={styles.icon} />
                        </li>
                        <li>
                            <p className={styles.text}>Search</p>
                        </li>
                    </ul>
                </a>
            </Link>

        </div>
    );
}
