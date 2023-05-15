import React from 'react';
import AdMainTable from '../components/AdAccountPage/AdMainTable';
import SearchBar from '../components/HomePage/SearchBar';
import Filters from '../components/HomePage/Filters';
import LowSection from '../components/HomePage/LowSection';

const AdAccountPage = () => {
  return (
    <>
      <section className="styledHomeContainer">
        <SearchBar />
        <Filters />
        <section className="styledAllContainer">
          <AdMainTable />
          <footer className="footer">
            <LowSection />
          </footer>
        </section>
      </section>
    </>
  );
};

export default AdAccountPage;
