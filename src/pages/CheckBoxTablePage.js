import React from 'react';
import CheckBoxTable from '../components/CheckBoxPage/CheckBoxTable';
import SearchBar from '../components/HomePage/SearchBar';
import Filters from '../components/HomePage/Filters';
import LowSection from '../components/HomePage/LowSection';
const CheckBoxTablePage = () => {
  return (
    <>
      <SearchBar />
      <Filters />
      <section className='styledAllContainer'>
      <CheckBoxTable />
      <footer className="footer">
        <LowSection />
      </footer>
      </section>
    </>
  );
};

export default CheckBoxTablePage;
