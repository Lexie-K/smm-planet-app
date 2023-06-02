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
  // const status = useSelector(state => state.search.success);
  const currentPage = useSelector(state => state.search.currentPage);
  const totalCount = useSelector(state => state.search.totalCount);
  const inputValue = useSelector(state => state.search.inputValue);
  const chosenCategory = useSelector(state => state.search.chosenCategory);
  const allResults = useSelector(state => state.search.allResults);
  useEffect(() => {
    if (fetch && !chosenCategory) {
      CustomAxios.get(
        `${process.env.REACT_APP_SERVER_ENDPOINT}/api/bloggers/?page=${currentPage}&page_size=8&search=${inputValue}`
      )
        .then(response => {
          dispatch(setMoreBloggers(response.data.results));

          setFetch(false);
        })
        .finally(() => setFetch(false));
    }

    if (fetch && chosenCategory) {
      CustomAxios.get(
        `${process.env.REACT_APP_SERVER_ENDPOINT}/api/bloggers/${chosenCategory}/?page=${currentPage}&page_size=8&search=${inputValue}`
      )
        .then(response => {
          dispatch(setMoreBloggers(response.data.results));

          setFetch(false);
        })
        .finally(() => setFetch(false));
    }
  }, [fetch, currentPage]);

  const handleScroll = async () => {
    const scrollHeight = document.documentElement.scrollHeight;

    const scrollTop = document.documentElement.scrollTop;

    const clientScroll = document.documentElement.clientHeight;
    if (
      scrollTop + clientScroll >= scrollHeight &&
      result.length < totalCount
    ) {
      dispatch(setLoadmore());
      setFetch(true);
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [totalCount]);

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
