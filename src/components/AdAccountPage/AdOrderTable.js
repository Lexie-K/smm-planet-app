import React from 'react';
import { Box, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import './StyledAdOrders.scss';

function createData(company, budget, date, socialNetwork, status) {
  return { company, budget, date, socialNetwork, status };
}

const rows = [
  createData('Заказ 1', '100', '01.01.2022', 'Instagram', '100%'),
  createData('Заказ 2', '200', '03.01.2022', 'TikTok', '100%'),
  createData('Заказ 3', '500', '02.01.2022', 'TikTok', '100%'),
  createData('Заказ 1', '100', '01.01.2022', 'Instagram', '100%'),
  createData('Заказ 2', '200', '03.01.2022', 'TikTok', '100%'),
  createData('Заказ 3', '500', '02.01.2022', 'TikTok', '100%'),
  createData('Заказ 1', '100', '01.01.2022', 'Instagram', '100%'),
  createData('Заказ 2', '200', '03.01.2022', 'TikTok', '100%'),
  createData('Заказ 3', '500', '02.01.2022', 'TikTok', '100%'),
  createData('Заказ 3', '500', '02.01.2022', 'TikTok', '100%'),
];
const thTitle = [
  'Название компании',
  'Бюджет',
  'Дата',
  'Соцсеть',
  'Статус исполнения',
];

const AdOrderTable = () => {
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
          <Grid
            item
            xs={1.5}
            sx={{ display: 'flex', flexDirection: 'row', whiteSpace: 'wrap' }}
          >
            <Link>Разместить новый заказ</Link>
          </Grid>
        </Grid>
        <br />
        <table className="styledAdOrderTable">
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
                  <td key={index}>{row.company}</td>
                  <td key={index}>{row.budget}</td>
                  <td key={index}>{row.date}</td>
                  <td key={index}>{row.socialNetwork}</td>
                  <td key={index}>{row.status}</td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </Box>
    </>
  );
};

export default AdOrderTable;
