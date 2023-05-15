import React from 'react';

import SearchBar from '../components/HomePage/SearchBar';
import Filters from '../components/HomePage/Filters';
import ShowResult from '../components/HomePage/ShowResult';
import LowSection from '../components/HomePage/LowSection';
const Search = () => {
  return (
    <>
      <SearchBar />
      <Filters />
      <section className="styledAllContainer">
        <ShowResult />
        <footer className="footer">
          <LowSection />
        </footer>
      </section>
    </>
  );
};

export default Search;
