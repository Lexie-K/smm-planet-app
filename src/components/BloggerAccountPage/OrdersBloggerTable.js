import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Grid,
} from '@mui/material';
import { Link } from 'react-router-dom';

const style = {
  '& .MuiTableCell-root': {
    border: '1px solid black',
  },
};

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
          background: 'rgba(255, 118, 0, 0.2)',
          borderRadius: '1.875rem',
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
          <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'row' }}>
            <Link>Изменить профиль</Link>
          </Grid>
        </Grid>
        <br />
       
        <TableContainer>
          <Table sx={style} size="small" padding="none" aria-label="simple table">
            <TableHead>
              <TableRow
                sx={{
                  backgroundColor: '#F09E56',
                  borderBottom: '2px solid black',
                  borderColumn: 'grey',
                  '& th': {
                    fontSize: { md: '1.125rem', lg: '1.125rem', xs: '0.75rem' },
                    color: '#0D0D0D',
                    fontFamily: 'Roboto',
                    fontWeight: { xs: '700', md: '400', lg: '400' },
                  },
                }}
              >
                <TableCell
                  sx={{
                    border: '2px solid black',
                  }}
                  align="center"
                  colSpan={1}
                >
                  Заказчик
                </TableCell>
                <TableCell align="center" colSpan={1}>
                  Задание
                </TableCell>
                <TableCell align="center" colSpan={1}>
                  Соцсеть
                </TableCell>
                <TableCell align="center" colSpan={1}>
                  Регион
                </TableCell>
                <TableCell align="center" colSpan={1}>
                  Сумма
                </TableCell>
                <TableCell align="center" colSpan={1}>
                  Срок
                </TableCell>
                <TableCell align="center" colSpan={1}>
                  Статус
                </TableCell>
                <TableCell align="center" colSpan={1}>
                  Чат
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.name}>
                  {/* <TableCell component="th" scope="row">
                {row.name}
              </TableCell> */}
                  <TableCell align="center">{row.company}</TableCell>
                  <TableCell align="center">{row.task}</TableCell>
                  <TableCell align="center">{row.socialNetwork}</TableCell>
                  <TableCell align="center">{row.region}</TableCell>
                  <TableCell align="center">{row.money}</TableCell>
                  <TableCell align="center">{row.date}</TableCell>
                  <TableCell align="center">{row.status}</TableCell>
                  <TableCell align="center">{row.chat}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default OrdersBloggerTable;
