import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox
} from '@mui/material';

const styles = {
  minWidth: 650,
  "& .MuiTableCell-root": {
    border: '1px solid black'
  },
  "& .MuiTableCell-root:first-child" : {
    border: 'none'
},

};

function createData(socialNetwork, blogger, topic, followers,posts,likes,emotion,postprice, followerprice) {
  return { socialNetwork, blogger, topic, followers,posts,likes,emotion,postprice, followerprice};
}

const rows = [
  createData('TikTok', 'A','food', '100', '200','200', "happiness (30%)", '100', '1'),
  createData('TikTok', 'B','food', '100', '200','200', "happiness (30%)", '100', '1'),
  createData('TikTok', 'C','food', '100', '200','200', "happiness (30%)", '100', '1'),
  createData('TikTok', 'D','food', '100', '200','200', "happiness (30%)", '100', '1'),
  createData('TikTok', 'E','food', '100', '200','200', "happiness (30%)", '100', '1'),
  createData('TikTok', 'F','food', '100', '200','200', "happiness (30%)", '100', '1'),
  createData('TikTok', 'G','food', '100', '200','200', "happiness (30%)", '100', '1'),
  createData('TikTok', 'H','food', '100', '200','200', "happiness (30%)", '100', '1'),
  createData('TikTok', 'I','food', '100', '200','200', "happiness (30%)", '100', '1'),
];

const CheckBoxTable = () => {
  return (
    <>
    <TableContainer component={Paper} elevation={0}>
      <Table sx={styles} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell align="center" colSpan={1}>
              выбрать всех
            </TableCell>
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
              Цена за пост, руб
            </TableCell>
            <TableCell align="center" colSpan={1}>
              Цена за подписчика, руб
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              {/* <TableCell component="th" scope="row">
                {row.name}
              </TableCell> */}
              <Checkbox/>
              <TableCell align="center">{row.socialNetwork}</TableCell>
              <TableCell align="center">{row.blogger}</TableCell>
              <TableCell align="center">{row.topic}</TableCell>
              <TableCell align="center">{row.followers}</TableCell>
              <TableCell align="center">{row.posts}</TableCell>
              <TableCell align="center">{row.likes}</TableCell>
              <TableCell align="center">{row.emotion}</TableCell>
              <TableCell align="center">{row.postprice}</TableCell>
              <TableCell align="center">{row.followerprice}</TableCell>
              

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <div style={{display:"inline", padding:"1rem"}}>Сумма заказа</div><div style={{display:"inline"}}>30 000 руб.</div>
    <button style={{display:"block", padding:"1rem"}}>Заказать</button>
    </>
  );
};

export default CheckBoxTable;
