import { Tab, Tabs } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import styles from '../styles/search.module.css';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import Custompagination from '../components/Custompagination';
import SingleContent from '../components/SingleContent';
import Head from 'next/head';

const Search = () => {

  const [type, setType] = useState(0);
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [content, setContent] = useState();
  const [numOfPages, setNumOfPages] = useState();
  const [selectedMovie, setSelectedMovie] = useState();

  const fetchSearch = async () => {
    if (searchText) {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&query=${searchText}&page=${page}&include_adult=true`
      );
      //console.log(searchText);
      setContent(data.results);
      //console.log(data.results);
      setNumOfPages(data.total_pages);
    }
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchSearch();
  }, [type, page, searchText]);

  return (
    <>
      <Head>
        <title>Search For Movies or Series</title>
      </Head>
      <section>
        <div className={styles.content}>
          <div className={styles.searchBox}>
            <SearchIcon color="primary" className={styles.SearchIcon} />
            <input type="text" className={styles.searchInput} placeholder="Search..."
              onChange={(e) => setSearchText(e.target.value)} />
          </div>

          <Tabs className={styles.tabs} value={type} indicatorColor="primary" textColor="primary"
            onChange={(event, newValue) => {
              setType(newValue);
              setPage(1);
            }} >
            <Tab className={styles.tab} label="Search Movies" />
            <Tab className={styles.tab} label="Search TV Series" />
          </Tabs>
          <div className={styles.trendingContainer}>
            {content && content.map((item, index) =>
              <SingleContent key={index} id={item.id}
                poster={item.poster_path} title={item.title || item.name}
                date={item.first_air_date || item.release_date}
                media_type={item.media_type} vote_average={item.vote_average}
                setSelectedMovie={setSelectedMovie} />
            )}

            {
              searchText ?
                (
                  !content && (
                    type ? (
                      <h2 className={styles.h2}> No Series Found </h2>
                    ) : (
                      <h2 className={styles.h2}> No Movies Found </h2>
                    )
                  )
                ) : (
                  <h2 className={styles.h2}> Whats On Your Mind </h2>
                )
            }
          </div>
          {
            numOfPages > 1 && (
              <Custompagination setPage={setPage} numOfPages={numOfPages} />
            )
          }
        </div>
      </section>
    </>
  )
}

export default Search;