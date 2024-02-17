import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchRegister } from '../../api/authApi.js';

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

// export const addContactsThunk = createAsyncThunk(
//   'contacts/post',
//   async (data, thunkAPI) => {
//     try {
//       const contact = fetchContactsAdd(data);
//       return contact;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// export const deleteContactsThunk = createAsyncThunk(
//   'contacts/delete',
//   async (id, thunkAPI) => {
//     try {
//       const contact = fetchContactsDelId(id);
//       return contact;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
