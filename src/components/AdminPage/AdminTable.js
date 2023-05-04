import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box
} from '@mui/material';

const style = {
  "& .MuiTableCell-root": {
    border: '1px solid black'
  }
};
function createData(company, blogger, finance, chat) {
  return { company, blogger, finance, chat };
}

const rows = [
  createData('Компания 1', 'A','100', 'chat'),
  createData('Компания 2', 'B','200', 'chat'),
  createData('Компания 3', 'C','300', 'chat'),
];

const AdminPage = () => {
  return (
  <div>
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
        <p>Статистика</p>
    <TableContainer >
      <Table sx={style} size="small"  padding="none" aria-label="simple table">
        <TableHead>
          <TableRow sx={{
                  backgroundColor: '#F09E56',
                  borderBottom: '2px solid black',
                  borderColumn: 'grey',
                  '& th': {
                    fontSize: { md: '1.125rem', lg: '1.125rem', xs: '0.75rem' },
                    color: '#0D0D0D',
                    fontFamily: 'Roboto',
                    fontWeight: { xs: '700', md: '400', lg: '400' },
                  },
                }}>
            <TableCell align="center" colSpan={1} >
              Рекламодатели
            </TableCell>
            <TableCell align="center" colSpan={1}>
              Блогеры
            </TableCell>
            <TableCell align="center" colSpan={1}>
              Финансы
            </TableCell>
            <TableCell align="center" colSpan={1}>
              Чат
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell align="center">{row.company}</TableCell>
              <TableCell align="center">{row.blogger}</TableCell>
              <TableCell align="center">{row.finance}</TableCell>
              <TableCell align="center">{row.chat}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

      </Box>

    
  </div>
  
  )
};

export default AdminPage;