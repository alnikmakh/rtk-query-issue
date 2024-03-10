import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  someProp: 'initial',
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setSomeProp: (state, action) => {
      state.someProp = action.payload;
    },
  },
});

export const { setSomeProp } = appSlice.actions;
