import React from "react";
import { Grid } from "@mui/material";
import { NavLink } from "react-router-dom";
import "./styledNavTable.scss"
const NavTable = ({handleDisabled}) => {
 
  
  return (
    <Grid
        container
        spacing={1}
        sx={{
          fontSize: { xs: '0.75rem', md: '20px', lg: '20px' },
        }}
      >
        <Grid
          item
          xs={12}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: { xs: 9, md: 10, lg: 12.5 },
          }}
        >
          <NavLink
            style={{ textDecoration: 'none', cursor: 'pointer' }}
            className="styledSizeContainer styledAdTitle"
          >
            {' '}
            Блогер
          </NavLink>
          <NavLink
            style={{ textDecoration: 'none', cursor: 'pointer' }}
            className="styledSizeContainer"
          >
            Рекламодатель
          </NavLink>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: { xs: 7.5, lg: 10 },
          }}
        >
          <NavLink to="/account_blogger"
            style={{
              textDecoration: 'none',
              cursor: 'pointer',
              color: '#FF3600',
            }}
            className="styledSizeContainer"
          >
            Профиль
          </NavLink>
          <NavLink to="/finance_blogger"
            style={{ textDecoration: 'none', cursor: 'pointer' }}
            className="styledSizeContainer"
          >
            Финансы
          </NavLink>
          <NavLink to="/orders_blogger"
            style={{ textDecoration: 'none', cursor: 'pointer' }}
            className="styledSizeContainer"
          >
            Заказы
          </NavLink>
        </Grid>
        <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'row' }}>
          <button onClick={() => (handleDisabled())} className="styledSizeContainer" style={{ color: '#FF3600' }}>
            Изменить профиль
          </button>
        </Grid>
      </Grid>
  )
};

export default NavTable;
