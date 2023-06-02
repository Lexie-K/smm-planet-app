import { Box } from '@mui/material';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './StyledLayout.scss';
import { useAuth } from '../../hooks/useAuth.js';
import CustomAxios from '../utils/axios';
import { useDispatch } from 'react-redux';
import { clearLoginForm } from '../../store/slices/formLoginSlice';
const Header = () => {
  const { isAuth } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = async () => {
    dispatch(clearLoginForm());
    CustomAxios.delete(`${process.env.REACT_APP_SERVER_ENDPOINT}/api/account/`);
    localStorage.clear();
    navigate('/');
  };
  return (
    <>
      {/* {!isAuth ? ( */}
        <header>
          <nav className="styledHeaderContainer">
            <p className="styledName">
              SMMPlaneta{' '}
              <em className="styledMainTitle">более 50000 блогеров</em>
            </p>
            <Box
              display="flex"
              direction="row"
              gap={3.5}
              alignItems="baseline"
              sx={{ padding: { md: '9px 22px', xs: '14px 0px' } }}
            >
              {' '}
              <Link
                to="/contactspage"
                style={{ textDecoration: 'none', cursor: 'pointer' }}
              >
                <p className="styledHiddenNavigation">Контакты</p>
              </Link>
              <Link
                to="/signuppage"
                style={{ textDecoration: 'none', cursor: 'pointer' }}
              >
                <p className="styledHiddenNavigation">Зарегистрироваться</p>
              </Link>
              <button
                className="styledEnterBtn"
                onClick={() => navigate('/loginpage')}
              >
                Войти
              </button>
            </Box>
          </nav>
        </header>
      {/* ) : ( */}
        {/* <div className="styledExitBtnContainer"> */}
{/*          
            <button className="styledExitBtn" onClick={handleLogout}>
              Выйти
            </button> */}
          
        {/* </div> */}
      {/* ) */}
      {/* } */}
    </>
  );
};

export default Header;
