import React from 'react';
import LoginForm from '../components/LoginPage/LoginForm';
import { setUser } from '../store/slices/formUserSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LowSection from '../components/HomePage/LowSection';
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
    <div>
      <LoginForm handleLogin={handleLogin} />
      <LowSection />
    </div>
  );
};

export default LoginPage;
