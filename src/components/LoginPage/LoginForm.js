import React, { useEffect } from 'react';
import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './styledLoginForm.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearLoginForm,
  loginUser,
  setData,
} from '../../store/slices/formLoginSlice';
const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLog = async e => {
    e.preventDefault();
    dispatch(setData({ username }));
    // dispatch(clearLoginForm());
    dispatch(loginUser({ username, password }));
    navigate('/account_blogger');   
  };

  // useEffect(()=> {
  //   if (success) {
  //     navigate('/account_blogger');
  //   } else {
  //     navigate('/loginpage');
  //   }
  // },[success, navigate])

  return (
    <div>
      <Box className="styledForm">
        <p className="styledLoginTitle">Вход</p>
        <form className="styledLoginFormSize" onSubmit={handleLog}>
          <input
            id="username"
            placeholder="username"
            name="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="styledLogininput"
            required
          />

          <input
            name="password"
            placeholder="Пароль"
            type="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="styledLogininput"
            required
          />

          <button className="styledLoginBtn">Войти</button>
          <Box
            sx={{
              display: 'flex',
              gap: { xs: 6, md: 13 },
              alignItems: 'baseline',
              justifyContent: 'space-evenly',
            }}
          >
            <Typography
              component="p"
              sx={{
                whiteSpace: 'nowrap',
                fontSize: { lg: '18px', md: '18px', xs: '12px' },
                fontFamily: 'Roboto',
                color: '#0D0D0D',
              }}
            >
              Забыли пароль?
            </Typography>
            <Link href="/*">{`Восстановить`}</Link>
          </Box>
        </form>
      </Box>
    </div>
  );
};

export default LoginForm;
