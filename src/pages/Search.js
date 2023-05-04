import React from 'react';

import SearchBar from '../components/HomePage/SearchBar';
import Filters from '../components/HomePage/Filters';
import ShowResult from '../components/HomePage/ShowResult';
const Search = () => {
  return (
    <div>
      
      <SearchBar />
      <Filters />
      <ShowResult />
    </div>
  );
};

export default Search;
