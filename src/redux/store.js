import {configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import userSlice from './features/userSlice';
import commonSlice from './features/commonSlice';

const store = configureStore({
  reducer: {
    users: userSlice,
    common: commonSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}).concat(logger),
});

export default store;
