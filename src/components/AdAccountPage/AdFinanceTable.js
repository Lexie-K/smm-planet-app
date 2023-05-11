import React from 'react';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const AdFinanceTable = () => {
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
      </Grid>

      <div class="styledFinanceContainer">
        <p className="styledLabelFinanceInput">Период</p>
        <div class="cell">
          <input
            type="text"
            className="styledFinanceForm"
            placeholder="с начала года"
          />
        </div>
        <p className="styledLabelFinanceInput">Приход</p>
        <div class="cell">
          <input
            type="text"
            className="styledFinanceForm"
            placeholder="6 600 руб"
          />
        </div>
        <p className="styledLabelFinanceInput">Расход</p>
        <div class="cell">
          <input
            type="text"
            className="styledFinanceForm"
            placeholder="5 450 руб"
          />
        </div>
        <p className="styledLabelFinanceInput">Баланс</p>
        <div class="cell">
          <input
            type="text"
            className="styledFinanceForm"
            placeholder="1 150 руб"
          />
        </div>
        <p className="styledLabelFinanceInput">Оплатить</p>
        <div class="cell">
          <input type="text" className="styledFinanceForm" />
        </div>
      </div>
    </div>
  );
};

export default AdFinanceTable;
