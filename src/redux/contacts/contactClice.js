import { createSlice } from '@reduxjs/toolkit';
import {
  addContactsThunk,
  changeContactsThunk,
  deleteContactsThunk,
  getContactsThunk,
} from './operations';
import {
  handleFulfilled,
  handlePending,
  handleRejected,
} from 'functions/functions';

const handleFulfilledGet = (state, { payload }) => {
  handleFulfilled(state);
  state.items = payload;
};

const handleFulfilledAdd = (state, { payload }) => {
  handleFulfilled(state);
  state.items.push(payload);
};

const handleFulfilledDel = (state, { payload }) => {
  handleFulfilled(state);
  state.items = state.items.filter(el => el.id !== payload.id);
};

const handleFulfilledChange = (state, { payload }) => {
  handleFulfilled(state);
  state.items = state.items.filter(el => el.id !== payload.id);
  state.items.push(payload);
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.pending, handlePending)
      .addCase(getContactsThunk.fulfilled, handleFulfilledGet)
      .addCase(getContactsThunk.rejected, handleRejected)
      .addCase(addContactsThunk.pending, handlePending)
      .addCase(addContactsThunk.fulfilled, handleFulfilledAdd)
      .addCase(addContactsThunk.rejected, handleRejected)
      .addCase(deleteContactsThunk.pending, handlePending)
      .addCase(deleteContactsThunk.fulfilled, handleFulfilledDel)
      .addCase(deleteContactsThunk.rejected, handleRejected)
      .addCase(changeContactsThunk.pending, handlePending)
      .addCase(changeContactsThunk.fulfilled, handleFulfilledChange)
      .addCase(changeContactsThunk.rejected, handleRejected);
  },
});

export const contactReducer = contactSlice.reducer;
