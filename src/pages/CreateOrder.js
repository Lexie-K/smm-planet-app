import React from 'react';
import SearchBar from '../components/HomePage/SearchBar';
import Filters from '../components/HomePage/Filters';
import LowSection from '../components/HomePage/LowSection';
import NewOrderTable from '../components/AdAccountPage/NewOrderTable';

const CreateOrder = () => {
  return (
    <>
      <SearchBar />
      <Filters />
      <div className='styledcreateContainer'>
        <NewOrderTable />
        <footer className="styledAccountfooter">
          <LowSection />
        </footer>
      </div>
    </>
  );
};

export default CreateOrder;
