import React from 'react';
import { Box, Grid, TextareaAutosize } from '@mui/material';
import { Link } from 'react-router-dom';
import './StyledChatTable.scss';

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

const thTitle = [
  'Соцсеть',
  'Блогер',
  'Тематика',
  'Подписчики',
  'Кол-во постов',
  'Кол-во лайков',
  'Преобладающая эмоция',
  'Цена за подписчика, руб',
  'Ссылка на пост',
  'Принять все',
];

const ChatTable = () => {
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
        </Grid>
        <br />
        <table className="styledOrderTable">
          <thead className="styledOrderTable">
            <tr>
              {thTitle.map((title, index) => (
                <th
                  scope="col"
                  key={index}
                  rowSpan={10}
                  className="styledTableHead"
                >
                  {title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <>
                <tr colSpan={10}>
                  <td key={index}>{row.socialNetwork}</td>
                  <td key={index}>{row.blogger}</td>
                  <td key={index}>{row.topic}</td>
                  <td key={index}>{row.followers}</td>
                  <td key={index}>{row.posts}</td>
                  <td key={index}>{row.likes}</td>
                  <td key={index}>{row.emotion}</td>
                  <td key={index}>{row.followerprice}</td>
                  <td key={index}>{row.link}</td>
                  <td key={index}>
                    <input type="checkbox" className="styledCheckbox" />
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
        <form>
          <div className="styledformContainer">
            <label>
              <h4 className="styledChatTitle">Чат</h4>

              {/* <textarea
                name="postContent"
                // sx={{rows:{md:14, xs:10}, cols:{md:56}}}
                // // cols={56}
                // minRows={50}
              /> */}

              <TextareaAutosize
                maxRows={50}
                className="styledTextArea"
                placeholder="блогер-клиент"
                style={{ width: { xs: '279px', md: '392px', lg: '392px' } }}
              />
            </label>
            <div className="styledButtonContainer">
              <p>
                <label for="chooseFile" className="styledAttachinput">
                  Прикрепить файл{' '}
                </label>
              </p>
              <input type="file" name="attachfile" id="chooseFile" />

              <button className="styledSendBtn">Отправить</button>
            </div>
          </div>
        </form>
      </Box>
    </>
  );
};

export default ChatTable;
