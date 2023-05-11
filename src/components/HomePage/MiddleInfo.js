import React from 'react';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { Box } from '@mui/material';
const MiddleInfo = () => {
  return (
    <section className="styledFirstContainer">
      <section className>
        <h1 className="styledMiddleTitle">
          SMM<span className="styledMiddleTitleSecondary">Planeta</span>
        </h1>
        <p className="styledSubMiddleTitle">решения и возможности</p>
      </section>
      <section className="styledMainPoints">
        <Box
          sx={{
            display: 'flex',
            rowGap: 1,
            columnGap: { xs: '9px', md: '30px' },
            alignItems: 'center',
          }}
        >
          <TaskAltIcon sx={{ fontSize: { xs: 'small', md: 'large' } }} />{' '}
          <p>Поиск автора</p>
        </Box>
        <br></br>
        <Box
          sx={{
            display: 'flex',
            rowGap: 1,
            columnGap: { xs: '9px', md: '30px' },
            alignItems: 'center',
          }}
        >
          <TaskAltIcon sx={{ fontSize: { xs: 'small', md: 'large' } }} />{' '}
          <p>Открытие сообщества</p>
        </Box>
        <br></br>
        <Box
          sx={{
            display: 'flex',
            rowGap: 4,
            columnGap: { xs: '9px', md: '30px' },
            alignItems: 'center',
          }}
        >
          <TaskAltIcon sx={{ fontSize: { xs: 'small', md: 'large' } }} />{' '}
          <p>Захват контента</p>
        </Box>
        <br></br>
        <Box
          sx={{
            display: 'flex',
            rowGap: 10,
            columnGap: { xs: '9px', md: '30px' },
            alignItems: 'center',
          }}
        >
          <TaskAltIcon sx={{ fontSize: { xs: 'small', md: 'large' } }} />{' '}
          <p>Адаптация и подбор персонала</p>
        </Box>
        <br></br>
        <Box
          sx={{
            display: 'flex',
            rowGap: 1,
            columnGap: { xs: '9px', md: '30px' },
            alignItems: 'center',
          }}
        >
          <TaskAltIcon sx={{ fontSize: { xs: 'small', md: 'large' } }} />{' '}
          <p>Управляй этим</p>
        </Box>
      </section>
    </section>
  );
};

export default MiddleInfo;
