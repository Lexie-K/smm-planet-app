import React from 'react';
import SearchBar from '../components/HomePage/SearchBar';
import Filters from '../components/HomePage/Filters';
import LowSection from '../components/HomePage/LowSection';
import AdminTable from '../components/AdminPage/AdminTable';

const AdminPage = () => {
  return (
    <>
      <SearchBar />
      <Filters />
      <div className="styledContentAdContainer">
        <AdminTable />
        <div className="footerAdmin">
          <LowSection />
        </div>
      </div>
    </>
  );
};

export default AdminPage;
