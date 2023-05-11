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
      <CheckBoxTable />
      <LowSection />
    </>
  );
};

export default CheckBoxTablePage;
