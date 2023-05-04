import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const styles = {
  minWidth: 650,
  '& .MuiTableCell-root': {
    border: '1px solid black',
  },
  
};

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
  chat 
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

const AcceptanceTable = () => {

  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate('/chatpage');
  }
  return (
    <>
      <TableContainer component={Paper} elevation={0}>
        <Table sx={styles} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={1}>
                Соцсеть
              </TableCell>
              <TableCell align="center" colSpan={1}>
                Блогер
              </TableCell>
              <TableCell align="center" colSpan={1}>
                Тематика
              </TableCell>
              <TableCell align="center" colSpan={1}>
                Подписчики
              </TableCell>
              <TableCell align="center" colSpan={1}>
                Кол-во постов
              </TableCell>
              <TableCell align="center" colSpan={1}>
                Кол-во лайков
              </TableCell>
              <TableCell align="center" colSpan={1}>
                Бюджет
              </TableCell>
              <TableCell align="center" colSpan={1}>
                Преобладающая эмоция
              </TableCell>
              <TableCell align="center" colSpan={1}>
                Цена за подписчика, руб
              </TableCell>
              <TableCell align="center" colSpan={1}>
                Ссылка на пост
              </TableCell>
              <TableCell align="center" colSpan={1}>
                Принять все
              </TableCell>
              <TableCell align="center" colSpan={1}>
                Чат с блогером
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.name}>
                {/* <TableCell component="th" scope="row">
                {row.name}
              </TableCell> */}
                
                <TableCell align="center">{row.socialNetwork}</TableCell>
                <TableCell align="center">{row.blogger}</TableCell>
                <TableCell align="center">{row.topic}</TableCell>
                <TableCell align="center">{row.followers}</TableCell>
                <TableCell align="center">{row.posts}</TableCell>
                <TableCell align="center">{row.likes}</TableCell>
                <TableCell align="center">{row.budget}</TableCell>
                <TableCell align="center">{row.emotion}</TableCell>
                <TableCell align="center">{row.followerprice}</TableCell>
                <TableCell align="center">{row.link}</TableCell>
                <TableCell align="center">{row.acceptall}</TableCell>
                <TableCell align="center"><button onClick={()=> handleRedirect()}>{row.chat}</button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{ display: 'inline', paddingRight: '50rem' }}>Итого</div>
      <div style={{ display: 'inline' }}>Сумма</div>
      <button style={{ display: 'block', padding: '1rem' }}>Принять</button>
    </>
  );
};

export default AcceptanceTable;
