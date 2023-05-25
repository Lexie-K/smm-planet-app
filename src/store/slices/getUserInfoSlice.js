import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import CustomAxios from '../../components/utils/axios/index.js';


const initialState = {
  email: null,
  username: null,
  first_name: null,
  last_name: null,
  token: null,
  success: false,
  error: null,
  loading: false,
};

// const backendURL = `${process.env.REACT_APP_SERVER_ENDPOINT}/api`;
export const getUserData = createAsyncThunk(
  'getUserInfo/getdata',
  async ({ username, email, first_name, last_name }, { rejectWithValue }) => {
    try {
      const response = await CustomAxios.put(`account/`, {
        username,
        email,
        first_name,
        last_name,
      });
      

      return response.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        rejectWithValue(error.message);
      }
    }
  }
);

const getUserInfoSlice = createSlice({
  name: 'getUserInfo',
  initialState,
  reducers: {
    setAccountInfo(state, action) {
      // state.username = username;
      state.email = action.payload.email;
      state.first_name = action.payload.first_name;
      state.last_name = action.payload.last_name;
      state.username = action.payload.username;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getUserData.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserData.fulfilled, state => {
        state.loading = false;
        state.success = true;
      })
      .addCase(getUserData.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const { setAccountInfo } = getUserInfoSlice.actions;

export default getUserInfoSlice.reducer;
