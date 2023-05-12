import React from 'react';
import SignUpForm from '../components/SignUpPage/SignUpForm';
import { setUser } from '../store/slices/formUserSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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
       
        <div className="styledLogincontainer">
          <SignUpForm handleSignUp={handleSignUp} />
          <div className="styledLoginfooter">
            <LowSection />
          </div>

        </div>
      </main>
    </>
  );
};

export default SignUpPage;
