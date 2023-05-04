import React from "react";
import SearchBar from '../components/HomePage/SearchBar';
import Filters from '../components/HomePage/Filters';
import LowSection from '../components/HomePage/LowSection';
import AdminTable from '../components/AdminPage/AdminTable'

const AdminPage = () => {
  return (
    <>
      <SearchBar />
      <Filters />
      <AdminTable />
      <LowSection/>
    </>
  )
};

export default AdminPage;

