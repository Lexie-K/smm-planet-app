import React from 'react';
import AdMainTable from '../components/AdAccountPage/AdMainTable';
import SearchBar from '../components/HomePage/SearchBar';
import Filters from '../components/HomePage/Filters';
import LowSection from '../components/HomePage/LowSection';

const AdAccountPage = () => {
  return (
    <>
      <SearchBar />
      <Filters />
      <div className='styledAdContainer'>
        <AdMainTable />
        <footer className="styledAdfooter">
          <LowSection />
        </footer>
      </div>
    </>
  );
};

export default AdAccountPage;
