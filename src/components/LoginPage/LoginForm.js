import React, { useEffect } from 'react';
import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './styledLoginForm.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  loginUser,
  setData,
} from '../../store/slices/formLoginSlice';
const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const error = useSelector(state => state.log.error)
  const success = useSelector(state => state.log.success)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLog = async e => {
    e.preventDefault();
    dispatch(setData({ username }));
    dispatch(loginUser({username, password} ));
     
  };

  useEffect(()=> {
    if (success && !error) {
      navigate('/account_blogger');
    } 
  },[success, error, navigate])

  return (
    <div>
      <Box className="styledForm">
        <h1 className="styledLoginTitle">Вход</h1>
        <p>{error}</p>
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
