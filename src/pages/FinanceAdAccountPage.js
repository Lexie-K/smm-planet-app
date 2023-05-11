import React from 'react';
import SearchBar from '../components/HomePage/SearchBar';
import Filters from '../components/HomePage/Filters';
import LowSection from '../components/HomePage/LowSection';
import AdFinanceTable from '../components/AdAccountPage/AdFinanceTable';

const FinanceAdAccountPage = () => {
  return (
    <>
      <SearchBar />
      <Filters />
      <AdFinanceTable />
      <LowSection />
    </>
  );
};

export default FinanceAdAccountPage;
