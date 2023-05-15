import React from 'react';
import SearchBar from '../components/HomePage/SearchBar';
import Filters from '../components/HomePage/Filters';
import LowSection from '../components/HomePage/LowSection';
import NewOrderTable from '../components/AdAccountPage/NewOrderTable';

const CreateOrder = () => {
  return (
    <>
      <section className="styledHomeContainer">
        <SearchBar />
        <Filters />
        <section className="styledAllContainer">
          <NewOrderTable />
          <footer className="footer">
            <LowSection />
          </footer>
        </section>
      </section>
    </>
  );
};

export default CreateOrder;
