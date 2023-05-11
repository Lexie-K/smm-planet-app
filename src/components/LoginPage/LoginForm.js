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
            placeholder="пароль"
            type="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="styledLogininput"
          />

          <button className="styledLoginBtn">Войти</button>
        </form>
        <Box
          sx={{
            display: 'flex',
            gap: { xs: 6, md: 8 },
            alignItems: 'baseline',
            justifyContent: 'space-around',
          }}
        >
          <Typography
            component="p"
            sx={{
              whiteSpace: 'nowrap',
              fontSize: { md: '1.125rem', xs: '12px' },
              fontFamily: 'Roboto',
              color: '#0D0D0D',
            }}
          >
            Забыли пароль?
          </Typography>
          <Link href="/*">{`Восстановить`}</Link>
        </Box>
      </Box>
    </div>
  );
};

export default LoginForm;
