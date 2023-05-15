import React from 'react';
import SearchBar from '../components/HomePage/SearchBar';
import Filters from '../components/HomePage/Filters';
import LowSection from '../components/HomePage/LowSection';
import AdOrderTable from '../components/AdAccountPage/AdOrderTable';

const OrdersAdAccountPage = () => {
  return (
    <>
      <section className="styledHomeContainer">
        <SearchBar />
        <Filters />
        <section className="styledAllContainer">
          <AdOrderTable />
          <footer className="footer">
            <LowSection />
          </footer>
        </section>
      </section>
    </>
  );
};

export default OrdersAdAccountPage;
