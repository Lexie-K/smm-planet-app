import React from 'react';
import { Box, Grid } from '@mui/material';
import './StyledOrderTable.scss';
import { Link } from 'react-router-dom';

function createData(
  company,
  task,
  socialNetwork,
  region,
  money,
  date,
  status,
  chat
) {
  return { company, task, socialNetwork, region, money, date, status, chat };
}

const rows = [
  createData(
    'Компания 1',
    'Разместить фото и текст',
    'Instagram',
    'Moscow',
    '100',
    '01.03.2022',
    'Взять в работу',
    'обсудить с заказчиком'
  ),
  createData(
    'Компания 2',
    'Разместить фото и текст',
    'Instagram',
    'Moscow',
    '100',
    '01.03.2022',
    'Взять в работу',
    'обсудить с заказчиком'
  ),
  createData(
    'Компания 3',
    'Разместить фото и текст',
    'Instagram',
    'Moscow',
    '100',
    '01.03.2022',
    'Взять в работу',
    'обсудить с заказчиком'
  ),
  createData(
    'Компания 1',
    'Разместить фото и текст',
    'Instagram',
    'Moscow',
    '100',
    '01.03.2022',
    'Взять в работу',
    'обсудить с заказчиком'
  ),
  createData(
    'Компания 2',
    'Разместить фото и текст',
    'Instagram',
    'Moscow',
    '100',
    '01.03.2022',
    'Взять в работу',
    'обсудить с заказчиком'
  ),
  createData(
    'Компания 3',
    'Разместить фото и текст',
    'Instagram',
    'Moscow',
    '100',
    '01.03.2022',
    'Взять в работу',
    'обсудить с заказчиком'
  ),
  createData(
    'Компания 1',
    'Разместить фото и текст',
    'Instagram',
    'Moscow',
    '100',
    '01.03.2022',
    'Взять в работу',
    'обсудить с заказчиком'
  ),
  createData(
    'Компания 2',
    'Разместить фото и текст',
    'Instagram',
    'Moscow',
    '100',
    '01.03.2022',
    'Взять в работу',
    'обсудить с заказчиком'
  ),
  createData(
    'Компания 3',
    'Разместить фото и текст',
    'Instagram',
    'Moscow',
    '100',
    '01.03.2022',
    'Взять в работу',
    'обсудить с заказчиком'
  ),
  createData(
    'Компания 3',
    'Разместить фото и текст',
    'Instagram',
    'Moscow',
    '100',
    '01.03.2022',
    'Взять в работу',
    'обсудить с заказчиком'
  ),
];

const thTitle = [
  'Заказчик',
  'Задание',
  'Соцсеть',
  'Регион',
  'Сумма',
  'Срок',
  'Статус',
  'Чат',
];

const OrdersBloggerTable = () => {
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
              gap: { xs: 9, md: 10, lg: 14.5 },
            }}
          >
            <Link style={{ textDecoration: 'none', cursor: 'pointer' }} className='styledAdTitle'>
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
            <Link style={{ textDecoration: 'none', cursor: 'pointer', color: '#FF3600' }}>
              Заказы
            </Link>
          </Grid>
        </Grid>
        <br />
        <table className="styledOrderTable">
          <thead className="styledOrderTable">
            <tr>
              {thTitle.map((title, index) => (
                <th scope="col" value={title} key={index} rowSpan={8} className='styledHeaderOrderTable'>
                  {title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <>
                <tr colSpan={8} >
                  <td key={index}>{row.company}</td>
                  <td key={index}>{row.task}</td>
                  <td key={index}>{row.socialNetwork}</td>
                  <td key={index}>{row.region}</td>
                  <td key={index}>{row.money}</td>
                  <td key={index}>{row.date}</td>
                  <td key={index}>{row.status}</td>
                  <td key={index}>{row.chat}</td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </Box>
    </>
  );
};

export default OrdersBloggerTable;
