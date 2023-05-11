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

        <Box
        // sx={{
        //   margin: { xs: '0px', md: '75px' },
        //   // marginTop: { xs: '50px', md: '-1.875rem', lg: '-1.875rem' },
        //   marginBottom: { xs: '20px' },
        // }}
        >
          <LoginForm handleLogin={handleLogin} />

          <div className="footer">
            <LowSection />
          </div>
        </Box>
      </main>
    </>
  );
};

export default LoginPage;
