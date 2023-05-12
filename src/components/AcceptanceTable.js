import React from 'react';
import { Box, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './StyledAcceptanceTable.scss';

function createData(
  socialNetwork,
  blogger,
  topic,
  followers,
  posts,
  likes,
  budget,
  emotion,
  followerprice,
  link,
  acceptall,
  chat
) {
  return {
    socialNetwork,
    blogger,
    topic,
    followers,
    posts,
    likes,
    budget,
    emotion,
    followerprice,
    link,
    acceptall,
    chat,
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
    '100',
    'happiness (30%)',
    '1',
    'www',
    'button',
    'chat'
  ),
  createData(
    'TikTok',
    'B',
    'food',
    '100',
    '200',
    '200',
    '100',
    'happiness (30%)',
    '1',
    'www',
    'button',
    'chat'
  ),
  createData(
    'TikTok',
    'C',
    'food',
    '100',
    '200',
    '200',
    '100',
    'happiness (30%)',
    '1',
    'www',
    'button',
    'chat'
  ),
  createData(
    'TikTok',
    'D',
    'food',
    '100',
    '200',
    '200',
    '100',
    'happiness (30%)',
    '1',
    'www',
    'button',
    'chat'
  ),
  createData(
    'TikTok',
    'E',
    'food',
    '100',
    '200',
    '200',
    '100',
    'happiness (30%)',
    '1',
    'www',
    'button',
    'chat'
  ),
  createData(
    'TikTok',
    'F',
    'food',
    '100',
    '200',
    '200',
    '100',
    'happiness (30%)',
    '1',
    'www',
    'button',
    'chat'
  ),
  createData(
    'TikTok',
    'G',
    'food',
    '100',
    '200',
    '200',
    '100',
    'happiness (30%)',
    '1',
    'www',
    'button',
    'chat'
  ),
  createData(
    'TikTok',
    'H',
    'food',
    '100',
    '200',
    '200',
    '100',
    'happiness (30%)',
    '1',
    'www',
    'button',
    'chat'
  ),
  createData(
    'TikTok',
    'I',
    'food',
    '100',
    '200',
    '200',
    '100',
    'happiness (30%)',
    '1',
    'www',
    'button',
    'chat'
  ),
];

const thTitle = [
  'Соцсеть',
  'Блогер',
  'Тематика',
  'Подписчики',
  'Кол-во постов',
  'Кол-во лайков',
  'Бюджет',
  'Преобладающая эмоция',
  'Цена за подписчика, руб',
  'Ссылка на пост',
  'Принять все',
  'Чат с блогером',
];

const AcceptanceTable = () => {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate('/chatpage');
  };
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
            lg: '50px 3.063rem',
            md: '50px 3.063rem',
            xs: '4.375rem 0 3.125rem 0',
          },
          background: 'rgba(252, 225, 200, 0.65)',
          boxShadow: '5px 5px 7px rgb(0 0 0 / 25%)',
          borderRadius: '30px',
          overflow: {
            xs: 'scroll',
            md: 'hidden',
            lg: 'hidden'
          }
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
        <table className="styledOrderTable">
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
                  <td key={index}>{row.socialNetwork}</td>
                  <td key={index}>{row.blogger}</td>
                  <td key={index}>{row.topic}</td>
                  <td key={index}>{row.followers}</td>
                  <td key={index}>{row.posts}</td>
                  <td key={index}>{row.likes}</td>
                  <td key={index}> {row.budget}</td>
                  <td key={index}>{row.emotion}</td>
                  <td key={index}>{row.followerprice}</td>
                  <td key={index}>{row.link}</td>
                  <td key={index}>{row.acceptall}</td>
                  <td key={index}>
                    <button onClick={() => handleRedirect()}>{row.chat}</button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
        <section className="styledBottomContainer">
          <div className="styledAllTitle">Итого</div>
          <div className="styledTotalSumTitle">Сумма</div>
          <button className="styledAcceptBtn">Принять</button>
        </section>
      </Box>
    </>
  );
};

export default AcceptanceTable;
