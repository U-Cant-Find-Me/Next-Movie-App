import { Pagination } from '@mui/material';
import React from 'react';
import styles from '../styles/custompagination.module.css'

const Custompagination = ({ setPage, numOfPages }) => {

    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0, 0);
    };

    return (
        <div className={styles.custompagination}>
            <Pagination color="primary" className={styles.pagination} count={numOfPages > 500 ? 500 : numOfPages} onChange={(e) => handlePageChange(e.target.textContent)} />
        </div>
    )
}

export default Custompagination;