import React from 'react';
import SearchBar from '../components/HomePage/SearchBar';
import Filters from '../components/HomePage/Filters';
import LowSection from '../components/HomePage/LowSection';
import AdFinanceTable from '../components/AdAccountPage/AdFinanceTable';

const FinanceAdAccountPage = () => {
  return (
    <>
      <section className="styledHomeContainer">
        <SearchBar />
        <Filters />
        <section className="styledAllContainer">
          <AdFinanceTable />
          <footer className="footer">
            <LowSection />
          </footer>
        </section>
      </section>
    </>
  );
};

export default FinanceAdAccountPage;
