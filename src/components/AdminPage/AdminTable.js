import React from 'react';
import { Box } from '@mui/material';
import './StyledAdminTable.scss';

function createData(company, blogger, finance, chat) {
  return { company, blogger, finance, chat };
}

const rows = [
  createData('Компания 1', 'A', '100', 'chat'),
  createData('Компания 2', 'B', '200', 'chat'),
  createData('Компания 3', 'C', '300', 'chat'),
];
const thTitle = ['Рекламодатели', 'Блогеры', 'Финансы', 'Чат'];

const AdminPage = () => {
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
          
          overflow: 'auto',
          background: 'rgba(252, 225, 200, 0.65)',
          boxShadow: '5px 5px 7px rgb(0 0 0 / 25%)',
          borderRadius: '30px',
        }}
      >
        <h4 className="styledTitle">Статистика</h4>
        <table className="styledAdminTable">
          <thead>
            {thTitle.map((title, index) => (
              <tr>
                <th value={title} key={index} rowSpan={4}>
                  {title}
                </th>
              </tr>
            ))}
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <>
                <tr colSpan={4}>
                  <td key={index}>{row.company}</td>
                  <td key={index}>{row.blogger}</td>
                  <td key={index}>{row.finance}</td>
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

export default AdminPage;
