import { configureStore } from '@reduxjs/toolkit';

import { contactReducer } from './contacts/contactClice';
import filterReducer from './contacts/filterSlice';
import { authReducer } from './auth/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactReducer,
    filter: filterReducer,
  },
});
