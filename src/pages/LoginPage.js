import React from 'react';
import LoginForm from '../components/LoginPage/LoginForm';
import LowSection from '../components/HomePage/LowSection';
import SearchBar from '../components/HomePage/SearchBar';
import Filters from '../components/HomePage/Filters';

const LoginPage = () => {
  return (
    <>
      <section className="styledHomeContainer">
        <SearchBar />
        <Filters />
        <section>
          <LoginForm />
          <footer className="formFooter">
            <LowSection />
          </footer>
        </section>
      </section>
    </>
  );
};

export default LoginPage;
