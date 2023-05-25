import { Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './StyledLayout.scss';
const Header = () => {
  return (
    <header>
      <nav className="styledHeaderContainer">
        <p className="styledName">
          SMMPlaneta <em className="styledMainTitle">более 50000 блогеров</em>
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
          <Link to="/loginpage">
            <button className="styledEnterBtn">Войти</button>
          </Link>
        </Box>
      </nav>
    </header>
  );
};

export default Header;
