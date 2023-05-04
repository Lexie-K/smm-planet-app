import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
} from '@mui/material';
import { TextareaAutosize } from '@mui/base';

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
  link
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
    'www'
  ),
];

const ChatTable = () => {
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
                <TableCell align="center">{row.emotion}</TableCell>
                <TableCell align="center">{row.followerprice}</TableCell>
                <TableCell align="center">{row.link}</TableCell>
                <TableCell align="center">
                  <Checkbox />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div>Чат</div>

      <TextareaAutosize
        placeholder="блогер-клиент"
        minRows={10}
        style={{ width: 300, resize: 'none' }}
      />
      <div>
        <button>Прикрепить файл</button>
        <button>Отправить</button>
      </div>
    </>
  );
};

export default ChatTable;
