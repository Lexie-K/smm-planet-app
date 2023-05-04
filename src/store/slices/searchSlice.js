import { createSlice } from '@reduxjs/toolkit';



const initialState = {
  inputValue: '',
  chosenCategory: '',
  chosenBrand: '',
  chosenAge: '',
  chosenGender: '',
  chosenRegion: '',
  isResultShow : false,
};


const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setInput: (state, action) => {
      state.inputValue = action.payload;
    },
    setCategory: (state, action) => {
      state.chosenCategory = action.payload;
    },
    setBrand: (state, action) => {
      state.chosenBrand = action.payload;
    },
    setAge: (state, action) => {
      state.chosenAge = action.payload;
    },
    setGender: (state, action) => {
      state.chosenGender = action.payload;
    },
    setRegion: (state, action) => {
      state.chosenRegion = action.payload;
    },
    setReset: (state, action) => {
      state.chosenRegion = "";
      state.chosenGender = "";
      state.chosenAge = "";
      state.chosenBrand = "";
      state.chosenCategory = "";
    },
    setResult: (state, action) => {
      state.isResultShow = true;
      
    }
  },
});

export const { setInput, setCategory, setBrand, setAge, setGender, setRegion, setReset, setResult } = searchSlice.actions;

export default searchSlice.reducer;
