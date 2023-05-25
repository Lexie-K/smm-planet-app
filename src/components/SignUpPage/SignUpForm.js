import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import { useState } from 'react';
import './styledSignupForm.scss';
import ClearIcon from '@mui/icons-material/Clear';
import CheckIcon from '@mui/icons-material/Check';
import { useDispatch, useSelector } from 'react-redux';
import {
  setUser,
  clearForm,
  registerUser,
} from '../../store/slices/formSignupSlice';
import { useNavigate } from 'react-router-dom';

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
const USER_REGEX = /^[\w.@+-]{4,150}$/;
const SignUpForm = ({ handleSignUp }) => {
  // const errorRef = useRef();
  const userRef = useRef();
  const emailRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, success } = useSelector(state => state.auth);

  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [first_name, setFirst_name] = useState('');
  const [validFirstName, setValidFirstName] = useState(false);
  const [firstNameFocus, setFirstNameFocus] = useState(false);

  const [last_name, setLast_name] = useState('');
  const [validLastName, setValidLastName] = useState(false);
  const [lastNameFocus, setLastNameFocus] = useState(false);

  const [username, setUsername] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [password, setPassword] = useState('');
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [password2, setPassword2] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);
  const [role, setRole] = useState('blogger');
  //  const [error, setErrorMsg] = useState('');
  // const [success, setSuccess] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch(setUser({ username }));
    dispatch(clearForm());
    dispatch(
      registerUser({
        username,
        password,
        password2,
        email,
        first_name,
        last_name,
        role
      })
    );

  
      navigate('/loginpage');
   
    
  };

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    const resultmail = EMAIL_REGEX.test(email);
    setValidEmail(resultmail);
  }, [email]);

  useEffect(() => {
    const resultuser = USER_REGEX.test(username);
    setValidName(resultuser);
  }, [username]);

  useEffect(() => {
    const resultpwd = PWD_REGEX.test(password);
    setValidPassword(resultpwd);
    const match = password === password2;
    setValidMatch(match);
  }, [password, password2]);

  // useEffect(() => {
  //   setErrorMsg('');
  // }, [username, password, assword]);

  return (
    <>
      <Box className="styledSignupForm">
        {/* {err && <p className="errorMsg">{err}</p>} */}
        <h1 className="styledSignupTitle">Регистрация</h1>
        <form className="styledSignupFormSize" onSubmit={handleSubmit}>
          <input
            type="text"
            id="email"
            placeholder="Email"
            name="email"
            value={email}
            className="styledSignupinput"
            ref={emailRef}
            autoComplete="off"
            autoFocus
            required
            onChange={e => setEmail(e.target.value)}
          />
          {/* <p
            ref={errorRef}
            className={errorMessage ? 'errmsg' : 'offscreen'}
            aria-live="assertive"
          >
           
          </p>  */}

          <input
            type="text"
            id="role"
            name="role"
            value={role}
            className="styledSignupinput"
            readOnly
          />

          <input
            type="text"
            id="first_name"
            placeholder="имя"
            // ref={userRef}
            autoComplete="off"
            value={first_name}
            className="styledSignupinput"
            onChange={e => setFirst_name(e.target.value)}
            onFocus={() => setFirstNameFocus(true)}
            onBlur={() => setFirstNameFocus(false)}
            required
            // aria-invalid={validName ? 'false' : 'true'}
            // aria-describedby="uidnote"
          />

          <input
            type="text"
            id="last_name"
            // ref={userRef}
            autoComplete="off"
            value={last_name}
            placeholder="фамилия"
            className="styledSignupinput"
            onChange={e => setLast_name(e.target.value)}
            onFocus={() => setLastNameFocus(true)}
            onBlur={() => setLastNameFocus(false)}
            required
            // aria-invalid={validName ? 'false' : 'true'}
            // aria-describedby="uidnote"
          />

          <label>
            <span className={validName ? 'valid' : 'hide'}>
              <CheckIcon sx={{ fontSize: { md: 20, lg: 20, xs: 10 } }} />
            </span>
            <span className={validName || !username ? 'hide' : 'invalid'}>
              <ClearIcon sx={{ fontSize: { md: 20, lg: 20, xs: 10 } }} />
            </span>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              value={username}
              placeholder="username"
              className="styledSignupinput"
              onChange={e => setUsername(e.target.value)}
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
              required
              aria-invalid={validName ? 'false' : 'true'}
              aria-describedby="uidnote"
            />
          </label>
          <p
            id="uidnote"
            className={
              userFocus && username && !validName ? 'instructions' : 'offscreen'
            }
          >
            Обязательное поле. Не более 150 символов. Только буквы, цифры и
            символы @/./+/-/_.
          </p>
          <label>
            <span className={validPassword ? 'valid' : 'hide'}>
              <CheckIcon sx={{ fontSize: { md: 20, lg: 20, xs: 10 } }} />
            </span>
            <span className={validPassword || !password ? 'hide' : 'invalid'}>
              <ClearIcon sx={{ fontSize: { md: 20, lg: 20, xs: 10 } }} />
            </span>

            <input
              type="password"
              id="password"
              placeholder="пароль 1"
              aria-invalid={validPassword ? 'false' : 'true'}
              aria-describedby="pwdnote"
              required
              value={password}
              className="styledSignupinput"
              onChange={e => setPassword(e.target.value)}
              onFocus={() => setPasswordFocus(true)}
              onBlur={() => setPasswordFocus(false)}
            />
          </label>
          <p
            id="pwdnote"
            className={
              passwordFocus && username && !validPassword
                ? 'instructions'
                : 'offscreen'
            }
          >
            Обязательное поле. От 8 до 24 символов. Пароль должен содержать
            заглавные и строчные буквы, цифру и специальный символ.
          </p>
          <label>
            <span className={validMatch && password2 ? 'valid' : 'hide'}>
              <CheckIcon sx={{ fontSize: { md: 20, lg: 20, xs: 10 } }} />
            </span>
            <span className={validPassword || !password2 ? 'hide' : 'invalid'}>
              <ClearIcon sx={{ fontSize: { md: 20, lg: 20, xs: 10 } }} />
            </span>
            <input
              className="styledSignupinput"
              placeholder="пароль 2"
              type="password"
              id="confirm_password"
              required
              aria-invalid={validMatch ? 'false' : 'true'}
              aria-describedby="confirmnote"
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
              value={password2}
              onChange={e => setPassword2(e.target.value)}
            />
          </label>
          <p
            id="confirm_password"
            className={matchFocus && !validMatch ? 'instructions' : 'offscreen'}
          >
            Пароль должен совпадать
          </p>

          <button
            className="styledSignupBtn"
            type="submit"
            disabled={
              !validName || !validPassword || !validMatch ? true : false
            }
          >
            Зарегистрироватья
          </button>
        </form>
      </Box>
    </>
  );
};

export default SignUpForm;
