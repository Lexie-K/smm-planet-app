import React from 'react';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import './StyledBloggerFinance.scss';
const FinanceTable = () => {
  return (
    <div className="styledMainContainer">
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
        <Link style={{ textDecoration: 'none', cursor: 'pointer' }} className='styledFinContainer styledAdTitle'>
          {' '}
          Блогер
        </Link>
        <Link style={{ textDecoration: 'none', cursor: 'pointer' }} className='styledFinContainer'>
          Рекламодатель
        </Link>
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
        <Link style={{ textDecoration: 'none', cursor: 'pointer' }} className='styledFinContainer'>
          Профиль
        </Link>
        <Link style={{ textDecoration: 'none', cursor: 'pointer', color: '#FF3600' }} className='styledFinContainer' >
          Финансы
        </Link>
        <Link style={{ textDecoration: 'none', cursor: 'pointer' }} className='styledFinContainer'>
          Заказы
        </Link>
      </Grid>
      <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'row' }}>
        <Link className='styledFinContainer' style={{color: '#FF3600'}}>Изменить профиль</Link>
      </Grid>
    </Grid>

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
    </div>
  );
};

export default FinanceTable;
