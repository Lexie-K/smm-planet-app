import React from 'react';
import SearchBar from '../components/HomePage/SearchBar';
import Filters from '../components/HomePage/Filters';
import LowSection from '../components/HomePage/LowSection';
import AcceptanceTable from '../components/AcceptanceTable';

const AcceptancePage = () => {
  return (
    <>
      <SearchBar />
      <Filters />
      <AcceptanceTable />
      <div className="styledAccountfooter">
        <LowSection />
      </div>
    </>
  );
};

export default AcceptancePage;
