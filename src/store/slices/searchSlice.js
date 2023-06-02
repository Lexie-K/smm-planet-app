import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import CustomAxios from '../../components/utils/axios';

const initialState = {
  inputValue: '',
  chosenCategory: '',
  chosenBrand: '',
  chosenAge: '',
  chosenGender: '',
  chosenRegion: '',
  isResultShow: false,
  success: false,
  error: null,
  showResultBloggers: [],
  allResults: [],
  currentPage: 1,
  totalCount: 0,
  status: 'idle',
};

export const fetchBloggers = createAsyncThunk(
  'search/showsearch',
  async ({ inputValue, currentPage, chosenCategory }, { rejectWithValue }) => {
    try {
      if (!chosenCategory) {
        const response = await CustomAxios.get(
          `bloggers/?page=${currentPage}&page_size=8&search=${inputValue}`
        );
        return response.data;
      }
      if (chosenCategory) {
        const response = await CustomAxios.get(
          `bloggers/${chosenCategory}/?page=${currentPage}&page_size=8&search=${inputValue}`
        );
        return response.data;
      }
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        rejectWithValue(error.message);
      }
    }
  }
);

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
      state.chosenRegion = '';
      state.chosenGender = '';
      state.chosenAge = '';
      state.chosenBrand = '';
      state.chosenCategory = '';
    },
    setResult: state => {
      state.isResultShow = true;
    },
    setLoadmore: state => {
      state.currentPage = state.currentPage + 1;
    },
    setClearPage: state => {
      state.currentPage = 1;
      state.showResultBloggers = [];
      state.allResults= [];
      state.totalCount= 0;

      // state.inputValue = '';
    },
    setMoreBloggers: (state, action) => {
      // state.allResults = [...state.allResults, .action.payload];
      state.showResultBloggers = [...state.showResultBloggers, ...action.payload];
     
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchBloggers.pending, state => {
        state.success = false;
        state.status = 'loading';
      })
      .addCase(fetchBloggers.fulfilled, (state, action) => {
        state.success = true;
        state.status = 'succeeded';
        state.totalCount = action.payload.count;
        state.showResultBloggers = action.payload.results;
        state.allResults = [...state.allResults, ...action.payload.results];
      })
      .addCase(fetchBloggers.rejected, (state, action) => {
        // state.status = 'failed';
        state.showResultBloggers = [];
        state.error = action.payload;
      });
  },
});

export const {
  setInput,
  setCategory,
  setResetCurrentPage,
  setBrand,
  setAge,
  setGender,
  setClearPage,
  setRegion,
  setReset,
  setResult,
  setLoadmore,
  setMoreBloggers,
} = searchSlice.actions;

export default searchSlice.reducer;
