import React from 'react';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import './StyledAdTable.scss';
const AdMainTable = () => {
  return (
    <div className="styledAdMainContainer">
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
            gap: { xs: 9, md: 13.5, lg: 13.5 },
          }}
        >
          <Link style={{ textDecoration: 'none', cursor: 'pointer' }}>
            {' '}
            Блогер
          </Link>
          <Link style={{ textDecoration: 'none', cursor: 'pointer' }} className='styledAdTitle'>
            Рекламодатель
          </Link>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: { xs: 7.5, lg: 11.2 },
          }}
        >
          <Link style={{ textDecoration: 'none', cursor: 'pointer', color: '#FF3600'}}>
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
          <Link style={{color: '#FF3600'}}>Изменить профиль</Link>
        </Grid>
      </Grid>

      <div class="styledAdAccountContainer">
        <p className="styledLabelFinanceInput">Рекламодатель</p>
        <div class="cell">
          <input type="text" className="styledFinanceForm" placeholder="" />
        </div>
        <p className="styledLabelFinanceInput">ИНН</p>
        <div class="cell">
          <input type="text" className="styledFinanceForm" placeholder="" />
        </div>
        <p className="styledLabelFinanceInput">Адрес</p>
        <div class="cell">
          <input type="text" className="styledFinanceForm" placeholder="" />
        </div>
        <p className="styledLabelFinanceInput">Телефон</p>
        <div class="cell">
          <input type="text" className="styledFinanceForm" placeholder="" />
        </div>
        <p className="styledLabelFinanceInput">E-mail</p>
        <div class="cell">
          <input type="text" className="styledFinanceForm" />
        </div>
        <p className="styledLabelFinanceInput">Website</p>
        <div class="cell">
          <input type="text" className="styledFinanceForm" />
        </div>
        <p className="styledLabelFinanceInput">Сменить пароль</p>
        <div class="cell">
          <input type="text" className="styledFinanceForm" />
        </div>
      </div>
    </div>
  );
};

export default AdMainTable;
