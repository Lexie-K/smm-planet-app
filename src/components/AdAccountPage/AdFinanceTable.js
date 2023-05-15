import React from 'react';
import { Grid, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const AdFinanceTable = () => {
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
            gap: { xs: 9, md: 10, lg: 12.5 },
          }}
        >
          <Link style={{ textDecoration: 'none', cursor: 'pointer' }}>
            {' '}
            Блогер
          </Link>
          <Link
            style={{ textDecoration: 'none', cursor: 'pointer' }}
            className="styledAdTitle"
          >
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
          <Link style={{ textDecoration: 'none', cursor: 'pointer' }}>
            Профиль
          </Link>
          <Link
            style={{
              textDecoration: 'none',
              cursor: 'pointer',
              color: '#FF3600',
            }}
          >
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
    </Box>
  );
};

export default AdFinanceTable;
