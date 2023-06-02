import React, { useDeferredValue, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setClearPage,
  setInput,
  
} from '../../store/slices/searchSlice';
import { useTransition } from 'react';
import { Box, InputBase, Button } from '@mui/material';
import { fetchBloggers } from '../../store/slices/searchSlice';
const style = {
  paddingLeft: '10px',
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  height: { xs: '1.875rem', md: '2.875rem', lg: '2.875rem' },
  borderRadius: '20px',
  boxShadow: '2px 2px 10px 2px rgba(255, 54, 0, 0.25)',
  margin: { xs: '0px', md: '3.5rem 5rem' },
  marginTop: { xs: '24px' },
  '@media(max-width:768px)': {
    minWidth: '100%',
  },
};

const SearchBar = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector(state => state.search.inputValue);
  const currentPage = useSelector(state => state.search.currentPage);
  const chosenCategory = useSelector(state => state.search.chosenCategory);
  const deferredQuery = useDeferredValue(inputValue);
  const changeHandler = e => {
    e.preventDefault();
    dispatch(setInput(e.target.value));
    dispatch(setClearPage());
  };

  useEffect(() => {
    dispatch(fetchBloggers({ inputValue, currentPage, chosenCategory }));
  }, [deferredQuery]);

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      dispatch(fetchBloggers({ inputValue, currentPage, chosenCategory }));
    }
  };

  const clickHandler = e => {
    e.preventDefault();
    dispatch(fetchBloggers({ inputValue, currentPage, chosenCategory }));
  };

  return (
    <div className="styledSearchContainer">
      <Box component="form" sx={style}>
        <InputBase
          inputProps={{ 'aria-label': 'search' }}
          value={inputValue}
          type="text"
          onChange={changeHandler}
          onKeyDown={handleKeyDown}
          autoFocus={true}
        />
        <Button
          type="button"
          sx={{
            padding: { xs: '7px 13px', md: '16px 80px 16px 78px' },
            color: 'white',
            backgroundColor: 'rgba(255, 54, 0, 0.8)',
            borderRadius: '20px',
            fontSize: { xs: '14px', md: '14x', lg: '14px' },
            fontFamily: 'Roboto',
            fontWeight: 700,
          }}
          aria-label="search"
          onClick={clickHandler}
        >
          поиск
        </Button>
      </Box>
    </div>
  );
};

export default SearchBar;
