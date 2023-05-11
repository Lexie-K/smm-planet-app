import React from 'react';
import { Grid, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './StyledNewOrder.scss';
const NewOrderTable = () => {
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
        <Grid
          item
          xs={2}
          sx={{ display: 'flex', flexDirection: 'row', whiteSpace: 'wrap' }}
        >
          <Link>Разместить новый заказ</Link>
        </Grid>
      </Grid>

      <div class="styledCreateOrderContainer">
        <p className="styledLabelCreateOrderInput">№ заказа</p>
        <div class="cell">
          <input type="text" className="styledCreateOrderForm" placeholder="" />
        </div>
        <p className="styledLabelCreateOrderInput">Компания</p>
        <div class="cell">
          <input type="text" className="styledCreateOrderForm" placeholder="" />
        </div>
        <p className="styledLabelCreateOrderInput">Регион</p>
        <div class="cell">
          <input type="text" className="styledCreateOrderForm" placeholder="" />
        </div>
        <p className="styledLabelCreateOrderInput">Срок исполнения</p>
        <div class="cell">
          <input type="text" className="styledCreateOrderForm" placeholder="" />
        </div>
        <p className="styledLabelCreateOrderInput">Задание</p>
        <div class="cell">
          <textarea type="text" className="styledCreateTask" />
        </div>
        <p className="styledLabelCreateOrderInput">Фото</p>
        <div class="cell">
          <input type="text" className="styledCreateOrderForm" />
        </div>
        <p className="styledLabelCreateOrderInput">Видео</p>
        <div class="cell">
          <input type="text" className="styledCreateOrderForm" />
        </div>
        <p className="styledLabelCreateOrderInput">Cоцсети</p>
        <div class="cell">
          <input type="text" className="styledCreateOrderForm" />
        </div>
        <p className="styledLabelCreateOrderInput">Сумма, руб.</p>
        <div class="cell">
          <input type="text" className="styledCreateOrderForm" />
        </div>
        <p className="styledLabelCreateOrderInput">Кол-во блогеров</p>
        <div class="cell">
          <input type="text" className="styledCreateOrderForm" />
        </div>
        <p className="styledLabelCreateOrderInput">Охват</p>
        <div class="cell">
          <input type="text" className="styledCreateOrderForm" />
        </div>
        <div class="styledNewOrderBtnsContainer">
          <button className="styledBtnOrder">Разместь заказ</button>
          <button className="styledChooseBloggerBtn">Выбрать блогеров</button>
        </div>
      </div>
    </div>
  );
};

export default NewOrderTable;
