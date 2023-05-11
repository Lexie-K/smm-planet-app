import React from 'react';
import moment from 'moment/moment';
import { Grid, CardMedia, Card, CardContent } from '@mui/material';
import './styledHomePage.scss';
import { useSelector } from 'react-redux';

const filterResult = [
  {
    pic: '',
    account: 'A',
    followers: '1',
    likes: '200',
    posts: '300',
    created: '2020-06-16T12:24:16+03:00',
  },
  {
    pic: '',
    account: 'B',
    followers: '1',
    likes: '200',
    posts: '300',
    created: '2020-06-16T12:24:16+03:00',
  },
  {
    pic: '',
    account: 'C',
    followers: '100',
    likes: '200',
    posts: '300',
    created: '2020-06-16T12:24:16+03:00',
  },
  {
    pic: '',
    account: 'D',
    followers: '1',
    likes: '200',
    posts: '300',
    created: '2020-06-16T12:24:16+03:00',
  },
  {
    pic: '',
    account: 'E',
    followers: '1',
    likes: '200',
    posts: '300',
    created: '2020-06-16T12:24:16+03:00',
  },
  {
    pic: '',
    account: 'F',
    followers: '1',
    likes: '200',
    posts: '300',
    created: '2020-06-16T12:24:16+03:00',
  },
  {
    pic: '',
    account: 'G',
    followers: '1',
    likes: '200',
    posts: '300',
    created: '2020-06-16T12:24:16+03:00',
  },
  {
    pic: '',
    account: 'H',
    followers: '1',
    likes: '200',
    posts: '300',
    created: '2020-06-16T12:24:16+03:00',
  },
];

const ShowResult = () => {
  const pic = require('./rectangle.png');
  const isShowResult = useSelector(state => state.search.isResultShow);

  return (
    <div className="styledShowAccountsContainer">
      {isShowResult ? (
        <Grid container rowSpacing={4} columnSpacing={{ xs: 6, sm: 1, md: 10 }}>
          {filterResult.map(item => (
            <Grid
              item
              xs={6}
              sm={4}
              md={4}
              lg={3}
              key={item.id}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Card
                sx={{
                  minWidth: '100%',
                  height: '100%',
                  borderRadius: '0%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                style={{ border: 'none', boxShadow: 'none' }}
              >
                <CardMedia
                  component="img"
                  src={pic}
                  // alt={item.account}
                  sx={{
                    width: { md: '200px', lg: '200px', xs: '140px' },
                    height: { md: '200px', lg: '200px', xs: '140px' },
                    objectFit: 'contain',
                  }}
                />
                <CardContent
                  sx={{ paddingLeft: '0px' }}
                  className="styledCardText"
                >
                  <p>Аккаунт </p>
                  {/* {item.account} */}
                  <p>Кол-во подписчиков: </p>
                  {/* {item.followers} */}
                  <p>Кол-во лайков: </p>
                  {/* {item.likes} */}
                  <p>Кол-во постов </p>
                  {/* {item.posts} */}
                  <p>Дата создания:</p>
                  {/* {moment(item.updated).format('DD.MM.YY')} */}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : null}
    </div>
  );
};

export default ShowResult;
