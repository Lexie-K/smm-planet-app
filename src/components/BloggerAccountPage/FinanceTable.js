import React from 'react';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import './StyledBloggerFinance.scss'
const FinanceTable = () => {
  return (
    <div className="styledMainContainer">
      <Grid
        container
        spacing={1}
        sx={{
          fontSize: { xs: '0.75rem', md: '1.125rem', lg: '1.125rem' },
        }}
      >
        <Grid
          item
          xs={12}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: { xs: 9, md: 10, lg: 17.5 },
          }}
        >
          <Link style={{ textDecoration: 'none', cursor: 'pointer' }}>
            {' '}
            Блогер
          </Link>
          <Link style={{ textDecoration: 'none', cursor: 'pointer' }}>
            Рекламодатель
          </Link>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: { xs: 7.5, lg: 15 },
          }}
        >
          <Link style={{ textDecoration: 'none', cursor: 'pointer' }}>
            Профиль
          </Link>
          <Link style={{ textDecoration: 'none', cursor: 'pointer' }}>
            Финансы
          </Link>
          <Link style={{ textDecoration: 'none', cursor: 'pointer' }}>
            Заказы
          </Link>
        </Grid>
        <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'row' }}>
          <Link>Изменить профиль</Link>
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
          <input
            type="text"
            placeholder=""
            className="styledInputForm"
          />
        </div>
      </div>
    </div>
  );
};

export default FinanceTable;
