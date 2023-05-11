import React from 'react';
import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import './styledLoginForm.scss';

const LoginForm = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLog = () => {
    handleLogin(email, password);
  };

  return (
    <div>
      <Box className="styledForm">
        <p className="styledLoginTitle">Вход</p>
        <form className="styledLoginFormSize">
          <input
            id="email"
            placeholder="E-mail"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="styledLogininput"
          />

          <input
            name="password"
            placeholder="Пароль"
            type="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="styledLogininput"
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
              fontSize: {lg: '18px', md: '18px', xs: '12px' },
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
