import React from 'react';
import { Grid, Box } from '@mui/material';
import './StyledBloggerTable.scss';
import { Link } from 'react-router-dom';

const BloggerMainTable = () => {
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
    {/* <div className="styledMainContainer"> */}
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
          <Link style={{ textDecoration: 'none', cursor: 'pointer'}} className='styledSizeContainer styledAdTitle'>
            {' '}
            Блогер
          </Link>
          <Link style={{ textDecoration: 'none', cursor: 'pointer' }} className='styledSizeContainer'>
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
          <Link style={{ textDecoration: 'none', cursor: 'pointer', color: '#FF3600' }} className='styledSizeContainer'>
            Профиль
          </Link>
          <Link style={{ textDecoration: 'none', cursor: 'pointer' }} className='styledSizeContainer'>
            Финансы
          </Link>
          <Link style={{ textDecoration: 'none', cursor: 'pointer' }} className='styledSizeContainer'>
            Заказы
          </Link>
        </Grid>
        <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'row' }}>
          <Link className='styledSizeContainer' style={{color: '#FF3600'}}>Изменить профиль</Link>
        </Grid>
      </Grid>

      <div class="styledBloggerContainer">
        <p className="styledLabelInput">Email</p>
        <div class="cell">
          <input type="text" className="styledInputForm" />
        </div>
        <p className="styledLabelInput">Имя</p>
        <div class="cell">
          <input type="text" className="styledInputForm" />
        </div>
        <p className="styledLabelInput">Фамилия</p>
        <div class="cell">
          <input type="text" className="styledInputForm" />
        </div>
        <p className="styledLabelInput">Instagram</p>
        <div class="cell">
          <input
            type="text"
            placeholder="nickname"
            className="styledInputForm"
          />
          <input
            type="text"
            placeholder="цена за пост"
            className="styledInputCost"
          />
          <button className="styledBtn">
            Разрешить доступ к статистике аккаунта
          </button>
        </div>
        <p className="styledLabelInput">Tiktok</p>
        <div class="cell">
          <input
            type="text"
            placeholder="nickname"
            className="styledInputForm"
          />
          <input
            type="text"
            placeholder="цена за пост"
            className="styledInputCost"
          />
          <button className="styledBtn">
            Разрешить доступ к статистике аккаунта
          </button>
        </div>
        <p className="styledLabelInput">Сменить пароль</p>
        <div class="cell">
          <input type="text" className="styledInputForm" />
        </div>
      </div>
    {/* </div> */}
    </Box>
  );
};

export default BloggerMainTable;
