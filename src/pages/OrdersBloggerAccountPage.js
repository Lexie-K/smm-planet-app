import React from 'react';
import SearchBar from '../components/HomePage/SearchBar';
import Filters from '../components/HomePage/Filters';
import LowSection from '../components/HomePage/LowSection';
import OrdersBloggerTable from '../components/BloggerAccountPage/OrdersBloggerTable';
const OrdersBloggerAccountPage = () => {
  return (
    <>
      <SearchBar />
      <Filters />
      <OrdersBloggerTable />
      <footer className="styledAccountfooter">
        <LowSection />
      </footer>
    </>
  );
};

export default OrdersBloggerAccountPage;
