import React, { useEffect, useState } from 'react';
import moment from 'moment/moment';
import { Grid, CardMedia, Card, CardContent } from '@mui/material';
import './styledHomePage.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchBloggers,
  setLoadmore,
  setMoreBloggers,
  setResetCurrentPage,
} from '../../store/slices/searchSlice';
import CustomAxios from '../utils/axios';

const ShowResult = () => {
  const [fetch, setFetch] = useState(false);

  const pic = require('./rectangle.png');

  const result = useSelector(state => state.search.showResultBloggers);
  const dispatch = useDispatch();
  const currentPage = useSelector(state => state.search.currentPage);
  const totalCount = useSelector(state => state.search.totalCount);
  const inputValue = useSelector(state => state.search.inputValue);

  const isLimit = totalCount !== null && result.length >= totalCount;
 
  const loadCards = async () => {
    if (isLimit) {
      return;
    }
    dispatch(fetchBloggers({ inputValue, currentPage }));
  };

  useEffect(() => {
    loadCards();
  }, [currentPage]);

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;

    const scrollTop = document.documentElement.scrollTop;

    const clientScroll = document.documentElement.clientHeight;

   
    if (scrollTop + clientScroll >= scrollHeight && !isLimit) {
      dispatch(setLoadmore());
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [isLimit]);

  return (
    <>
      <div className="styledShowAccountsContainer">
        <Grid
          container
          justify="center"
          rowSpacing={4}
          columnSpacing={{ xs: 6 }}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {result?.map(item => {
            return (
              <Grid item xs={6} sm={4} md={4} lg={3} key={item?.id}>
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
                    {item?.nickname}
                    <p>Соцсеть: </p>
                    {item?.social}
                    <p>Кол-во подписчиков: </p>
                    {item?.subscribers}
                    <p>Кол-во лайков: </p>
                    {/* {item.likes} */}
                    <p>Кол-во постов </p>
                    {/* {item.posts} */}
                    <p>Дата создания:</p>
                    {moment(item?.created).format('DD.MM.YY')}
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </>
  );
};
// </div>
//   );
// };

export default ShowResult;
