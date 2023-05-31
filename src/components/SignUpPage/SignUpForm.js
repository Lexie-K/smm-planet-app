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
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})$/;
const USER_REGEX = /^[\w.@+-]{4,150}$/;
const NAME_REGEX = /^[а-яё]{2,}$/;
const SURNAME_REGEX = /^[а-яё]+(?:[ -]{1}[а-яё]*)?$/i;
const SignUpForm = ({ handleSignUp }) => {
  // const errorRef = useRef();
  const userRef = useRef();
  const emailRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const [role, setRole] = useState('');

  const error = useSelector(state => state.auth.error);
  const success = useSelector(state => state.auth.success);

  const options = [
    { label: 'Выберите свою роль', value: '' },
    { label: 'Блогер', value: 'blogger' },
    { label: 'Рекламодатель', value: 'advertiser' },
  ];

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch(setUser({ username }));
    // dispatch(clearForm());
    dispatch(
      registerUser({
        username,
        password,
        password2,
        email,
        first_name,
        last_name,
        role,
      })
    );
  };

  useEffect(() => {
    if (success && !error) {
      navigate('/loginpage');
    }
  }, [success, error, navigate]);

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

  useEffect(() => {
    const resultuser = USER_REGEX.test(username);
    setValidName(resultuser);
  }, [username]);

  useEffect(() => {
    const resultfirst_name = NAME_REGEX.test(first_name);
    setValidFirstName(resultfirst_name);
  }, [first_name]);

  useEffect(() => {
    const resultlast_name = SURNAME_REGEX.test(last_name);
    setValidLastName(resultlast_name);
  }, [last_name]);

  const handleRole = e => {
    e.preventDefault();
    setRole(e.target.value);
  };

  // useEffect(() => {
  //   setErrorMsg('');
  // }, [username, password, password2]);

  return (
    <>
      <Box className="styledSignupForm">
        <h1 className="styledSignupTitle">Регистрация</h1>
        <p>{error}</p>
        <form className="styledSignupFormSize" onSubmit={handleSubmit}>
          <label>
            <span className={validEmail ? 'valid' : 'hide'}>
              <CheckIcon sx={{ fontSize: { md: 20, lg: 20, xs: 10 } }} />
            </span>
            <span className={validEmail || !email ? 'hide' : 'invalid'}>
              <ClearIcon sx={{ fontSize: { md: 20, lg: 20, xs: 10 } }} />
            </span>
            <input
              type="text"
              id="email"
              placeholder="Email"
              name="email"
              value={email}
              className="styledSignupinput"
              ref={emailRef}
              autoComplete="off"
              required
              onChange={e => setEmail(e.target.value)}
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
              aria-invalid={validEmail ? 'false' : 'true'}
              aria-describedby="emailnote"
            />
          </label>
          <p
            id="emailnote"
            className={
              emailFocus && email && !validEmail ? 'instructions' : 'offscreen'
            }
          >
            Обязательное поле. Проверьте правильность указанного адреса
            электронной почты
          </p>

          <label>
            <select
              value={role}
              id="role"
              name="selectedRole"
              className="styledSignupinput"
              onChange={handleRole}
            >
              {options.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label>
            <span className={validFirstName ? 'valid' : 'hide'}>
              <CheckIcon sx={{ fontSize: { md: 20, lg: 20, xs: 10 } }} />
            </span>
            <span
              className={validFirstName || !first_name ? 'hide' : 'invalid'}
            >
              <ClearIcon sx={{ fontSize: { md: 20, lg: 20, xs: 10 } }} />
            </span>

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
          </label>
          <p
            id="confirm_firstname"
            className={first_name.length === 1 ? 'instructions' : 'offscreen'}
          >
            Обязательное поле. Ошибка ввода
          </p>

          <label>
            <span className={validLastName ? 'valid' : 'hide'}>
              <CheckIcon sx={{ fontSize: { md: 20, lg: 20, xs: 10 } }} />
            </span>
            <span
              className={validLastName || !last_name ? 'hide' : 'invalid'}
            >
              <ClearIcon sx={{ fontSize: { md: 20, lg: 20, xs: 10 } }} />
            </span>

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
          </label>
          <p
            id="confirm_lastname"
            className={last_name.length === 1 ? 'instructions' : 'offscreen'}
          >
            Обязательное поле. Ошибка ввода
          </p>

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
              !validFirstName ||
              !validLastName ||
              !validEmail ||
              !validName ||
              !validPassword ||
              !validMatch
                ? true
                : false
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
