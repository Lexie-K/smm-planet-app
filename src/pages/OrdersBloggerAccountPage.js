import React from 'react';
import SearchBar from '../components/HomePage/SearchBar';
import Filters from '../components/HomePage/Filters';
import LowSection from '../components/HomePage/LowSection';
import OrdersBloggerTable from '../components/BloggerAccountPage/OrdersBloggerTable';
const OrdersBloggerAccountPage = () => {
  return (
    <>
      <section className="styledHomeContainer">
        <SearchBar />
        <Filters />
        <section className="styledAllContainer">
          <OrdersBloggerTable />
          <footer className="footer">
            <LowSection />
          </footer>
        </section>
      </section>
    </>
  );
};

export default OrdersBloggerAccountPage;
