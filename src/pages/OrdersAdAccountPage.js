import React from 'react';
import SearchBar from '../components/HomePage/SearchBar';
import Filters from '../components/HomePage/Filters';
import LowSection from '../components/HomePage/LowSection';
import AdOrderTable from '../components/AdAccountPage/AdOrderTable';

const OrdersAdAccountPage = () => {
  return (
    <>
      <SearchBar />
      <Filters />
      <AdOrderTable />
      <footer className="styledAccountfooter">
        <LowSection />
      </footer>
    </>
  );
};

export default OrdersAdAccountPage;
