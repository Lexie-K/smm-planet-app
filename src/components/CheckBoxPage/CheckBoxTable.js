import React from 'react';
import { Grid, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './StyledCheckBoxTable.scss';

function createData(
  socialNetwork,
  blogger,
  topic,
  followers,
  posts,
  likes,
  emotion,
  postprice,
  followerprice
) {
  return {
    socialNetwork,
    blogger,
    topic,
    followers,
    posts,
    likes,
    emotion,
    postprice,
    followerprice,
  };
}

const rows = [
  createData(
    'TikTok',
    'A',
    'food',
    '100',
    '200',
    '200',
    'happiness (30%)',
    '100',
    '1'
  ),
  createData(
    'TikTok',
    'B',
    'food',
    '100',
    '200',
    '200',
    'happiness (30%)',
    '100',
    '1'
  ),
  createData(
    'TikTok',
    'C',
    'food',
    '100',
    '200',
    '200',
    'happiness (30%)',
    '100',
    '1'
  ),
  createData(
    'TikTok',
    'D',
    'food',
    '100',
    '200',
    '200',
    'happiness (30%)',
    '100',
    '1'
  ),
  createData(
    'TikTok',
    'E',
    'food',
    '100',
    '200',
    '200',
    'happiness (30%)',
    '100',
    '1'
  ),
  createData(
    'TikTok',
    'F',
    'food',
    '100',
    '200',
    '200',
    'happiness (30%)',
    '100',
    '1'
  ),
  createData(
    'TikTok',
    'G',
    'food',
    '100',
    '200',
    '200',
    'happiness (30%)',
    '100',
    '1'
  ),
  createData(
    'TikTok',
    'H',
    'food',
    '100',
    '200',
    '200',
    'happiness (30%)',
    '100',
    '1'
  ),
  createData(
    'TikTok',
    'I',
    'food',
    '100',
    '200',
    '200',
    'happiness (30%)',
    '100',
    '1'
  ),
];

const thTitle = [
  'выбрать всех',
  'Соцсеть',
  'Блогер',
  'Тематика',
  'Подписчики',
  'Кол-во постов',
  'Кол-во лайков',
  'Преобладающая эмоция',
  'Цена за пост, руб',
  'Цена за подписчика, руб',
];

const CheckBoxTable = () => {
  return (
    <>
      <Box
        component="form"
        autoComplete="off"
        sx={{
          padding: {
            xs: '1.688rem 0.625rem',
            md: '2.5rem 2.375rem',
            lg: '2.5rem 2.375rem',
          },
          margin: {
            lg: '6.25rem 3.063rem',
            md: '6.25rem 3.063rem',
            xs: '4.375rem 0 3.125rem 0',
          },
          background: 'rgba(252, 225, 200, 0.65)',
          boxShadow: '5px 5px 7px rgb(0 0 0 / 25%)',
          borderRadius: '30px',
          overflow: 'scroll',
        }}
      >
        <Grid
          container
          spacing={1}
          sx={{ fontSize: { xs: '0.75rem', md: '1.125rem', lg: '1.125rem' } }}
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
        <br />
        <table className="styledCheckBoxTable">
          <thead className="styledOrderTable">
            <tr>
              {thTitle.map((title, index) => (
                <th scope="col" value={title} key={index}>
                  {title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <>
                <tr>
                  <td key={index}>
                    <input type="checkbox" className="styledCheckbox" />
                  </td>
                  <td key={index}>{row.socialNetwork}</td>
                  <td key={index}>{row.blogger}</td>
                  <td key={index}>{row.topic}</td>
                  <td key={index}>{row.followers}</td>
                  <td key={index}>{row.posts}</td>
                  <td key={index}>{row.likes}</td>
                  <td key={index}>{row.emotion}</td>
                  <td key={index}>{row.postprice}</td>
                  <td key={index}>{row.followerprice}</td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
        <section className="styledBottomCheckContainer">
          <div className="styledAmountTitle">Сумма заказа</div>
          <div className="styledTotalTitle">40 000 руб.</div>
          <button className="styledOrderBtn">Заказать</button>
        </section>
      </Box>
    </>
  );
};

export default CheckBoxTable;
