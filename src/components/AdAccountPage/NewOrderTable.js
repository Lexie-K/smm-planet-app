import React from 'react';
import { Box, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import './StyledNewOrder.scss';
const NewOrderTable = () => {
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
            gap: { xs: 9, md: 10, lg: 17.5 },
          }}
        >
          <Link style={{ textDecoration: 'none', cursor: 'pointer' }}>
            {' '}
            Блогер
          </Link>
          <Link style={{ textDecoration: 'none', cursor: 'pointer' }} className="styledAdTitle">
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
          <Link style={{ textDecoration: 'none', cursor: 'pointer',  color: '#FF3600' }}>
            Заказы
          </Link>
        </Grid>
        <Grid
          item
          xs={2}
          sx={{ display: 'flex', flexDirection: 'row', whiteSpace: 'wrap' }}
        >
          <Link style ={{ color: '#FF3600'}}>Разместить новый заказ</Link>
        </Grid>
      </Grid>

      <div className="styledCreateOrderContainer">
        <p className="styledLabelCreateOrderInput">№ заказа</p>
        <div className="cell">
          <input type="text" className="styledCreateOrderForm" placeholder="" />
        </div>
        <p className="styledLabelCreateOrderInput">Компания</p>
        <div className="cell">
          <input type="text" className="styledCreateOrderForm" placeholder="" />
        </div>
        <p className="styledLabelCreateOrderInput">Регион</p>
        <div className="cell">
          <input type="text" className="styledCreateOrderForm" placeholder="" />
        </div>
        <p className="styledLabelCreateOrderInput">Срок исполнения</p>
        <div className="cell">
          <input type="text" className="styledCreateOrderForm" placeholder="" />
        </div>
        <p className="styledLabelCreateOrderInput">Задание</p>
        <div className="cell">
          <textarea type="text" className="styledCreateTask" />
        </div>
        <p className="styledLabelCreateOrderInput">Фото</p>
        <div className="cell">
          <input type="text" className="styledCreateOrderForm" />
        </div>
        <p className="styledLabelCreateOrderInput">Видео</p>
        <div className="cell">
          <input type="text" className="styledCreateOrderForm" />
        </div>
        <p className="styledLabelCreateOrderInput">Cоцсети</p>
        <div className="cell">
          <input type="text" className="styledCreateOrderForm" />
        </div>
        <p className="styledLabelCreateOrderInput">Сумма, руб.</p>
        <div className="cell">
          <input type="text" className="styledCreateOrderForm" />
        </div>
        <p className="styledLabelCreateOrderInput">Кол-во блогеров</p>
        <div className="cell">
          <input type="text" className="styledCreateOrderForm" />
        </div>
        <p className="styledLabelCreateOrderInput">Охват</p>
        <div className="cell">
          <input type="text" className="styledCreateOrderForm" />
        </div>
        <div className="styledNewOrderBtnsContainer">
          <button className="styledBtnOrder">Разместь заказ</button>
          <button className="styledChooseBloggerBtn">Выбрать блогеров</button>
        </div>
      </div>
    </Box>
  );
};

export default NewOrderTable;
