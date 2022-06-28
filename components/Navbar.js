import * as React from 'react';
import styles from '../styles/navbar.module.css';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';

export default function SimpleBottomNavigation() {
    const [value, setValue] = React.useState(0);

    return (
        <div>
            <BottomNavigation className={styles.box}
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction className={styles.color} label="Trending" icon={<WhatshotIcon />} />
                <BottomNavigationAction className={styles.color} label="Movies" icon={<MovieIcon />} />
                <BottomNavigationAction className={styles.color} label="TV Series" icon={<TvIcon />} />
                <BottomNavigationAction className={styles.color} label="Favorites" icon={<FavoriteIcon />} />
                <BottomNavigationAction className={styles.color} label="Search" icon={<SearchIcon />} />
            </BottomNavigation>
        </div>
    );
}
