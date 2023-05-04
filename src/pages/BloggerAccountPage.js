import React from 'react';
import BloggerMainTable from '../components/BloggerAccountPage/BloggerMainTable';
import SearchBar from '../components/HomePage/SearchBar';
import Filters from '../components/HomePage/Filters';
import LowSection from '../components/HomePage/LowSection';
// import { useLocation } from 'react-router-dom';

const BloggerAccountPage = () => {
  return (
    <>
      <SearchBar />
      <Filters />
      <BloggerMainTable />
      <LowSection/>
    </>
  );
};

export default BloggerAccountPage;

// const location = useLocation();

// let content;

// switch (location.pathname) {
//   case '/account/finance':
//     content = <p>Finance</p>;
//     break;
//   case '/account':
//     content = <BloggerMainTable />;
//     break;
//   default:
//     content = null;
//     break;
// }
// console.log({location})
//   <div>
//   {content}
// </div>
