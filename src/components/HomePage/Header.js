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
          alignItems="center"
          
        >
          
            {' '}
            <Link
              to="/afterauth/contactspage"
              style={{ textDecoration: 'none', cursor: 'pointer' }}
            >
              <p className=".styledHiddenNavigation">Контакты</p>
            </Link>
            <Link
              to="/afterauth/signuppage"
              style={{ textDecoration: 'none', cursor: 'pointer' }}
            >
              <p className=".styledHiddenNavigation">Зарегистрироваться</p>
            </Link>
         

          <Link to="afterauth/loginpage">
            <button className="styledEnterBtn">Войти</button>
          </Link>
        </Box>
      </nav>
    </header>
  );
};

export default Header;
