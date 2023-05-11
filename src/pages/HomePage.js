import React from 'react';
import '../components/HomePage/styledHomePage.scss';
import { Box } from '@mui/material';
import LowSection from '../components/HomePage/LowSection';
import Header from '../components/HomePage/Header';
import SearchBar from '../components/HomePage/SearchBar';
import Filters from '../components/HomePage/Filters';
import MiddleInfo from '../components/HomePage/MiddleInfo';

const HomePage = () => {
  return (
    <>
      <main className="styledHomeContainer">
        <Header />
        <SearchBar />
        <Filters />
        <div className="container">
          <Box
            sx={{
              marginLeft: { md: '5rem', xs: '0px' },
              marginTop: { md: '-1.875rem', lg: '-1.875rem' },
            }}
          >
            <MiddleInfo />
            <div className="footer">
              <LowSection />
            </div>
          </Box>
        </div>
      </main>
    </>
  );
};

export default HomePage;
