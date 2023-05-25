import React from 'react';
import { Grid, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './StyledBloggerFinance.scss';
import NavTable from '../NavTableSection/NavTable';
const FinanceTable = () => {
  return (
    <Box
      component="form"
      autoComplete="off"
      sx={{
        padding: {
          xs: '1.688rem 0.625rem',
          md: '2.5rem 2.375rem',
          lg: '2.5rem 2.375rem',
        },
        background: 'rgba(252, 225, 200, 0.65)',
        boxShadow: '5px 5px 7px rgb(0 0 0 / 25%)',
        borderRadius: '30px',
      }}
    >
      <NavTable />
      <div class="styledFinanceContainer">
        <p className="styledLabelFinanceInput">Ваш баланс</p>
        <div class="cell">
          <input type="text" className="styledFinanceForm" />
        </div>
        <p className="styledLabelFinanceInput">Внести деньги</p>
        <div class="cell">
          <input type="text" className="styledFinanceForm" />
        </div>
        <p className="styledLabelFinanceInput">Вывести деньги</p>
        <div class="cell">
          <input type="text" className="styledFinanceForm" />
        </div>
        <p className="styledLabelFinanceInput">Выписка</p>
        <div class="cell">
          <input type="text" placeholder="" className="styledFinanceForm" />
        </div>
      </div>
    </Box>
  );
};

export default FinanceTable;
