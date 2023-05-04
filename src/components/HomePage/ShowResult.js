import React from 'react';
import moment from 'moment/moment';
import {
  Grid,
  CardActionArea,
  CardMedia,
  Card,
  CardContent,
  Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';

const styles = {
  '& .MuiPaper-root.MuiCard-root ': {
    boxShadow: 'none',
  },

};

const filterResult = [
  {
    pic: '',
    account: 'A',
    followers: '100',
    likes: '200',
    posts: '300',
    created: '2020-06-16T12:24:16+03:00',
  },
  {
    pic: '',
    account: 'B',
    followers: '100',
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
    followers: '100',
    likes: '200',
    posts: '300',
    created: '2020-06-16T12:24:16+03:00',
  },
  {
    pic: '',
    account: 'E',
    followers: '100',
    likes: '200',
    posts: '300',
    created: '2020-06-16T12:24:16+03:00',
  },
  {
    pic: '',
    account: 'F',
    followers: '100',
    likes: '200',
    posts: '300',
    created: '2020-06-16T12:24:16+03:00',
  },
  {
    pic: '',
    account: 'G',
    followers: '100',
    likes: '200',
    posts: '300',
    created: '2020-06-16T12:24:16+03:00',
  },
  {
    pic: '',
    account: 'H',
    followers: '100',
    likes: '200',
    posts: '300',
    created: '2020-06-16T12:24:16+03:00',
  },
];

const ShowResult = () => {
  const pic = require('./rectangle.png')
  const isShowResult = useSelector(state => state.search.isResultShow)



  return (
    <div>
      {isShowResult ? (<Grid container rowSpacing={4} columnSpacing={2}>
        {filterResult.map(item => (
          <Grid item xs={6} sm={6} md={4} lg={3} key={item.id}  sx={styles}>
            <Card 
              sx={{
                width: '100%',
                height: '100%',
                borderRadius: '0%',
                
              }}
             
              

            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  src={pic}
                  // alt={item.account}
                  sx={{
                    maxWidth: '200px',
                    minWidth: '140px',
                    minHeight: '140px',
                    maxHeight: '200px',
                    objectFit: 'contain',
                  }}
                />
                <CardContent>
                  <Typography>
                    <p>Аккаунт {item.account}</p>
                  </Typography>
                  <Typography>
                    <p>Кол-во подписчиков {item.followers}</p>
                  </Typography>
                  <Typography>
                    <p>Кол-во лайков {item.likes}</p>
                  </Typography>
                  <Typography>
                    <p>Аккаунт {item.posts}</p>
                  </Typography>
                  <div>
                    <p>
                      Дата создания: {moment(item.updated).format('DD.MM.YYYY')}
                    </p>
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>): null}
      
    </div>
  );
};

export default ShowResult;
