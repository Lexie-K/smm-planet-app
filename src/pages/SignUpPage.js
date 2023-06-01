import React from 'react';
import SignUpForm from '../components/SignUpPage/SignUpForm';
import { setUser } from '../store/slices/formSignupSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/HomePage/SearchBar';
import Filters from '../components/HomePage/Filters';
import LowSection from '../components/HomePage/LowSection';

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
      <section className="styledHomeContainer">
        <SearchBar />
        <Filters />

        <section>
          <SignUpForm handleSignUp={handleSignUp} />
          <footer className="signupformFooter">
            <LowSection />
          </footer>
        </section>
      </section>
    </>
  );
};

export default SignUpPage;
