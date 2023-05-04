import React from 'react';
import SearchBar from '../components/HomePage/SearchBar';
import Filters from '../components/HomePage/Filters';
import LowSection from '../components/HomePage/LowSection';
import FinanceTable from '../components/BloggerAccountPage/FinanceTable';
// import { useLocation } from 'react-router-dom';

const FinanceBloggerAccountPage = () => {
  return (
    <>
      <SearchBar />
      <Filters />
      <FinanceTable />
      <LowSection/>
    </>
  );
};

export default FinanceBloggerAccountPage;