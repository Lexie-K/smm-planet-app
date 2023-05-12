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
      <div className="styledAdContainer">
        <ShowResult />
        <div className="styledAdfooter">
          <LowSection />
        </div>
      </div>
    </>
  );
};

export default Search;
