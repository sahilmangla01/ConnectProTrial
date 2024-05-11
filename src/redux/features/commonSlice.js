import {createSlice} from '@reduxjs/toolkit';

const commonState = {
  isModal: false,
  isLoading: false,
  countries: [],
  states: [],
};

const commonSlice = createSlice({
  name: 'modal',
  initialState: commonState,
  reducers: {
    showModal: (state, {payload}) => {
      state.isModal = payload;
    },
    showLoading: (state, {payload}) => {
      state.isLoading = payload;
    },
    getCounry: (state, {payload}) => {
      state.countries = payload;
    },
    getState: (state, {payload}) => {
      state.states = payload;
    },
  },
});

export const {showModal, showLoading, getCounry, getState} =
  commonSlice.actions;
export default commonSlice.reducer;
