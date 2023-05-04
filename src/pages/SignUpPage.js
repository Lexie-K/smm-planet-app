import React from 'react';
import SignUpForm from '../components/SignUpPage/SignUpForm';
import { setUser } from '../store/slices/formUserSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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
    <div>
      <SignUpForm handleSignUp= {handleSignUp} />
    </div>
  );
};

export default SignUpPage;
