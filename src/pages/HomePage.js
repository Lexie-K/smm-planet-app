import React from 'react';
import '../components/HomePage/styledHomePage.scss';
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
         
            <MiddleInfo />
            <footer className="footer">
              <LowSection />
            </footer>
        
        </div>
      </main>
    </>
  );
};

export default HomePage;
