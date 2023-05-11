import React from 'react';
import { Grid } from '@mui/material';
import './StyledBloggerTable.scss';
import { Link } from 'react-router-dom';

const BloggerMainTable = () => {
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
    </div>
  );
};

export default BloggerMainTable;
