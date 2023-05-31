import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  username: null,
  password: null,
  token: null,
  success: false,
  error: null,
};

export const loginUser = createAsyncThunk(
  'log/login',
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_ENDPOINT}/api/account/token/`,
        { username, password },
        config
      );

      localStorage.setItem('access', response.data.access);
      localStorage.setItem('refresh', response.data.refresh);
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${response.data.access}`,
      };
      const loginresponse = await axios.post(
        `${process.env.REACT_APP_SERVER_ENDPOINT}/api/account/login/`,
        { username, password },
        config
      );
    } catch (error) {
      if (error.response) {
        return rejectWithValue(error.response.data.detail);
      } else {
        rejectWithValue(error.message);
      }
    }
  }
);

const formSignupSlice = createSlice({
  name: 'log',
  initialState,
  reducers: {
    setData(state, action) {
      const { username, access, id } = action.payload;
      state.username = username;
      state.token = access;
      state.id = id;
    },
    // clearLoginForm(state) {
    //   state.username = null;
    //   state.token = null;
    //   state.id = null;
    // },
  },
  extraReducers: builder => {
    builder
      .addCase(loginUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, state => {
        state.loading = false;
        state.success = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        // state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setData, clearLoginForm } = formSignupSlice.actions;

export default formSignupSlice.reducer;
