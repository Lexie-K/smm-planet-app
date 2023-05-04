import React, { useEffect, useRef } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { useState } from 'react';
const EMAIL_REGEX = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const SignUpForm = ({ handleSignUp }) => {
  const emailRef = useRef();
  const errorRef = useRef();

  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [password, setPassword] = useState('');
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [matchPassword, setMatchPassword] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errorMessage, setErrorMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSign = () => {
    handleSignUp(email, password);
  };

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    const resultmail = EMAIL_REGEX.test(email);
    setValidEmail(resultmail);
  }, [email]);

  useEffect(() => {
    const resultpwd = PWD_REGEX.test(password);
    setValidPassword(resultpwd);
    const match = password === matchPassword;
    setValidMatch(match);
  }, [password, matchPassword]);

  useEffect(() => {
    setErrorMessage('');
  }, [email, password, matchPassword]);

  return (
    <section>
      <Box className="styledForm">
        <Typography component="h1" variant="h5">
          Регистрация
        </Typography>
        <form className="styledFormSize">
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            placeholder="E-mail"
            name="email"
            ref={emailRef}
            autoComplete="off"
            autoFocus
            required
            onChange={e => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            placeholder="пароль"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            placeholder="пароль"
            type="password"
            id="password"
            autoComplete="current-password"
            value={matchPassword}
            onChange={e => setMatchPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSign}
            disabled={
              !validEmail || !validPassword || !validMatch ? true : false
            }
          >
            Зарегистрироватья
          </Button>
        </form>
      </Box>
    </section>
  );
};

export default SignUpForm;
