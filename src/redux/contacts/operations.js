import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchContactsAll,
  fetchContactsAdd,
  fetchContactsDelId,
  fetchContactsChange,
} from '../../api/contactApi';
import { toast } from 'react-toastify';

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
      // console.log(data);
      const contact = fetchContactsAdd(data);
      return contact;
    } catch (error) {
      toast.error(`${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactsThunk = createAsyncThunk(
  'contacts/delete',
  async (id, thunkAPI) => {
    try {
      // console.log(id);
      const contact = fetchContactsDelId(id);
      return contact;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const changeContactsThunk = createAsyncThunk(
  'contacts/path',
  async (data, thunkAPI) => {
    try {
      const id = data.id;
      // console.log(id);
      const dataChange = { ...data };
      delete dataChange.id;
      // console.log(dataChange);
      const contactChange = fetchContactsChange(id, dataChange);
      toast.success('Сontact changed!');
      return contactChange;
    } catch (error) {
      toast.error(`${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
