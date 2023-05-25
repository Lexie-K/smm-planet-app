import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
  loading: false,
  username: null,
  password: null,
  token: null, //JWT
  id: null,
  success: false,
  error: null,
  role: null
};

// const backendURL = `${process.env.REACT_APP_SERVER_ENDPOINT}/api/`;
export const registerUser = createAsyncThunk(
  'auth/register',
  async (
    { username, password, password2, email, first_name, last_name, role },
    { rejectWithValue }
  ) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_ENDPOINT}/api/account/register/`,
        JSON.stringify({
          username,
          password,
          password2,
          email,
          first_name,
          last_name,
          role
        }),
        config
      );
      console.log(response.data);
      console.log(response.accessToken);
      console.log(JSON.stringify(response));
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        rejectWithValue(error.message);
      }
    }
  }
);

const formSignupSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action) {
      const { username, access, id } = action.payload;
      state.username = username;
      state.token = access;
      state.id = id;
    },
    clearForm(state) {
      state.username = null;
      state.token = null;
      state.id = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(registerUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, state => {
        state.loading = false;
        state.success = true;
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const { setUser, clearForm } = formSignupSlice.actions;

export default formSignupSlice.reducer;
