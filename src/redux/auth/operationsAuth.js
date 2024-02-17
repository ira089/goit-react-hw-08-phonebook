import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchRegister, fetchLogin, fetchLogOut } from '../../api/authApi.js';

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (data, thunkAPI) => {
    try {
      const register = await fetchRegister(data);
      return register;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (data, thunkAPI) => {
    try {
      const login = await fetchLogin(data);
      return login;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOutThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      const logOut = await fetchLogOut();
      return logOut;
    } catch (error) {
      console.log(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
