import React from 'react'
import styles from '../styles/header.module.css'
const Header = () => {
    return (
        <div>
            <span onClick={() => window.scroll(0, 0)}
                className={styles.header}>Name of the App</span>
        </div>
    )
}

export default Header;