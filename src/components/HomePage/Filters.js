import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { MenuItem, Select, Grid, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  setCategory,
  setBrand,
  setAge,
  setGender,
  setRegion,
} from '../../store/slices/searchSlice';
import './StyledLayout.scss';

const Filters = () => {
  //Example of different categories
  const categories = ['A', 'B', 'C'];

  const brands = ['A', 'B', 'C'];

  const ages = ['1', '2', '3'];

  const genders = ['M', 'W'];

  const regions = ['E', 'U'];
  //Example of different categories
  const dispatch = useDispatch();
  const categoryChosen = useSelector(state => state.search.chosenCategory);
  const brandChosen = useSelector(state => state.search.chosenBrand);
  const ageChosen = useSelector(state => state.search.chosenAge);
  const genderChosen = useSelector(state => state.search.chosenGender);
  const regionChosen = useSelector(state => state.search.chosenRegion);

  const changeFilterCategoryHandler = e => {
    dispatch(setCategory(e.target.value));
  };

  const changeFilterBrandHandler = e => {
    dispatch(setBrand(e.target.value));
  };

  const changeFilterAgeHandler = e => {
    dispatch(setAge(e.target.value));
  };

  const changeFilterGenderHandler = e => {
    dispatch(setGender(e.target.value));
  };

  const changeFilterRegionHandler = e => {
    dispatch(setRegion(e.target.value));
  };

  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          margin: { xs: '0px', md: '10px 71px' },
          marginTop: {xs: '14px'}
          
        }}
      >
        <Grid
          container
          xs={12}
          md={12}
          
          spacing={{ xs: 2, sm: 1, md: 1 }}
          columnSpacing={0.5}
          sx={{ justifyContent: 'space-around' }}
        >
          <Grid item xs={5} md={2.1}>
            <Select
              fullWidth
              labelId="select-category"
              id="categories"
              value={categoryChosen}
              onChange={changeFilterCategoryHandler}
              IconComponent={KeyboardArrowDownIcon}
              inputProps={{ 'aria-label': 'Without label' }}
              displayEmpty
              sx={{
                borderRadius: '20px',
                height: { xs: '1.625rem', md: '2.5rem', lg: '2.5rem' },
                overflow: 'visible',
                minWidth: '140px',
                // paddingLeft: {xs: '0px', md: '20px', lg: '20px'},
                fontFamily: 'Roboto',
                fontSize: { xs: '0.75rem', md: '1.125rem', lg: '1.125rem' },
                background: '#FEFEFE'
              }}
            >
              <MenuItem value="">Категории</MenuItem>
              {categories.map((category, index) => (
                <MenuItem value={category} key={index}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={5} md={3.4}>
            <Select
              fullWidth
              labelId="select-brand"
              id="brands"
              value={brandChosen}
              onChange={changeFilterBrandHandler}
              IconComponent={KeyboardArrowDownIcon}
              inputProps={{ 'aria-label': 'Without label' }}
              displayEmpty
              sx={{
                borderRadius: '20px',
                minWidth: '140px',
                height: { xs: '1.625rem', md: '2.5rem', lg: '2.5rem' },
                // paddingLeft: {xs: '0px', md: '15px', lg: '15px'},
                fontSize: { xs: '0.75rem', md: '1.125rem', lg: '1.125rem' },
                fontFamily: 'Roboto',
                background: '#FEFEFE'
              }}
            >
              <MenuItem value="">Бренды</MenuItem>
              {brands.map((brand, index) => (
                <MenuItem value={brand} key={index}>
                  {brand}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={4.4} md={1.6}>
            <Select
              fullWidth
              labelId="select-age"
              id="ages"
              value={ageChosen}
              onChange={changeFilterAgeHandler}
              IconComponent={KeyboardArrowDownIcon}
              inputProps={{ 'aria-label': 'Without label' }}
              displayEmpty
              style={{ shrink: 'false' }}
              sx={{
                borderRadius: '20px',
                height: { xs: '1.625rem', md: '2.5rem', lg: '2.5rem' },
                minWidth: '102px',
                fontSize: { xs: '0.75rem', md: '1.125rem', lg: '1.125rem' },
                fontFamily: 'Roboto',
                // paddingLeft: {xs: '0px', md: '12px', lg: '12px'},
                background: '#FEFEFE'
              }}
            >
              <MenuItem value="" inputProps={{ shrink: false }}>
                Возраст
              </MenuItem>
              {ages.map((age, index) => (
                <MenuItem value={age} key={index}>
                  {age}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item sx={4} md={2.4}>
            <Select
              fullWidth
              labelId="select-gender"
              id="genders"
              value={genderChosen}
              onChange={changeFilterGenderHandler}
              IconComponent={KeyboardArrowDownIcon}
              inputProps={{ 'aria-label': 'Without label' }}
              displayEmpty
              sx={{
                borderRadius: '20px',
                minWidth: '70px',
                fontSize: { xs: '0.75rem', md: '1.125rem', lg: '1.125rem' },
                height: { xs: '1.625rem', md: '2.5rem', lg: '2.5rem' },
                fontFamily: 'Roboto',
                // paddingLeft: {xs: '0px', md: '14px', lg: '14px'},
                background: '#FEFEFE'
              }}
            >
              <MenuItem value="">Пол</MenuItem>
              {genders.map((gender, index) => (
                <MenuItem value={gender} key={index}>
                  {gender}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item sx={3} md={2.2}>
            <Select
              fullWidth
              labelId="select-region"
              id="regions"
              value={regionChosen}
              onChange={changeFilterRegionHandler}
              IconComponent={KeyboardArrowDownIcon}
              inputProps={{ 'aria-label': 'Without label' }}
              displayEmpty
              sx={{
                minWidth: '102px',
                borderRadius: '20px',
                height: { xs: '1.625rem', md: '2.5rem', lg: '2.5rem' },
                fontSize: { xs: '0.75rem', md: '1.125rem', lg: '1.125rem' },
                fontFamily: 'Roboto',
                // paddingLeft: {xs: '0px', md: '17px', lg: '17px'},
                background: '#FEFEFE'
              }}
              className="StyledSelectSize"
            >
              <MenuItem value="">Регион</MenuItem>
              {regions.map((region, index) => (
                <MenuItem value={region} key={index}>
                  {region}
                </MenuItem>
              ))}
            </Select>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Filters;
