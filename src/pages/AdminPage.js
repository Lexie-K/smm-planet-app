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
      <div className="styledAllContainer">
        <div>
          <AdminTable />
        </div>
        <footer className="footer">
          <LowSection />
        </footer>
      </div>
    </>
  );
};

export default AdminPage;
