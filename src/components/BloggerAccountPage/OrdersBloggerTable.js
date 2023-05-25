import React from 'react';
import { Box, Grid } from '@mui/material';
import './StyledOrderTable.scss';
import { Link } from 'react-router-dom';
import NavTable from '../NavTableSection/NavTable';

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
          background: 'rgba(252, 225, 200, 0.65)',
          boxShadow: '5px 5px 7px rgb(0 0 0 / 25%)',
          borderRadius: '30px',
          overflow: 'auto',
        }}
      >
        <NavTable />
        <br />
        <table className="styledOrderTable">
          <thead>
            <tr>
              {thTitle.map((title, index) => (
                <th
                  scope="col"
                  value={title}
                  key={index}
                  rowSpan={8}
                  className="styledHeaderOrderTable"
                >
                  {title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <>
                <tr colSpan={8}>
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
