import {createSlice} from '@reduxjs/toolkit';

const userState = {
  user: {},
};

const userSlice = createSlice({
  name: 'users',
  initialState: userState,
  reducers: {
    register: (state, {payload}) => {
      state.user = payload;
    },
    login: (state, {payload}) => {
      state.user = payload;
    },
    getUser: (state, {payload}) => {
      state.user = payload;
    },
  },
});

export const {login, register, getUser} = userSlice.actions;
export default userSlice.reducer;
