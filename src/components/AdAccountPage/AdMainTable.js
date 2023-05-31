import React from 'react';
import { Grid, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './StyledAdTable.scss';
const AdMainTable = () => {
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
            gap: { xs: 7.5, lg: 10 },
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

      <div className="styledAdAccountContainer">
        <p className="styledLabelFinanceInput">Рекламодатель</p>
        <div className="cell">
          <input type="text" className="styledFinanceForm" placeholder="" />
        </div>
        <p className="styledLabelFinanceInput">ИНН</p>
        <div className="cell">
          <input type="text" className="styledFinanceForm" placeholder="" />
        </div>
        <p className="styledLabelFinanceInput">Адрес</p>
        <div className="cell">
          <input type="text" className="styledFinanceForm" placeholder="" />
        </div>
        <p className="styledLabelFinanceInput">Телефон</p>
        <div className="cell">
          <input type="text" className="styledFinanceForm" placeholder="" />
        </div>
        <p className="styledLabelFinanceInput">E-mail</p>
        <div className="cell">
          <input type="text" className="styledFinanceForm" />
        </div>
        <p className="styledLabelFinanceInput">Website</p>
        <div className="cell">
          <input type="text" className="styledFinanceForm" />
        </div>
        <p className="styledLabelFinanceInput">Сменить пароль</p>
        <div className="cell">
          <input type="text" className="styledFinanceForm" />
        </div>
      </div>
    </Box>
  );
};

export default AdMainTable;
