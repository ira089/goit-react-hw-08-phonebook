import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchContactsAll,
  fetchContactsAdd,
  fetchContactsDelId,
} from '../../api/contactApi';

export const getContactsThunk = createAsyncThunk(
  'contacts/get',
  async (_, thunkAPI) => {
    try {
      const contacts = fetchContactsAll();
      return contacts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactsThunk = createAsyncThunk(
  'contacts/post',
  async (data, thunkAPI) => {
    try {
      console.log(data);
      const contact = fetchContactsAdd(data);
      return contact;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactsThunk = createAsyncThunk(
  'contacts/delete',
  async (id, thunkAPI) => {
    try {
      console.log(id);
      const contact = fetchContactsDelId(id);
      return contact;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
