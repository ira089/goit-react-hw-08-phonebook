import { createSlice } from '@reduxjs/toolkit';
import { registerThunk } from './operationsAuth';
import {
  handleFulfilled,
  handlePending,
  handleRejected,
} from 'functions/functions';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
};

// const handlePending = state => {
//   state.isLoading = true;
// };

// const handleFulfilled = state => {
//   state.isLoading = false;
//   state.error = null;
// };

const handleFulfilledRegister = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
  handleFulfilled(state);
};

const handleFulfilledAdd = (state, { payload }) => {
  handleFulfilled(state);
  state.items.push(payload);
};

const handleFulfilledDel = (state, { payload }) => {
  handleFulfilled(state);
  state.items = state.items.filter(el => el.id !== payload.id);
};

// const handleRejected = (state, { payload }) => {
//   state.isLoading = false;
//   state.error = payload;
// };

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registerThunk.pending, handlePending)
      .addCase(registerThunk.fulfilled, handleFulfilledRegister)
      .addCase(registerThunk.rejected, handleRejected);
    //   .addCase(addContactsThunk.pending, handlePending)
    //   .addCase(addContactsThunk.fulfilled, handleFulfilledAdd)
    //   .addCase(addContactsThunk.rejected, handleRejected)
    //   .addCase(deleteContactsThunk.pending, handlePending)
    //   .addCase(deleteContactsThunk.fulfilled, handleFulfilledDel)
    //   .addCase(deleteContactsThunk.rejected, handleRejected);
  },
});
export const authReducer = authSlice.reducer;
