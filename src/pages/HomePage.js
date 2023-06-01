import React from 'react';
import '../components/HomePage/styledHomePage.scss';
import LowSection from '../components/HomePage/LowSection';
import Header from '../components/HomePage/Header';
import SearchBar from '../components/HomePage/SearchBar';
import Filters from '../components/HomePage/Filters';
import MiddleInfo from '../components/HomePage/MiddleInfo';
import mainpic from '../assets/mainpic.png';

const HomePage = () => {
  return (
    <>
      <section className="styledHomeContainer">
        <Header />
        <SearchBar />
        <Filters />
        <section className="containerFirstPage">
          <div className="containerSecond">
            <MiddleInfo />
            <footer className="footerHome">
              <LowSection />
            </footer>
          </div>
          <div className="backgroundPic">
            <img src={mainpic} alt="main home pic" />
          </div>
        </section>
      </section>
    </>
  );
};

export default HomePage;
