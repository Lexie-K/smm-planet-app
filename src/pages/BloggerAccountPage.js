import React from 'react';
import BloggerMainTable from '../components/BloggerAccountPage/BloggerMainTable';
import SearchBar from '../components/HomePage/SearchBar';
import Filters from '../components/HomePage/Filters';
import LowSection from '../components/HomePage/LowSection';
import { Box } from '@mui/material';
import '.././styles/index.scss';

const BloggerAccountPage = () => {
  return (
    <>
      <main className="styledHomeContainer">
        <SearchBar />
        <Filters />
        <Box
          sx={
            {
              // margin: { xs: '0px', md: '5rem' },
              // marginTop: { xs: '50px', md: '-1.875rem', lg: '-1.875rem' },
              // marginBottom: { xs: '20px' },
            }
          }
        >
          <BloggerMainTable />
          <div className="styledAccountfooter">
            <LowSection />
          </div>
        </Box>
      </main>
    </>
  );
};

export default BloggerAccountPage;
