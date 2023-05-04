import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Grid,
} from '@mui/material';
import { Link } from 'react-router-dom';

const style = {
  minWidth: 650,
  '& .MuiTableCell-root': {
    border: '1px solid black',
  },
};

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
        <TableContainer component={Paper}>
          <Table sx={style} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center" colSpan={1}>
                  Название компании
                </TableCell>
                <TableCell align="center" colSpan={1}>
                  Бюджет
                </TableCell>
                <TableCell align="center" colSpan={1}>
                  Дата
                </TableCell>
                <TableCell align="center" colSpan={1}>
                  Соцсеть
                </TableCell>
                <TableCell align="center" colSpan={1}>
                  Статус исполнения
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
                  <TableCell align="center">{row.budget}</TableCell>
                  <TableCell align="center">{row.date}</TableCell>
                  <TableCell align="center">{row.socialNetwork}</TableCell>
                  <TableCell align="center">{row.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default AdOrderTable;
