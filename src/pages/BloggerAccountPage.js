import React from 'react';
import BloggerMainTable from '../components/BloggerAccountPage/BloggerMainTable';
import SearchBar from '../components/HomePage/SearchBar';
import Filters from '../components/HomePage/Filters';
import LowSection from '../components/HomePage/LowSection';
import Header from '../components/HomePage/Header';
import '.././styles/index.scss';

const BloggerAccountPage = () => {
  return (
    <>
      <section className="styledHomeContainer">
        <Header />
        <SearchBar />
        <Filters />
        <section className="styledAllContainer">
          <BloggerMainTable />
          <footer className="footer">
            <LowSection />
          </footer>
        </section>
      </section>
    </>
  );
};

export default BloggerAccountPage;
