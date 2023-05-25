import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import CustomAxios from '../../components/utils/axios';
import axios from 'axios';

const initialState = {
  old_password: null,
  new_password: null,
  new_password_confirm: null,
  success: false,
  error: null,
  loading: false,
};




export const changePass = createAsyncThunk(
  'changeUserpass/changepass',
  async ({ old_password, new_password, new_password_confirm }, { rejectWithValue }) => {
    try {
      const response = await CustomAxios.put(`account/password_change/`, {
        old_password,
        new_password,
        new_password_confirm
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

const formChangePassSlice = createSlice({
  name: 'changeUserpass',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(changePass.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(changePass.fulfilled, state => {
        state.loading = false;
        state.success = true;
      })
      .addCase(changePass.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});



export default formChangePassSlice.reducer;
