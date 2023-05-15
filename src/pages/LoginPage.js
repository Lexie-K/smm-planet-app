import React from 'react';
import LoginForm from '../components/LoginPage/LoginForm';
import { setUser } from '../store/slices/formUserSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LowSection from '../components/HomePage/LowSection';
import SearchBar from '../components/HomePage/SearchBar';
import Filters from '../components/HomePage/Filters';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    dispatch(
      setUser({
        // email: user.email,
        // id: user.uid,
        // token: user.refreshToken,
      })
    );
    navigate('/');
  };
  return (
    <>
      <section className="styledHomeContainer">
        <SearchBar />
        <Filters />
        <section>
          <LoginForm handleLogin={handleLogin} />
          <footer className="formFooter">
            <LowSection />
          </footer>
        </section>
      </section>
    </>
  );
};

export default LoginPage;
