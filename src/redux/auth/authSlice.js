import { createSlice } from '@reduxjs/toolkit';
import {
  registerThunk,
  loginThunk,
  logOutThunk,
  refresThunk,
} from './operationsAuth';
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

const handleFulfilledLogOut = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
  handleFulfilled(state);
};

// const handleRejected = (state, { payload }) => {
//   state.isLoading = false;
//   state.error = payload;
// };
const handleFulfilledRefrech = (state, { payload }) => {
  state.user.name = payload.name;
  state.user.email = payload.email;
  // state.token = payload.token;
  state.isLoggedIn = true;
  state.isRefreshing = false;
  handleFulfilled(state);
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registerThunk.pending, handlePending)
      .addCase(registerThunk.fulfilled, handleFulfilledRegister)
      .addCase(registerThunk.rejected, handleRejected)
      .addCase(loginThunk.pending, handlePending)
      .addCase(loginThunk.fulfilled, handleFulfilledRegister)
      .addCase(loginThunk.rejected, handleRejected)
      .addCase(logOutThunk.pending, handlePending)
      .addCase(logOutThunk.fulfilled, handleFulfilledLogOut)
      .addCase(logOutThunk.rejected, handleRejected)
      .addCase(refresThunk.pending, state => {
        state.isRefreshing = true;
        state.isLoading = true;
        state.error = null;
      })
      .addCase(refresThunk.fulfilled, handleFulfilledRefrech)
      .addCase(refresThunk.rejected, state => {
        state.isRefreshing = false;
        state.isLoading = false;
      });
  },
});
export const authReducer = authSlice.reducer;
