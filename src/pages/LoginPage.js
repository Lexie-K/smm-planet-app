import React from 'react';
import LoginForm from '../components/LoginPage/LoginForm';
import { setUser } from '../store/slices/formUserSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LowSection from '../components/HomePage/LowSection';
import SearchBar from '../components/HomePage/SearchBar';
import Filters from '../components/HomePage/Filters';
import { Box } from '@mui/material';
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
      <main className="styledHomeContainer">
        <SearchBar />
        <Filters />
        <div className="styledLogincontainer">
          <LoginForm handleLogin={handleLogin} />
          <div className="styledLoginfooter">
            <LowSection />
          </div>
        </div>
      </main>
    </>
  );
};

export default LoginPage;
