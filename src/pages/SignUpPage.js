import React from 'react';
import SignUpForm from '../components/SignUpPage/SignUpForm';
import { setUser } from '../store/slices/formUserSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../components/HomePage/Header';
import SearchBar from '../components/HomePage/SearchBar';
import Filters from '../components/HomePage/Filters';
import LowSection from '../components/HomePage/LowSection';
import { Box } from '@mui/material';
const SignUpPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignUp = (email, password) => {
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
          sx={{
            margin: { xs: '0px', md: '5rem' },
            // marginTop: { xs: '50px', md: '-1.875rem', lg: '-1.875rem' },
            marginBottom: { xs: '20px' },
          }}
        >
          <SignUpForm handleSignUp={handleSignUp} />
          <div className="footer">
            <LowSection />
          </div>
        </Box>
      </main>
    </>
  );
};

export default SignUpPage;
