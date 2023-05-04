import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setInput, setResult } from '../../store/slices/searchSlice';
import { useTransition } from 'react';
import { Box, InputBase, Button } from '@mui/material';

const style = {
  paddingLeft: '10px',
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  height: { xs: '1.875rem', md: '2.875rem', lg: '2.875rem' },
  borderRadius: '20px',
  boxShadow: '2px 2px 10px 2px rgba(0, 0, 0, 0.25);',
  margin: { xs: '1.438rem', md: '3.5rem 5rem' },
  '@media(max-width:768px)': {
    minWidth: '100%',
  },
};

const SearchBar = () => {
  const [isPending, startTransition] = useTransition();
  const dispatch = useDispatch();
  const inputValue = useSelector(state => state.search.inputValue);

  const changeHandler = e => {
    e.preventDefault();
    dispatch(setInput(e.target.value));
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      e.preventDefault();

      startTransition(() => {
        dispatch(setResult());
      });
    }
  };

  const clickHandler = e => {
    e.preventDefault();
    startTransition(() => {
      dispatch(setResult());
    });
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
            padding: { xs: '7px 18px', md: '16px 80px 12px 77px' },
            textAlign: 'end',
            color: 'white',
            backgroundColor: 'rgba(255, 54, 0, 0.8)',
            borderRadius: '20px',
            fontSize: { xs: '0.875rem', md: '1.125rem', lg: '1.125rem' },
            fontFamily: 'Roboto',
          }}
          aria-label="search"
          onClick={clickHandler}
        >
          Поиск
        </Button>
      </Box>
    </div>
  );
};

export default SearchBar;
